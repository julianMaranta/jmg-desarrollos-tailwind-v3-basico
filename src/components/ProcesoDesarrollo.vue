<template>
  <section 
    id="proceso" 
    class="min-h-[85vh] w-full text-white bg-blue-900 relative overflow-hidden flex items-center justify-center"
  >
    <!-- Contenedor principal -->
    <div class="w-full max-w-6xl mx-auto px-4 md:px-6 text-center relative z-10 py-6 md:py-8 flex flex-col items-center">
      
      <!-- Contenedor para badge -->
      <div class="relative w-full mb-1 md:mb-6">
        <!-- Badge -->
        <div class="inline-flex items-center bg-blue-800 rounded-full px-4 py-1.5 mb-2 border border-blue-700">
          <div class="w-2 h-2 rounded-full mr-2 bg-white"></div>
          <span class="text-xs font-bold tracking-wider text-white">🔄 PROCESO</span>
          <div class="ml-2 w-0.5 h-4 rounded-full bg-white/70"></div>
        </div>
      </div>

      <!-- Sección principal con títulos -->
      <div class="w-full flex flex-col items-center space-y-3 md:space-y-4">
        <!-- Título principal -->
        <div class="relative w-full mb-1 md:mb-2 text-center">
          <h2 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-center w-full tracking-tight leading-tight">
            <span class="relative inline-block">
              <div class="relative pb-1">
                <!-- Línea completa -->
                <div class="text-white leading-tight">
                  Metodología Probada
                </div>
              </div>
              
              <!-- Subrayado -->
              <div class="absolute -bottom-1 left-1/4 right-1/4 h-0.5 rounded-full bg-white opacity-80 mt-0.5"></div>
            </span>
          </h2>
        </div>
        
        <!-- Subtítulo -->
        <div class="relative max-w-2xl mx-auto mb-4 md:mb-6">
          <div class="relative bg-blue-800/80 border border-blue-700 rounded-lg p-3 md:p-4">
            <p class="text-sm sm:text-base md:text-lg leading-relaxed text-center font-medium text-white">
              <span class="text-white">Un proceso estructurado </span> 
              <span class="text-white font-bold">
                que garantiza el éxito
              </span>
              de tu <span class="text-white">proyecto digital</span>
            </p>
          </div>
        </div>

        <!-- Contenedor del carrusel de pasos -->
        <div class="relative w-full max-w-6xl mx-auto mb-6 md:mb-8">
          <!-- Contenedor principal con tarjetas -->
          <div class="flex items-center justify-center h-[340px] md:h-[360px]">
            
            <!-- Botón izquierdo -->
            <button 
              @click="prevSlide"
              class="relative z-30 w-12 h-12 md:w-14 md:h-14 bg-blue-800/30 border border-blue-700 rounded-lg flex items-center justify-center hover:bg-blue-800 group mr-2 md:mr-3">
              <div class="relative w-6 h-6 rounded-full flex items-center justify-center bg-white">
                <span class="text-base font-bold text-blue-900">
                  ←
                </span>
              </div>
            </button>

            <!-- Contenedor de tarjetas -->
            <div class="flex-1 relative flex items-center justify-center h-full">
              
              <!-- Tarjeta anterior -->
              <div 
                v-if="prevCard"
                class="absolute left-0 w-[220px] h-[300px] md:w-[260px] md:h-[300px] opacity-80"
              >
                <div 
                  class="w-full h-full bg-blue-800 rounded-lg border border-blue-700 p-4 flex flex-col items-center justify-center group cursor-pointer"
                  style="transform: rotateY(15deg) translateZ(-10px);"
                  @click="prevSlide">
                  
                  <!-- Icono grande -->
                  <div class="flex justify-center mb-4 w-full">
                    <div class="w-16 h-16 rounded-lg flex items-center justify-center border border-blue-600 bg-blue-700">
                      <span class="text-3xl">{{ prevCard.icon }}</span>
                    </div>
                  </div>
                  
                  <!-- Título -->
                  <h3 class="text-base md:text-lg font-black mb-2 text-center w-full px-3 whitespace-normal tracking-tight text-white">
                    {{ prevCard.title }}
                  </h3>
                  
                  <!-- Descripción -->
                  <p class="leading-relaxed text-xs md:text-sm text-center mb-3 w-full px-3 text-white/80">
                    {{ prevCard.description }}
                  </p>
                  
                  <!-- Características -->
                  <ul class="space-y-1.5 w-full px-3 flex-grow">
                    <li v-for="(feature, featureIndex) in prevCard.features" :key="featureIndex" 
                        class="flex items-start justify-start">
                      <div class="w-2 h-2 rounded-full mr-2 mt-0.5 flex-shrink-0 bg-white">
                      </div>
                      <span class="text-xs text-left flex-1 font-medium text-white/85">
                        {{ feature }}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <!-- Tarjeta actual central -->
              <div 
                class="absolute left-1/2 transform -translate-x-1/2 w-[280px] h-[340px] md:w-[320px] md:h-[360px] z-30"
              >
                <div 
                  class="w-full h-full bg-blue-800 rounded-lg border border-blue-600 p-5 md:p-6 flex flex-col items-center justify-center relative">
                  
                  <!-- Icono grande central -->
                  <div class="flex justify-center mb-4 w-full relative">
                    <div class="w-20 h-20 rounded-lg flex items-center justify-center border border-blue-500 bg-blue-700">
                      <span class="text-4xl">{{ currentCard.icon }}</span>
                    </div>
                  </div>
                  
                  <!-- Título principal -->
                  <h3 class="text-lg md:text-xl font-black mb-3 text-center w-full px-4 whitespace-normal tracking-tight text-white">
                    {{ currentCard.title }}
                  </h3>
                  
                  <!-- Descripción -->
                  <p class="leading-relaxed text-sm md:text-base text-center mb-4 w-full px-4 text-white/90">
                    {{ currentCard.description }}
                  </p>
                  
                  <!-- Características -->
                  <ul class="space-y-1.5 w-full px-4 mb-4 flex-grow">
                    <li v-for="(feature, featureIndex) in currentCard.features" :key="featureIndex" 
                        class="flex items-start justify-start">
                      <div class="w-2 h-2 rounded-full mr-2 mt-0.5 flex-shrink-0 bg-white">
                      </div>
                      <span class="text-sm md:text-base text-left flex-1 font-semibold text-white/85">
                        {{ feature }}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <!-- Tarjeta siguiente -->
              <div 
                v-if="nextCard"
                class="absolute right-0 w-[220px] h-[300px] md:w-[260px] md:h-[300px] opacity-80"
              >
                <div 
                  class="w-full h-full bg-blue-800 rounded-lg border border-blue-700 p-4 flex flex-col items-center justify-center group cursor-pointer"
                  style="transform: rotateY(-15deg) translateZ(-10px);"
                  @click="nextSlide">
                  
                  <!-- Icono grande -->
                  <div class="flex justify-center mb-4 w-full">
                    <div class="w-16 h-16 rounded-lg flex items-center justify-center border border-blue-600 bg-blue-700">
                      <span class="text-3xl">{{ nextCard.icon }}</span>
                    </div>
                  </div>
                  
                  <!-- Título -->
                  <h3 class="text-base md:text-lg font-black mb-2 text-center w-full px-3 whitespace-normal tracking-tight text-white">
                    {{ nextCard.title }}
                  </h3>
                  
                  <!-- Descripción -->
                  <p class="leading-relaxed text-xs md:text-sm text-center mb-3 w-full px-3 text-white/80">
                    {{ nextCard.description }}
                  </p>
                  
                  <!-- Características -->
                  <ul class="space-y-1.5 w-full px-3 flex-grow">
                    <li v-for="(feature, featureIndex) in nextCard.features" :key="featureIndex" 
                        class="flex items-start justify-start">
                      <div class="w-2 h-2 rounded-full mr-2 mt-0.5 flex-shrink-0 bg-white">
                      </div>
                      <span class="text-xs text-left flex-1 font-medium text-white/85">
                        {{ feature }}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <!-- Botón derecho -->
            <button 
              @click="nextSlide"
              class="relative z-30 w-12 h-12 md:w-14 md:h-14 bg-blue-800/30 border border-blue-700 rounded-lg flex items-center justify-center hover:bg-blue-800 group ml-2 md:ml-3">
              <div class="relative w-6 h-6 rounded-full flex items-center justify-center bg-white">
                <span class="text-base font-bold text-blue-900">
                  →
                </span>
              </div>
            </button>
          </div>

          <!-- Indicadores -->
          <div class="flex justify-center items-center mt-4 md:mt-6 space-x-2 md:space-x-3">
            <button 
              v-for="(step, index) in steps" 
              :key="index"
              @click="goToSlide(index)"
              class="relative w-6 h-6 md:w-8 md:h-8 rounded-full group">
              <div 
                class="absolute inset-0 rounded-full flex items-center justify-center border"
                :class="currentIndex === index 
                  ? 'bg-white border-white' 
                  : 'bg-blue-800/30 border-blue-700'"
              >
                <span class="text-xs font-bold"
                      :class="currentIndex === index 
                        ? 'text-blue-900' 
                        : 'text-white/60'">
                  {{ step.icon }}
                </span>
              </div>
            </button>
          </div>
        </div>

        <!-- Nota adicional -->
        <div class="text-center mt-4 md:mt-6 max-w-2xl mx-auto px-4">
          <div class="relative bg-blue-800/80 border border-blue-700 rounded-lg p-3 md:p-4">
            <p class="text-xs sm:text-sm leading-relaxed text-center font-medium text-white">
              <span class="text-white">¿Listo para comenzar?</span> 
              Nuestro proceso probado garantiza resultados excepcionales en cada paso.
              <button @click="scrollToSection('contacto')"
                      class="inline-flex items-center font-bold ml-1 text-white hover:text-blue-200">
                Iniciar Proyecto
                <span class="ml-1">
                  ↗
                </span>
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue';

