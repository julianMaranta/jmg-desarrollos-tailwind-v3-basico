<template>
  <section 
    id="por-que-elegirnos" 
    class="min-h-auto w-full text-white bg-blue-900 relative overflow-hidden flex items-center justify-center py-6 md:py-8"
  >
    <!-- Contenedor Principal -->
    <div class="w-full max-w-6xl mx-auto px-4 md:px-6 text-center relative z-10 py-6 md:py-8 flex flex-col items-center">
      
      <!-- Contenedor para badge -->
      <div class="relative w-full mb-1 md:mb-6">
        <!-- Badge -->
        <div class="inline-flex items-center bg-blue-800 rounded-full px-4 py-1.5 mb-2 border border-blue-700">
          <div class="w-2 h-2 rounded-full mr-2 bg-white"></div>
          <span class="text-xs font-bold tracking-wider text-white">💎 VENTAJAS EXCLUSIVAS</span>
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
                <!-- Línea única -->
                <div class="text-white leading-tight">
                  ¿Por Qué Elegirnos?
                </div>
              </div>
              
              <!-- Subrayado -->
              <div class="absolute -bottom-1 left-1/4 right-1/4 h-0.5 rounded-full bg-white opacity-80 mt-0.5"></div>
            </span>
          </h2>
          
          <!-- Slogan -->
          <div class="mt-2 md:mt-3">
            <p class="text-base md:text-lg font-bold text-white">
              Creamos <span class="text-white">experiencias digitales</span> que 
              <span class="text-white">impulsan tu negocio</span>
            </p>
          </div>
        </div>
        
        <!-- Subtítulo -->
        <div class="relative max-w-2xl mx-auto mb-4 md:mb-6">
          <div class="relative bg-blue-800/80 border border-blue-700 rounded-lg p-3 md:p-4">
            <p class="text-sm sm:text-base md:text-lg leading-relaxed text-center font-medium text-white">
              <span class="text-white">Transformamos ideas en soluciones digitales</span> 
              que 
              <span class="text-white font-bold">
                superan expectativas
              </span>
            </p>
          </div>
        </div>

        <!-- Technology & Promise Section -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-3 md:gap-4 items-start w-full max-w-6xl mx-auto mt-4 md:mt-6">
          
          <!-- Technology Stack -->
          <div class="relative flex flex-col">
            <!-- Badge -->
            <div class="inline-flex items-center bg-blue-800 rounded-full px-4 py-1.5 mb-2 border border-blue-700 w-full justify-center">
              <div class="w-2 h-2 rounded-full mr-2 bg-white"></div>
              <span class="text-xs font-bold tracking-wider text-white">
                ⚡ TECNOLOGÍA DE VANGUARDIA
              </span>
            </div>
            
            <!-- Título -->
            <div class="relative mb-3 text-center">
              <h3 class="text-xl md:text-2xl font-bold mb-1.5 text-white">
                Stack Tecnológico
              </h3>
              
              <div class="relative bg-blue-800/80 rounded-lg p-4 border border-blue-700">
                <p class="text-sm leading-relaxed max-w-md mx-auto text-white">
                  Dominamos las tecnologías más demandadas para soluciones 
                  <span class="text-white font-semibold">
                    robustas y modernas
                  </span>.
                </p>
              </div>
            </div>
            
            <!-- Grid de tecnologías -->
            <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-2 md:gap-3 w-full">
              <div v-for="(tech, index) in technologies" :key="index" 
                   class="group relative flex flex-col items-center p-4 bg-blue-800/80 rounded-lg border border-blue-700 hover:bg-blue-800">
                   
                <!-- Icono -->
                <div class="relative w-10 h-10 bg-blue-700 rounded-md flex items-center justify-center mb-2 flex-shrink-0">
                  <span class="text-lg text-white">{{ tech.icon }}</span>
                </div>
                
                <!-- Contenido -->
                <div class="relative z-10 w-full text-center">
                  <div class="font-bold text-sm mb-0.5 text-white break-words whitespace-normal leading-tight">
                    {{ tech.name }}
                  </div>
                  <div class="text-xs font-medium text-white/80">
                    {{ tech.category }}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Our Promise -->
          <div class="relative flex flex-col">
            <!-- Badge -->
            <div class="inline-flex items-center bg-blue-800 rounded-full px-4 py-1.5 mb-2 border border-blue-700 w-full justify-center">
              <div class="w-2 h-2 rounded-full mr-2 bg-white"></div>
              <span class="text-xs font-bold tracking-wider text-white">
                💎 NUESTRA PROMESA
              </span>
            </div>
            
            <!-- Título -->
            <div class="relative mb-3 text-center">
              <h4 class="text-xl md:text-2xl font-bold mb-1.5 text-white">
                Compromiso Total
              </h4>
              
              <div class="relative bg-blue-800/80 rounded-lg p-4 border border-blue-700">
                <p class="text-sm leading-relaxed max-w-md mx-auto text-white">
                  Construimos relaciones duraderas basadas en 
                  <span class="text-white font-semibold">
                    confianza y resultados
                  </span>.
                </p>
              </div>
            </div>
            
            <!-- Tarjeta de promesa -->
            <div class="relative bg-blue-800/80 rounded-lg border border-blue-700">
              <div class="relative z-10 p-4">
                <!-- Promesas -->
                <div class="space-y-3">
                  <div v-for="(promise, index) in promises" :key="index" 
                       class="group/promise relative flex items-start p-4 bg-blue-800/80 rounded-lg border border-blue-700 hover:bg-blue-800">
                       
                    <!-- Check -->
                    <div class="relative w-10 h-10 bg-blue-700 rounded-md flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                      <span class="text-lg text-white">✓</span>
                    </div>
                    
                    <!-- Contenido -->
                    <div class="flex-1 min-w-0">
                      <div class="font-bold text-sm mb-1 text-white">{{ promise.title }}</div>
                      <div class="text-sm leading-relaxed text-white/80">{{ promise.description }}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Elemento decorativo final -->
        <div class="mt-4 md:mt-6">
          <div class="w-10 h-0.5 rounded-full mx-auto bg-white"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Datos del componente
const technologies = [
  { icon: '🌐', name: 'HTML & CSS', category: 'Fundamentos' },
  { icon: '⚡', name: 'JavaScript', category: 'Lenguaje' },
  { icon: '⚛️', name: 'React', category: 'Frontend' },
  { icon: '🌀', name: 'Vue.js', category: 'Frontend' },
  { icon: '🚀', name: 'Express.js', category: 'Backend' },
  { icon: '▲', name: 'Next.js', category: 'Fullstack' },
  { icon: '📘', name: 'TypeScript', category: 'Tipado' },
  { icon: '🎨', name: 'Tailwind CSS', category: 'CSS' },
  { icon: '🏗️', name: 'Nest.js', category: 'Backend' }
];

const promises = [
  {
    title: 'Entrega Puntual',
    description: 'Cumplimos con los plazos acordados'
  },
  {
    title: 'Comunicación Clara',
    description: 'Canal abierto con updates semanales durante el proyecto'
  },
  {
    title: 'Satisfacción Garantizada',
    description: 'Trabajamos hasta tu 100% satisfacción con el resultado'
  },
  {
    title: 'Soporte Post-Entrega',
    description: 'No te abandonamos después del lanzamiento'
  }
];
</script>

<style scoped>
/* Estilos responsive básicos */
@media (max-width: 768px) {
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