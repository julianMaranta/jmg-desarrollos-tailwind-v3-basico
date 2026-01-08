<template>
  <header 
    id="inicio" 
    class="min-h-[85vh] w-full text-white relative overflow-hidden flex items-center justify-center"
  >
    <!-- Contenedor de video con múltiples estrategias -->
    <div class="absolute inset-0 w-full h-full z-0 overflow-hidden">
      
      <!-- 1. Background estático de fallback -->
      <div 
        class="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 z-0"
        :class="{'opacity-100': !videoSupported, 'opacity-0': videoSupported && videoLoaded}"
      ></div>
      
    
      
      <!-- 3. Video con estrategia de carga optimizada -->
      <video
        ref="videoEl"
        v-show="videoSupported && videoLoaded"
        :autoplay="canAutoplay"
        muted
        loop
        playsinline
        preload="metadata"
        class="absolute top-0 left-0 w-full h-full object-cover z-10"
        :style="{ filter: 'brightness(0.5)' }"
        @loadeddata="handleVideoLoaded"
        @canplay="handleVideoCanPlay"
        @error="handleVideoError"
        @playing="handleVideoPlaying"
      >
        <!-- IMPORTANTE: Usar rutas absolutas en AWS Amplify -->
        <source 
          :src="videoSources[currentSource].src" 
          :type="videoSources[currentSource].type"
          @error="handleSourceError"
        >
        Tu navegador no soporta el elemento de video.
      </video>
      
      <!-- Overlay para mejor contraste -->
      <div class="absolute inset-0 bg-black/50 z-15"></div>
      
      <!-- Botón de reproducción manual -->
      <button
        v-if="showPlayButton"
        @click="playVideoManually"
        @touchstart="playVideoManually"
        class="absolute bottom-4 right-4 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300 group"
        aria-label="Reproducir video"
      >
        <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path v-if="!isPlaying" d="M8 5v14l11-7z"/>
          <path v-else d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
        </svg>
        <span class="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          {{ isPlaying ? 'Pausar' : 'Reproducir' }}
        </span>
      </button>
    </div>

    <!-- Resto de tu contenido... -->
  </header>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

// Estado del video
const videoEl = ref(null);
const videoLoaded = ref(false);
const videoSupported = ref(true);
const isPlaying = ref(false);
const showPlayButton = ref(false);
const canAutoplay = ref(true);
const currentSource = ref(0);
const retryCount = ref(0);
const maxRetries = 3;

// Fuentes de video - RUTAS ABSOLUTAS IMPORTANTE
const videoSources = [
  {
    src: '/assets/container.mp4',  // MP4 primero para iOS
    type: 'video/mp4',
    label: 'MP4'
  },
  {
    src: '/assets/container.webm', // WebM para otros navegadores
    type: 'video/webm',
    label: 'WebM'
  }
];

// Verificar compatibilidad del navegador
const checkVideoSupport = () => {
  const video = document.createElement('video');
  const canPlayWebM = video.canPlayType('video/webm; codecs="vp8, vorbis"');
  const canPlayMP4 = video.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"');
  
  videoSupported.value = !!(canPlayWebM || canPlayMP4);
  
  // En iOS, forzar MP4
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  if (isIOS) {
    currentSource.value = 0; // MP4
  }
};

// Manejar carga del video
const handleVideoLoaded = () => {
  console.log('Video cargado correctamente');
  videoLoaded.value = true;
  
  // Intentar reproducir
  playVideoWithRetry();
};

const handleVideoCanPlay = () => {
  console.log('Video listo para reproducir');
  videoLoaded.value = true;
};

// Manejar errores del video
const handleVideoError = (e) => {
  console.error('Error en el elemento video:', e);
  
  if (retryCount.value < maxRetries) {
    retryCount.value++;
    console.log(`Reintentando fuente de video (${retryCount.value}/${maxRetries})...`);
    
    // Cambiar a la siguiente fuente
    currentSource.value = (currentSource.value + 1) % videoSources.length;
    
    // Forzar recarga del video
    setTimeout(() => {
      if (videoEl.value) {
        videoEl.value.load();
      }
    }, 1000);
  } else {
    videoSupported.value = false;
    videoLoaded.value = false;
    console.error('Todas las fuentes de video fallaron');
  }
};

