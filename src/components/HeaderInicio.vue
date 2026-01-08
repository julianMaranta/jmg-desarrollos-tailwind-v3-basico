<template>
  <header 
    id="inicio" 
    class="min-h-[85vh] w-full text-white relative overflow-hidden flex items-center justify-center"
    ref="headerRef"
  >
    <!-- Video de fondo con fallback optimizado -->
    <div class="absolute inset-0 w-full h-full z-0 overflow-hidden bg-blue-900">
      <video
        ref="videoRef"
        autoplay
        muted
        loop
        playsinline
        preload="auto"
        class="absolute top-0 left-0 w-full h-full object-cover"
        :style="{ filter: 'brightness(0.5)' }"
        @loadeddata="onVideoLoaded"
        @error="onVideoError"
      >
        <!-- Usa múltiples fuentes para compatibilidad -->
        <source :src="videoSrc" type="video/mp4">
        <source :src="videoSrc.replace('.mp4', '.webm')" type="video/webm">
        <!-- Fallback si el video no carga -->
      </video>
      
      <!-- Capa de fallback que se muestra si el video falla -->
      <div 
        v-if="videoFailed" 
        class="absolute inset-0 bg-gradient-to-br from-blue-900 to-purple-900"
      >
        <div class="absolute inset-0 bg-black/40"></div>
      </div>
      <div v-else class="absolute inset-0 bg-black/40"></div>
    </div>

    <!-- Resto del componente permanece igual -->
    <!-- ... -->
  </header>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const videoRef = ref(null);
const videoFailed = ref(false);
const videoSrc = '/assets/container.mp4';

// Stats y funciones de scroll permanecen igual
const stats = [
  { 
    value: 'Desarrollo Express', 
    label: 'VELOCIDAD'
  },
  { 
    value: 'Calidad Premium', 
    label: 'EXCELENCIA'
  },
  { 
    value: 'Soporte Continuo', 
    label: 'COMPROMISO'
  },
  { 
    value: 'Consultas Gratis', 
    label: 'ASESORÍA'
  }
];

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  }
};

// Manejo de video
const onVideoLoaded = () => {
  console.log('Video cargado correctamente');
  videoFailed.value = false;
  
  // Forzar reproducción en móviles
  if (videoRef.value) {
    videoRef.value.play().catch(error => {
      console.warn('Autoplay bloqueado:', error);
      videoFailed.value = true;
    });
  }
};

const onVideoError = (error) => {
  console.error('Error cargando video:', error);
  videoFailed.value = true;
};

onMounted(() => {
  // Intentar reproducir después de un delay
  setTimeout(() => {
    if (videoRef.value) {
      videoRef.value.play().catch(error => {
        console.log('Autoplay falló, intentando con user interaction');
        
        // Agregar listener para intentar reproducir con interacción
        const tryPlayOnInteraction = () => {
          videoRef.value.play().then(() => {
            document.removeEventListener('click', tryPlayOnInteraction);
            document.removeEventListener('touchstart', tryPlayOnInteraction);
          }).catch(e => {
            console.log('Video no se puede reproducir:', e);
            videoFailed.value = true;
          });
        };
        
        document.addEventListener('click', tryPlayOnInteraction);
        document.addEventListener('touchstart', tryPlayOnInteraction);
      });
    }
  }, 1000);
});

onBeforeUnmount(() => {
  // Limpiar listeners
  if (videoRef.value) {
    videoRef.value.pause();
    videoRef.value.removeAttribute('src');
    videoRef.value.load();
  }
});
</script>

<style scoped>
/* Estilos optimizados para video */
video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

/* Asegurar que el contenedor del video tenga altura */
.absolute.inset-0 {
  min-height: 100%;
}

/* Estilos responsive */
@media (max-width: 768px) {
  #inicio {
    min-height: 80vh;
  }
  
  /* Optimizar video para móvil */
  video {
    object-position: 50% 50%;
  }
  
  .grid.grid-cols-2 {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
}

/* Fallback para navegadores que no soportan video */
@supports not (object-fit: cover) {
  video {
    min-width: 100vw;
    min-height: 100vh;
    width: auto;
    height: auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>