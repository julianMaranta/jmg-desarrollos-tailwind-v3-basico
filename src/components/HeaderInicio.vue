<template>
  <header 
    id="inicio" 
    class="min-h-[85vh] w-full text-white bg-blue-900 relative overflow-hidden flex items-center justify-center"
    ref="headerRef"
  >
    <!-- Fondo azul sólido (sin video) -->
    <div class="absolute inset-0 w-full h-full z-0 overflow-hidden bg-blue-900">
      <!-- Puedes agregar un patrón sutil si lo deseas -->
      <div class="absolute inset-0 opacity-10 bg-gradient-to-br from-blue-700 via-blue-900 to-blue-800"></div>
    </div>

    <!-- Contenedor principal -->
    <div class="w-full max-w-6xl mx-auto px-4 md:px-6 text-center relative z-10 py-6 md:py-8 flex flex-col items-center">
      
      <!-- Contenedor para badge -->
      <div class="relative w-full mb-1 md:mb-6 pt-8 md:pt-0">
        <!-- Badge -->
        <div class="inline-flex items-center bg-blue-800/90 rounded-full px-4 py-1.5 mb-2 border border-blue-600">
          <div class="w-2 h-2 rounded-full mr-2 bg-white"></div>
          <span class="text-xs font-bold tracking-wider text-white">🚀 AGENCIA DIGITAL</span>
          <div class="ml-2 w-0.5 h-4 rounded-full bg-white/70"></div>
        </div>
      </div>

      <!-- Sección principal con títulos -->
      <div class="w-full flex flex-col items-center space-y-3 md:space-y-4">
        <!-- Título principal -->
        <div class="relative w-full mb-1 md:mb-2 text-center">
          <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-center w-full tracking-tight leading-tight">
            <span class="relative inline-block">
              <div class="relative pb-1">
                <!-- Primera línea -->
                <div class="text-white leading-tight">
                  Transformamos Tu
                </div>
                
                <!-- Segunda línea -->
                <div class="text-white pt-2 md:pt-3 leading-[1.3]">
                  Visión Digital
                </div>
              </div>
              
              <!-- Subrayado -->
              <div class="absolute -bottom-1 left-1/4 right-1/4 h-0.5 rounded-full bg-white opacity-80 mt-0.5"></div>
            </span>
          </h1>
          
          <!-- Slogan -->
          <div class="mt-2 md:mt-3">
            <p class="text-base md:text-lg font-bold text-white">
              De <span class="text-white">Ideas</span> a 
              <span class="text-white">Resultados</span> Excepcionales
            </p>
          </div>
        </div>
        
        <!-- Subtítulo -->
        <div class="relative max-w-2xl mx-auto mb-4 md:mb-6">
          <div class="relative bg-blue-800/80 border border-blue-700 rounded-lg p-3 md:p-4">
            <p class="text-sm sm:text-base md:text-lg leading-relaxed text-center font-medium text-white">
              <span class="text-white">Creamos experiencias web y mobile </span> 
              <span class="text-white font-bold">
                innovadoras que además de captar 
              </span>
              la atención <span class="text-white">generan experiencias únicas</span>
            </p>
          </div>
        </div>

        <!-- Botones CTA -->
        <div class="flex flex-col sm:flex-row gap-2 md:gap-3 justify-center items-center w-full mt-1">
          
          <!-- Botón Primario -->
          <button @click="scrollToSection('servicios')"
                  class="relative bg-white text-blue-900 font-bold py-2.5 px-6 rounded-lg hover:bg-blue-100 text-sm md:text-base">
            <span class="flex items-center justify-center">
              Explorar Servicios
              <span class="ml-2 text-lg">→</span>
            </span>
          </button>
          
          <!-- Botón Secundario -->
          <button @click="scrollToSection('contacto')"
                  class="relative border border-white text-white font-bold py-2.5 px-6 rounded-lg hover:bg-white/10 text-sm md:text-base">
            <span class="relative flex items-center justify-center">
              <img 
                src="/assets/whatsapp-logo1.png" 
                alt="WhatsApp" 
                class="w-5 h-5 mr-2 object-contain"
              />
              Contactar Ahora
            </span>
          </button>
        </div>

        <!-- Stats -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3 max-w-6xl mx-auto w-full px-4 mt-4 md:mt-6">
          <div v-for="(stat, index) in stats" :key="index" class="group relative">
            <!-- Tarjeta Stat -->
            <div class="relative bg-blue-800/70 rounded-lg border border-blue-700 p-4 hover:bg-blue-800/80">
              <div class="relative mb-1 md:mb-2">
                <div class="text-xl md:text-2xl lg:text-3xl font-black leading-none text-white">
                  {{ stat.value }}
                </div>
              </div>
              
              <div class="text-xs font-semibold uppercase tracking-wide text-white">
                <div class="flex items-center justify-center space-x-1">
                  <div class="w-1.5 h-1.5 rounded-full bg-white"></div>
                  <span>{{ stat.label }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted } from 'vue';

// Stats
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

// Referencia al header (mantenida por si necesitas otras funcionalidades)
const headerRef = ref(null);

onMounted(() => {
  // Código de inicialización si es necesario
  console.log('Header mounted');
});
</script>

<style scoped>
/* Estilos responsive básicos */
@media (max-width: 768px) {
  #inicio {
    min-height: 80vh;
  }
  
  .relative.w-full.pt-8 {
    padding-top: 2rem;
  }
  
  .relative.w-full.mb-1 {
    margin-bottom: 0.5rem;
  }
}

@media (max-width: 480px) {
  .grid.grid-cols-2 {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
  
  .relative.w-full.mb-1 {
    margin-bottom: 0.25rem;
  }
  
  .relative.w-full.pt-8 {
    padding-top: 2.5rem;
  }
}
</style>