const handleSourceError = () => {
  console.error('Error cargando fuente de video');
  handleVideoError(new Error('Source error'));
};

// Reproducir video con reintentos
const playVideoWithRetry = async (retries = 3) => {
  if (!videoEl.value || !videoLoaded.value) return;
  
  try {
    await videoEl.value.play();
    isPlaying.value = true;
    showPlayButton.value = false;
    console.log('Video reproduciéndose automáticamente');
  } catch (error) {
    console.log('Autoplay bloqueado:', error);
    canAutoplay.value = false;
    showPlayButton.value = true;
    
    // En móviles, necesitamos interacción del usuario
    if (retries > 0) {
      console.log(`Reintentando reproducción (${4 - retries}/3)...`);
      setTimeout(() => playVideoWithRetry(retries - 1), 1000);
    }
  }
};

// Reproducción manual
const playVideoManually = async () => {
  if (!videoEl.value) return;
  
  try {
    if (isPlaying.value) {
      videoEl.value.pause();
      isPlaying.value = false;
    } else {
      await videoEl.value.play();
      isPlaying.value = true;
      showPlayButton.value = false;
    }
  } catch (error) {
    console.error('Error en reproducción manual:', error);
  }
};

const handleVideoPlaying = () => {
  isPlaying.value = true;
  showPlayButton.value = false;
};

// Inicialización
onMounted(() => {
  checkVideoSupport();
  
  // Esperar a que el DOM esté listo
  setTimeout(() => {
    if (videoEl.value && videoSupported.value) {
      // Configurar atributos después de montar
      videoEl.value.setAttribute('playsinline', '');
      videoEl.value.setAttribute('webkit-playsinline', '');
      videoEl.value.setAttribute('x5-playsinline', '');
      
      // Forzar carga del video
      videoEl.value.load();
      
      // Configurar listeners de interacción del usuario para móviles
      const handleUserInteraction = () => {
        playVideoWithRetry();
        document.removeEventListener('click', handleUserInteraction);
        document.removeEventListener('touchstart', handleUserInteraction);
        document.removeEventListener('scroll', handleUserInteraction);
      };
      
      // Solo en móviles
      if ('ontouchstart' in window) {
        document.addEventListener('click', handleUserInteraction, { once: true });
        document.addEventListener('touchstart', handleUserInteraction, { once: true });
        document.addEventListener('scroll', handleUserInteraction, { once: true });
        
        // Mostrar botón después de 2 segundos si no hay autoplay
        setTimeout(() => {
          if (!isPlaying.value) {
            showPlayButton.value = true;
          }
        }, 2000);
      }
    }
  }, 500);
});

onBeforeUnmount(() => {
  if (videoEl.value) {
    videoEl.value.pause();
    videoEl.value.removeAttribute('src');
    videoEl.value.load();
  }
});
</script>

<style scoped>
/* Optimizaciones para video en Amplify */
video {
  object-fit: cover;
  object-position: center;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  transform: translateZ(0);
  -webkit-transform: translateZ(0);
}

/* Transiciones suaves */
video, .absolute.inset-0 {
  transition: opacity 0.8s ease-in-out;
}

/* Mejoras para móviles */
@media (max-width: 768px) {
  video {
    /* En móviles, priorizar rendimiento */
    transform: scale(1.01); /* Fix para algunos dispositivos */
  }
  
  /* Ocultar video en dispositivos muy lentos */
  @media (max-height: 600px) {
    video {
      display: none;
    }
  }
}

/* Fix para Safari iOS */
@supports (-webkit-touch-callout: none) {
  video {
    object-fit: cover;
    object-position: center;
    height: 100vh;
    width: 100vw;
  }
}
</style>