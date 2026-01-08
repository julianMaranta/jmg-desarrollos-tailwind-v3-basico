<template>
  <section 
    id="servicios" 
    class="min-h-[85vh] w-full text-black bg-white relative overflow-hidden flex items-center justify-center"
  >
    <!-- Contenedor principal -->
    <div class="w-full max-w-6xl mx-auto px-4 md:px-6 text-center relative z-10 py-6 md:py-8 flex flex-col items-center">
      
      <!-- Contenedor para badge -->
      <div class="relative w-full mb-1 md:mb-6">
        <!-- Badge -->
        <div class="inline-flex items-center bg-blue-50 rounded-full px-4 py-1.5 mb-2 border border-blue-200">
          <div class="w-2 h-2 rounded-full mr-2 bg-blue-500"></div>
          <span class="text-xs font-bold tracking-wider text-blue-800">🚀 SERVICIOS</span>
          <div class="ml-2 w-0.5 h-4 rounded-full bg-blue-300"></div>
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
                <div class="text-blue-900 leading-tight">
                  Servicios Premium
                </div>
              </div>
              
              <!-- Subrayado -->
              <div class="absolute -bottom-1 left-1/4 right-1/4 h-0.5 rounded-full bg-blue-500 opacity-60 mt-0.5"></div>
            </span>
          </h2>
        </div>
        
        <!-- Subtítulo -->
        <div class="relative max-w-2xl mx-auto mb-4 md:mb-6">
          <div class="relative bg-blue-50 border border-blue-200 rounded-lg p-3 md:p-4 shadow-sm">
            <p class="text-sm sm:text-base md:text-lg leading-relaxed text-center font-medium text-blue-800">
              <span class="text-blue-900">Planes premium </span> 
              <span class="text-blue-700 font-bold">
                diseñados exclusivamente
              </span>
              para tu <span class="text-blue-800">negocio</span>
            </p>
          </div>
        </div>

        <!-- Grid de servicios -->
        <div class="grid grid-cols-1 lg:grid-cols-4 gap-3 md:gap-4 max-w-6xl mx-auto w-full px-4 mb-4 md:mb-0">
          
          <!-- Plan Básico -->
          <div class="group relative pb-6 md:pb-0">
            <!-- Tarjeta -->
            <div class="relative bg-blue-50 rounded-lg border border-blue-200 p-4 hover:bg-blue-100 h-full flex flex-col">
              
              <!-- Header -->
              <div class="relative mb-3 md:mb-4 text-center flex-shrink-0">
                <div class="w-12 h-12 md:w-14 md:h-14 rounded-lg flex items-center justify-center mb-3 mx-auto bg-blue-100 border border-blue-300">
                  <span class="text-xl md:text-2xl">🌱</span>
                </div>
                
                <h3 class="text-lg md:text-xl font-black mb-1 text-blue-900">
                  Básico
                </h3>
                <p class="text-xs font-semibold tracking-wide uppercase text-blue-700">
                  Página Web Básica
                </p>
              </div>
              
              <!-- Precio -->
              <div class="mb-4 text-center flex-shrink-0">
                <div class="text-xl md:text-2xl lg:text-3xl font-black leading-none mb-1 text-blue-800">
                  $400.000
                </div>
                <div class="text-xs font-medium text-blue-700">
                Soporte Mensual: $10.000
                </div>
              </div>
              
              <!-- Features -->
              <div class="mb-4 flex-grow">
                <ul class="space-y-2">
                  <li v-for="(feature, index) in basicFeatures" :key="index" 
                      class="flex items-start">
                    <div class="w-2 h-2 rounded-full mr-2 mt-1.5 flex-shrink-0 bg-blue-500">
                    </div>
                    <span class="text-sm text-left flex-1 font-medium text-blue-800">
                      {{ feature }}
                    </span>
                  </li>
                </ul>
              </div>
              
              <!-- Botón -->
              <div class="flex-shrink-0">
                <button @click="scrollToSection('contacto')"
                        class="relative w-full bg-blue-600 text-white font-bold py-2.5 px-4 rounded-lg hover:bg-blue-700 text-sm md:text-base">
                  <span class="flex items-center justify-center">
                    Comenzar
                    <span class="ml-2 text-lg">→</span>
                  </span>
                </button>
              </div>
            </div>
          </div>

          <!-- Plan Estándar - Popular -->
          <div class="group relative pb-6 md:pb-0">
            <!-- Badge Popular -->
            <div class="absolute -top-2 left-1/2 transform -translate-x-1/2 z-30">
              <div class="inline-flex items-center bg-blue-50 rounded-full px-3 py-1 border border-blue-200 shadow-sm">
                <div class="w-1.5 h-1.5 rounded-full mr-1.5 bg-blue-500">
                </div>
                <span class="text-xs font-bold tracking-wider text-blue-900">⭐ POPULAR</span>
              </div>
            </div>
            
            <!-- Tarjeta -->
            <div class="relative bg-blue-50 rounded-lg border border-blue-300 p-4 hover:bg-blue-100 h-full flex flex-col">
              
              <!-- Header -->
              <div class="relative mb-3 md:mb-4 text-center flex-shrink-0">
                <div class="w-12 h-12 md:w-14 md:h-14 rounded-lg flex items-center justify-center mb-3 mx-auto bg-blue-100 border border-blue-300">
                  <span class="text-xl md:text-2xl">🚀</span>
                </div>
                
                <h3 class="text-lg md:text-xl font-black mb-1 text-blue-900">
                  Estándar
                </h3>
                <p class="text-xs font-semibold tracking-wide uppercase text-blue-700">
                  Página Web Moderna y Animada
                </p>
              </div>
              
              <!-- Precio -->
              <div class="mb-4 text-center flex-shrink-0">
                <div class="text-xl md:text-2xl lg:text-3xl font-black leading-none mb-1 text-blue-800">
                  $800.000
                </div>
                <div class="text-xs font-medium text-blue-700">
                  Soporte Mensual: $20.000
                </div>
              </div>
              
              <!-- Features -->
              <div class="mb-4 flex-grow">
                <ul class="space-y-2">
                  <li v-for="(feature, index) in standardFeatures" :key="index" 
                      class="flex items-start">
                    <div class="w-2 h-2 rounded-full mr-2 mt-1.5 flex-shrink-0 bg-blue-500">
                    </div>
                    <span class="text-sm text-left flex-1 font-medium text-blue-800">
                      {{ feature }}
                    </span>
                  </li>
                </ul>
              </div>
              
              <!-- Botón -->
              <div class="flex-shrink-0">
                <button @click="scrollToSection('contacto')"
                        class="relative w-full bg-blue-600 text-white font-bold py-2.5 px-4 rounded-lg hover:bg-blue-700 text-sm md:text-base">
                  <span class="flex items-center justify-center">
                    Elegir Plan
                    <span class="ml-2 text-lg">⚡</span>
                  </span>
                </button>
              </div>
            </div>
          </div>

          <!-- Plan Profesional -->
          <div class="group relative pb-6 md:pb-0">
            <!-- Tarjeta -->
            <div class="relative bg-blue-50 rounded-lg border border-blue-300 p-4 hover:bg-blue-100 h-full flex flex-col">
              
              <!-- Header -->
              <div class="relative mb-3 md:mb-4 text-center flex-shrink-0">
                <div class="w-12 h-12 md:w-14 md:h-14 rounded-lg flex items-center justify-center mb-3 mx-auto bg-blue-100 border border-blue-300">
                  <span class="text-xl md:text-2xl">⭐</span>
                </div>
                
                <h3 class="text-lg md:text-xl font-black mb-1 text-blue-900">
                  Avanzado
                </h3>
                <p class="text-xs font-semibold tracking-wide uppercase text-blue-700">
                  Página Web con Administrador
                </p>
              </div>
              
              <!-- Precio -->
              <div class="mb-4 text-center flex-shrink-0">
                <div class="text-xl md:text-2xl lg:text-3xl font-black leading-none mb-1 text-blue-800">
                  $1.400.000
                </div>
                <div class="text-xs font-medium text-blue-700">
                  Soporte Mensual: $30.000
                </div>
              </div>
              
              <!-- Features -->
              <div class="mb-4 flex-grow">
                <ul class="space-y-2">
                  <li v-for="(feature, index) in professionalFeatures" :key="index" 
                      class="flex items-start">
                    <div class="w-2 h-2 rounded-full mr-2 mt-1.5 flex-shrink-0 bg-blue-500">
                    </div>
                    <span class="text-sm text-left flex-1 font-medium text-blue-800">
                      {{ feature }}
                    </span>
                  </li>
                </ul>
              </div>
              
              <!-- Botón -->
              <div class="flex-shrink-0">
                <button @click="scrollToSection('contacto')"
                        class="relative w-full bg-blue-600 text-white font-bold py-2.5 px-4 rounded-lg hover:bg-blue-700 text-sm md:text-base">
                  <span class="flex items-center justify-center">
                    Ir Avanzado
                    <span class="ml-2 text-lg">→</span>
                  </span>
                </button>
              </div>
            </div>
          </div>

          <!-- Plan Empresa -->
          <div class="group relative pb-6 md:pb-0">
            <!-- Tarjeta -->
            <div class="relative bg-blue-50 rounded-lg border border-blue-300 p-4 hover:bg-blue-100 h-full flex flex-col">
              
              <!-- Header -->
              <div class="relative mb-3 md:mb-4 text-center flex-shrink-0">
                <div class="w-12 h-12 md:w-14 md:h-14 rounded-lg flex items-center justify-center mb-3 mx-auto bg-blue-100 border border-blue-300">
                  <span class="text-xl md:text-2xl">🏢</span>
                </div>
                
                <h3 class="text-lg md:text-xl font-black mb-1 text-blue-900">
                  Empresa
                </h3>
                <p class="text-xs font-semibold tracking-wide uppercase text-blue-700">
                  SOLUCIONES CORPORATIVAS
                </p>
              </div>
              
              <!-- Precio -->
              <div class="mb-4 text-center flex-shrink-0">
                <div class="text-xl md:text-2xl lg:text-3xl font-black leading-none mb-1 text-blue-800">
                  Hablemos
                </div>
                <div class="text-xs font-medium text-blue-700">
                  Aplicaciones Web & Mobile Complejas
                </div>
              </div>
              
              <!-- Features -->
              <div class="mb-4 flex-grow">
                <ul class="space-y-2">
                  <li v-for="(feature, index) in enterpriseFeatures" :key="index" 
                      class="flex items-start">
                    <div class="w-2 h-2 rounded-full mr-2 mt-1.5 flex-shrink-0 bg-blue-500">
                    </div>
                    <span class="text-sm text-left flex-1 font-medium text-blue-800">
                      {{ feature }}
                    </span>
                  </li>
                </ul>
              </div>
              
              <!-- Botón -->
              <div class="flex-shrink-0">
                <button @click="scrollToSection('contacto')"
                        class="relative w-full bg-blue-600 text-white font-bold py-2.5 px-4 rounded-lg hover:bg-blue-700 text-sm md:text-base">
                  <span class="flex items-center justify-center">
                    Enviar Mensaje
                    <span class="ml-2 text-lg">→</span>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Nota adicional -->
        <div class="text-center mt-8 md:mt-6 max-w-2xl mx-auto px-4">
          <div class="relative bg-blue-50 border border-blue-200 rounded-lg p-3 md:p-4 shadow-sm">
            <p class="text-xs sm:text-sm leading-relaxed text-center font-medium text-blue-800">
              <span class="text-blue-900">¿Necesitas algo personalizado?</span> 
              Todos los planes son ajustables.
              <button @click="scrollToSection('contacto')"
                      class="inline-flex items-center font-bold ml-1 text-blue-700 hover:text-blue-900">
                Contáctanos
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
import { ref } from 'vue';

// Features de planes
const basicFeatures = [
  'Página web con 5 secciones',
  'Diseño responsive',
  'SEO optimizado',
  'Conexión con WhatsApp',
  'Carrusel de Fotos'
];

const standardFeatures = [
  'Plan anterior incluido',
  'Animaciones interactivas',
  'Diseño UX/UI',
  'Aspecto 3D',
  'Modo Oscuro y Claro'
];

const professionalFeatures = [
  'Planes anteriores incluidos',
  'Panel de Administrador',
  'Contenido editable',
  'Desarrollo Full-Stack',
  'Soporte prioritario'
];

const enterpriseFeatures = [
  'Planes anteriores incluidos',
  'Desarrollo 100% a medida',
  'Diseño personalizado',
  'Branding completo',
  'Funcionalidades complejas'
];

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
  #servicios {
    min-height: 80vh;
  }
  
  .grid.grid-cols-1 {
    gap: 1.5rem;
  }
}

@media (max-width: 480px) {
  .grid.grid-cols-1 {
    gap: 2rem;
  }
}
</style>