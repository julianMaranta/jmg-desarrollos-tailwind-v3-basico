<template>
  <section 
    id="proceso" 
    class="min-h-[50vh] w-full text-black bg-white relative overflow-hidden flex items-center justify-center"
  >
    <!-- Contenedor principal -->
    <div class="w-full max-w-6xl mx-auto px-4 md:px-6 text-center relative z-10 py-6 md:py-8 flex flex-col items-center">
      
      <!-- Contenedor para badge -->
      <div class="relative w-full mb-1 md:mb-6">
        <!-- Badge -->
        <div class="inline-flex items-center bg-blue-50 rounded-full px-4 py-1.5 mb-2 border border-blue-200">
          <div class="w-2 h-2 rounded-full mr-2 bg-blue-500"></div>
          <span class="text-xs font-bold tracking-wider text-blue-800">🚀 ANIMATE</span>
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
                  Empecemos el proceso
                </div>
              </div>
              
              <!-- Subrayado -->
              <div class="absolute -bottom-1 left-1/4 right-1/4 h-0.5 rounded-full bg-blue-500 opacity-60 mt-0.5"></div>
            </span>
          </h2>
          
          <!-- Slogan -->
          <div class="mt-2 md:mt-3">
            <p class="text-base md:text-lg font-bold text-blue-800">
              Consultas y asesorías 
              <span class="text-blue-700 font-bold">
                100% Gratis.
              </span>
              ¡Envíanos un mensaje!
            </p>
          </div>
        </div>
        
        <!-- Subtítulo -->
        <div class="relative max-w-2xl mx-auto mb-4 md:mb-6">
          <div class="relative bg-blue-50 border border-blue-200 rounded-lg p-3 md:p-4 shadow-sm">
            <p class="text-sm sm:text-base md:text-lg leading-relaxed text-center font-medium text-blue-800">
              Sigue los pasos de nuestro 
              <span class="text-blue-700 font-bold">
                proceso probado
              </span>.
            </p>
          </div>
        </div>

        <!-- CTA Section -->
        <div class="text-center mt-1 w-full max-w-2xl mx-auto">
          <div 
            class="bg-blue-50 rounded-2xl border border-blue-200 shadow-sm p-4 md:p-5 w-full flex flex-col items-center justify-center"
          >
            <!-- Título CTA -->
            <h3 
              class="text-lg md:text-xl font-black mb-2 text-center w-full text-blue-900 px-3"
            >
              ¿Listo para Iniciar tu Proyecto?
            </h3>
            
            <!-- Texto CTA -->
            <p 
              class="text-sm md:text-base mb-4 max-w-md text-center text-blue-900"
            >
              De <span class="text-blue-800">Ideas</span> a 
              <span class="text-blue-800">Resultados</span> Excepcionales
            </p>
            
            <!-- Botones CTA -->
            <div class="flex flex-col sm:flex-row gap-2 md:gap-3 justify-center items-center w-full">
              
              <!-- Botón Primario -->
              <button @click="scrollToSection('contacto')"
                      class="relative bg-blue-600 text-white font-bold py-2.5 px-6 rounded-lg hover:bg-blue-700 text-sm md:text-base">
                <span class="flex items-center justify-center">
                  Iniciar Proceso
                  <span class="ml-2 text-lg">🚀</span>
                </span>
              </button>
              
              <!-- Botón Secundario -->
              <button @click="scrollToSection('contacto')"
                      class="relative border border-blue-400 text-blue-800 font-bold py-2.5 px-6 rounded-lg hover:bg-blue-50 text-sm md:text-base">
                <span class="flex items-center justify-center">
                  <span class="mr-2 text-lg">💬</span>
                  Contactar Ahora
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

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
  section {
    min-height: 40vh;
  }
  
  .relative.w-full.mb-1 {
    margin-bottom: 0.5rem !important;
  }
}

@media (max-width: 480px) {
  .relative.w-full.mb-1 {
    margin-bottom: 0.25rem !important;
  }
}
</style>