// Pasos del proceso
const steps = [
  {
    icon: "💡",
    title: "Estrategia",
    description: "Comprendemos tu negocio para un producto digital.",
    features: [
      "Análisis de competencia",
      "Definición de objetivos",
      "Planificación estratégica"
    ]
  },
  {
    icon: "🎨",
    title: "Diseño",
    description: "Creamos diseños visualmente impactantes.",
    features: [
      "Wireframes y prototipos",
      "Diseño UI/UX",
      "Pruebas de usabilidad"
    ]
  },
  {
    icon: "⚡",
    title: "Desarrollo",
    description: "Tu sitio web con las mejores tecnologías.",
    features: [
      "Desarrollo Full Stack",
      "Funcionalidades avanzadas",
      "Optimización SEO"
    ]
  },
  {
    icon: "🚀",
    title: "Lanzamiento",
    description: "Desplegamos tu sitio web.",
    features: [
      "Lanzamiento seguro",
      "Monitoreo y analytics",
      "Soporte y mantenimiento"
    ]
  }
];

const currentIndex = ref(0);
const isAnimating = ref(false);

// Computed properties
const currentCard = computed(() => steps[currentIndex.value]);
const prevCard = computed(() => {
  const prevIndex = (currentIndex.value - 1 + steps.length) % steps.length;
  return steps[prevIndex];
});
const nextCard = computed(() => {
  const nextIndex = (currentIndex.value + 1) % steps.length;
  return steps[nextIndex];
});

// Navigation
const navigateToSlide = async (index) => {
  if (isAnimating.value || index === currentIndex.value) return;
  
  isAnimating.value = true;
  await new Promise(resolve => setTimeout(resolve, 300));
  currentIndex.value = index;
  await new Promise(resolve => setTimeout(resolve, 300));
  isAnimating.value = false;
};

const nextSlide = () => {
  const nextIndex = (currentIndex.value + 1) % steps.length;
  navigateToSlide(nextIndex);
};

const prevSlide = () => {
  const prevIndex = (currentIndex.value - 1 + steps.length) % steps.length;
  navigateToSlide(prevIndex);
};

const goToSlide = (index) => navigateToSlide(index);

// Scroll a sección
const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  }
};
</script>

<style scoped>
/* Estilos responsive básicos */
@media (max-width: 768px) {
  #proceso {
    min-height: 80vh;
  }
  
  .relative.w-full.mb-1 {
    margin-bottom: 0.5rem;
  }
  
  /* Altura del contenedor */
  .h-\[340px\] {
    height: 340px;
  }
  
  /* Altura de tarjetas */
  .h-\[300px\] {
    height: 300px;
  }
  
  .h-\[340px\] {
    height: 340px;
  }
}

@media (max-width: 480px) {
  .relative.w-full.mb-1 {
    margin-bottom: 0.25rem;
  }
  
  /* Altura reducida para pantallas muy pequeñas */
  .h-\[340px\] {
    height: 320px;
  }
  
  .h-\[300px\] {
    height: 280px;
  }
  
  .h-\[340px\] {
    height: 300px;
  }
}
</style>