<template>
  <section 
    id="servicios" 
    class="min-h-[85vh] w-full text-white relative overflow-hidden flex items-center justify-center transition-all duration-150 ease-out"
    :style="sectionGradientStyle"
  >
    <!-- Capa de fondo principal (EXACTO AL INICIO) -->
    <div 
      class="absolute inset-0 transition-all duration-150 ease-out overflow-hidden"
      :style="sectionGradientStyle"
    >
      <!-- Efecto de partículas -->
      <div class="absolute inset-0">
        <div v-for="i in 25" :key="i" 
             class="absolute rounded-full transition-all duration-150"
             :class="isDarkMode ? 'bg-blue-400/15' : 'bg-white/15'"
             :style="`
               width: ${Math.random() * 2 + 1}px;
               height: ${Math.random() * 2 + 1}px;
               top: ${Math.random() * 100}%;
               left: ${Math.random() * 100}%;
               animation-delay: ${Math.random() * 0.3}s;
               opacity: ${isTransitioning ? 0.6 : 0.2};
             `">
        </div>
      </div>
    </div>

    <!-- Efectos de fondo animados (EXACTO AL INICIO) -->
    <div class="absolute inset-0 overflow-hidden transition-all duration-150 ease-out">
      <transition name="theme-fade-fast" mode="out-in">
        <div v-if="isDarkMode" key="dark-bg-1" class="absolute top-1/4 -left-12 w-48 h-48 bg-gradient-to-br from-blue-500/25 to-cyan-400/15 rounded-full blur-2xl animate-pulse-fast transition-all duration-150"
             :style="isTransitioning ? { opacity: 0.4, transform: 'scale(1.05)' } : {}"></div>
        <div v-else key="light-bg-1" class="absolute top-1/4 -left-12 w-48 h-48 bg-gradient-to-br from-blue-100/40 to-blue-50/30 rounded-full blur-2xl animate-pulse-fast transition-all duration-150"
             :style="isTransitioning ? { opacity: 0.4, transform: 'scale(1.05)' } : {}"></div>
      </transition>
      
      <transition name="theme-fade-fast" mode="out-in">
        <div v-if="isDarkMode" key="dark-bg-2" class="absolute bottom-1/3 -right-12 w-52 h-52 bg-gradient-to-br from-indigo-500/25 to-blue-500/15 rounded-full blur-2xl animate-pulse-fast animate-delay-300 transition-all duration-150"
             :style="isTransitioning ? { opacity: 0.4, transform: 'scale(1.05)' } : {}"></div>
        <div v-else key="light-bg-2" class="absolute bottom-1/3 -right-12 w-52 h-52 bg-gradient-to-br from-blue-100/50 to-blue-50/30 rounded-full blur-2xl animate-pulse-fast animate-delay-300 transition-all duration-150"
             :style="isTransitioning ? { opacity: 0.4, transform: 'scale(1.05)' } : {}"></div>
      </transition>
      
      <transition name="theme-fade-fast" mode="out-in">
        <div v-if="isDarkMode" key="dark-bg-3" class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-br from-blue-600/15 to-cyan-500/10 rounded-full blur-2xl animate-pulse-fast animate-delay-600 transition-all duration-150"
             :style="isTransitioning ? { opacity: 0.4, transform: 'scale(1.05)' } : {}"></div>
        <div v-else key="light-bg-3" class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-br from-blue-100/30 to-blue-50/20 rounded-full blur-2xl animate-pulse-fast animate-delay-600 transition-all duration-150"
             :style="isTransitioning ? { opacity: 0.4, transform: 'scale(1.05)' } : {}"></div>
      </transition>
      
      <!-- Partículas flotantes -->
      <div v-for="i in 8" :key="i" 
           class="absolute w-0.5 h-0.5 rounded-full animate-float transition-all duration-150"
           :class="isDarkMode ? 'bg-blue-400/40' : 'bg-blue-300/40'"
           :style="`
             top: ${Math.random() * 100}%; 
             left: ${Math.random() * 100}%; 
             animation-delay: ${Math.random() * 1.5}s;
           `">
      </div>

      <!-- Gradientes de borde -->
      <div class="absolute top-0 left-0 right-0 h-32 transition-all duration-150"
           :class="isDarkMode ? 'bg-gradient-to-b from-blue-900/40 to-transparent' : 'bg-gradient-to-b from-blue-100/40 to-transparent'">
      </div>
      <div class="absolute bottom-0 left-0 right-0 h-32 transition-all duration-150"
           :class="isDarkMode ? 'bg-gradient-to-t from-blue-800/30 to-transparent' : 'bg-gradient-to-t from-blue-200/30 to-transparent'">
      </div>
    </div>

    <!-- Contenedor principal -->
    <div class="w-full max-w-6xl mx-auto px-4 md:px-6 text-center relative z-10 py-6 md:py-8 flex flex-col items-center">
      
      <!-- Contenedor para badge y botón de temas (EXACTO AL INICIO) -->
      <div class="relative w-full mb-1 md:mb-6">
        <!-- Badge animado compacto -->
        <div 
          class="inline-flex items-center backdrop-blur-lg rounded-full px-4 py-1.5 mb-2 shadow-glow animate-pulse-slow transition-all duration-150"
          :class="isDarkMode 
            ? 'bg-gradient-to-r from-blue-600/40 to-cyan-500/30 border border-cyan-400/40' 
            : 'bg-gradient-to-r from-blue-500/30 to-blue-400/40 border border-blue-400/50'"
          :style="isTransitioning ? { 
            filter: 'brightness(1.1)',
            boxShadow: isDarkMode 
              ? '0 0 15px rgba(34, 211, 238, 0.3)' 
              : '0 0 15px rgba(59, 130, 246, 0.3)'
          } : {}"
        >
          <div 
            class="w-2 h-2 rounded-full mr-2 animate-pulse-fast transition-all duration-150"
            :class="isDarkMode 
              ? 'bg-gradient-to-r from-cyan-400 to-blue-300' 
              : 'bg-gradient-to-r from-blue-400 to-blue-300'"
            :style="isTransitioning ? { 
              transform: 'scale(1.1)'
            } : {}"
          ></div>
          <span class="text-xs font-bold tracking-wider transition-colors duration-150"
                :class="isDarkMode ? 'text-white' : 'text-blue-900'">🚀 SERVICIOS</span>
          <div 
            class="ml-2 w-0.5 h-4 rounded-full transition-all duration-150"
            :class="isDarkMode 
              ? 'bg-gradient-to-b from-blue-300/30 to-blue-400/30' 
              : 'bg-gradient-to-b from-blue-400/30 to-blue-500/30'">
          </div>
        </div>

        <!-- Botón de tema compacto - AUMENTADO EN MÓVIL (EXACTO AL INICIO) -->
        <div class="absolute top-0 right-0 md:right-2 z-50">
          <button
            @click="toggleTheme"
            class="relative flex items-center justify-center w-10 h-10 md:w-32 md:h-12 rounded-lg border shadow-md hover:shadow-lg transform hover:scale-105 active:scale-95 transition-all duration-150 ease-out overflow-hidden group theme-switch-premium"
            :class="isDarkMode 
              ? 'border-cyan-400/50 hover:border-cyan-300 shadow-cyan-500/15 bg-gradient-to-br from-blue-900/80 via-indigo-900/80 to-purple-900/80' 
              : 'border-blue-300/50 hover:border-blue-200 shadow-blue-400/15 bg-gradient-to-br from-white/90 via-blue-50/90 to-blue-100/90'"
            :title="isDarkMode ? 'Cambiar a tema claro' : 'Cambiar a tema oscuro'"
            aria-label="Cambiar tema"
          >
            <!-- Switch compacto - MÁS GRANDE EN MÓVIL -->
            <div 
              class="absolute w-8 h-8 md:w-12 md:h-12 rounded-full transition-all duration-300 ease-out transform z-30 overflow-hidden"
              :class="isDarkMode ? 'right-1 md:right-3' : 'left-1 md:left-3'"
              :style="isTransitioning ? { 
                filter: 'brightness(1.1)',
                boxShadow: isDarkMode 
                  ? '0 0 15px rgba(96, 165, 250, 0.4), inset 0 0 15px rgba(96, 165, 250, 0.2)' 
                  : '0 0 15px rgba(250, 204, 21, 0.4), inset 0 0 15px rgba(250, 204, 21, 0.2)'
              } : {}"
            >
              <!-- Fondo del switch -->
              <div class="absolute inset-0">
                <!-- Base del switch con gradiente -->
                <div 
                  class="absolute inset-0 transition-all duration-150"
                  :class="isDarkMode 
                    ? 'bg-gradient-to-br from-blue-700 via-blue-600 to-blue-800' 
                    : 'bg-gradient-to-br from-yellow-400 via-yellow-300 to-yellow-500'"
                ></div>
                
                <!-- Efecto de luz interior pulsante -->
                <div class="absolute inset-0 bg-gradient-to-br from-transparent via-white/40 to-transparent opacity-60 animate-pulse-slow transition-all duration-150"></div>
                
                <!-- Brillo de borde -->
                <div 
                  class="absolute inset-0 rounded-full border transition-all duration-150"
                  :class="isDarkMode 
                    ? 'border-blue-400/80' 
                    : 'border-yellow-400/80'"
                  :style="isTransitioning ? { 
                    boxShadow: isDarkMode 
                      ? '0 0 10px rgba(96, 165, 250, 0.5), inset 0 0 8px rgba(96, 165, 250, 0.3)' 
                      : '0 0 10px rgba(250, 204, 21, 0.5), inset 0 0 8px rgba(250, 204, 21, 0.3)'
                  } : {}"
                ></div>
              </div>
              
              <!-- Icono dentro del switch (SVG) - AJUSTADO PARA MÓVIL -->
              <div class="absolute inset-0 flex items-center justify-center z-10">
                <!-- Icono de Luna para tema oscuro -->
                <svg v-if="isDarkMode" class="w-5 h-5 md:w-6 md:h-6 transition-all duration-150" fill="currentColor" viewBox="0 0 20 20"
                     :class="isTransitioning ? 'text-blue-200' : 'text-blue-300'">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"/>
                </svg>
                
                <!-- Icono de Sol para tema claro -->
                <svg v-else class="w-5 h-5 md:w-6 md:h-6 transition-all duration-150" fill="currentColor" viewBox="0 0 20 20"
                     :class="isTransitioning ? 'text-yellow-200' : 'text-yellow-400'">
                  <path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd"/>
                </svg>
              </div>
              
              <!-- Brillo central -->
              <div class="absolute top-1/2 left-1/2 w-2 h-2 rounded-full transform -translate-x-1/2 -translate-y-1/2 blur-sm transition-all duration-150"
                   :class="isDarkMode ? 'bg-blue-300/70' : 'bg-yellow-300/70'"></div>
            </div>
            
            <!-- Efecto de brillo al hover -->
            <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-30 transition-opacity duration-300 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 ease-out"></div>
            
            <!-- Contenedor principal con iconos -->
            <div class="relative w-full h-full flex items-center justify-center overflow-hidden">
              
              <!-- Sol (izquierda) - AJUSTADO POSICIÓN PARA MÓVIL -->
              <div class="absolute left-2 md:left-3 w-5 h-5 md:w-6 md:h-6 transition-all duration-150 ease-out z-20"
                   :class="isDarkMode 
                     ? 'opacity-30 scale-90 text-yellow-300/40' 
                     : 'opacity-100 scale-105 text-yellow-400'">
                <svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd"/>
                </svg>
              </div>
              
              <!-- Luna (derecha) - AJUSTADO POSICIÓN PARA MÓVIL -->
              <div class="absolute right-2 md:right-3 w-4 h-4 md:w-5 md:h-5 transition-all duration-150 ease-out z-20"
                   :class="!isDarkMode 
                     ? 'opacity-30 scale-90 text-blue-400/40' 
                     : 'opacity-100 scale-105 text-blue-300'">
                <svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"/>
                </svg>
              </div>
              
              <!-- Texto "DÍA/NOCHE" - OCULTO EN MÓVIL -->
              <div class="absolute -bottom-4 left-1/2 transform -translate-x-1/2 text-[9px] font-semibold uppercase tracking-wide opacity-80 z-5 transition-all duration-150 whitespace-nowrap hidden md:block"
                   :class="isDarkMode ? 'text-blue-300/80' : 'text-yellow-600/80'">
                {{ isDarkMode ? 'NOCHE' : 'DÍA' }}
              </div>
              
            </div>
            
            <!-- Rayos del sol animados -->
            <div v-if="!isDarkMode" class="absolute left-2 md:left-3 w-5 h-5 md:w-6 md:h-6 z-10">
              <div v-for="(ray, index) in 8" :key="index"
                   class="absolute top-1/2 left-1/2 w-0.5 h-2.5 bg-yellow-300/60 rounded-full transform origin-center transition-all duration-150"
                   :style="`
                     transform: rotate(${index * 45}deg) translateY(-10px);
                     animation: pulse-ray-fast 1.5s ease-in-out infinite;
                     animation-delay: ${index * 0.03}s;
                   `">
              </div>
            </div>
            
            <!-- Constelación estelar -->
            <div v-if="isDarkMode" class="absolute right-2 md:right-3 w-4 h-4 md:w-5 md:h-5 z-10">
              <div v-for="(star, index) in 3" :key="index"
                   class="absolute rounded-full bg-blue-100/60 animate-twinkle-fast transition-all duration-150"
                   :style="`
                     width: ${Math.random() * 1 + 0.6}px;
                     height: ${Math.random() * 1 + 0.6}px;
                     top: ${Math.random() * 100}%;
                     left: ${Math.random() * 100}%;
                     animation-delay: ${index * 0.15}s;
                   `">
              </div>
            </div>
            
            <!-- Tooltip - OCULTO EN MÓVIL -->
            <div class="absolute -bottom-6 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none z-50 hidden md:block">
              <div class="px-1.5 py-0.5 text-[9px] font-medium rounded backdrop-blur-sm shadow-sm"
                   :class="isDarkMode 
                     ? 'bg-blue-900/80 text-blue-300 border border-blue-400/20' 
                     : 'bg-yellow-50/90 text-yellow-800 border border-yellow-400/20'">
                {{ isDarkMode ? 'Activar día' : 'Activar noche' }}
              </div>
            </div>
            
          </button>
        </div>
      </div>

      <!-- Sección principal con títulos -->
      <div class="w-full flex flex-col items-center space-y-3 md:space-y-4">
        <!-- Título principal EN UN SOLO RENGLÓN (MISMO TAMAÑO QUE INICIO) -->
        <div class="relative w-full mb-1 md:mb-2 transition-all duration-150 text-center">
          <h2 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-center w-full tracking-tight leading-tight animate-slideInLeft transition-all duration-150">
            <span class="relative inline-block">
              <div class="relative pb-1">
                <!-- Línea completa -->
                <div 
                  class="bg-clip-text text-transparent leading-tight transition-all duration-150"
                  :class="isDarkMode 
                    ? 'bg-gradient-to-r from-white via-cyan-200 to-blue-100' 
                    : 'bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700'">
                  Servicios Premium
                </div>
              </div>
              
              <!-- Subrayado animado (EXACTO A OTRAS SECCIONES) -->
              <div 
                class="absolute -bottom-1 left-1/4 right-1/4 h-0.5 rounded-full opacity-60 mt-0.5 transition-all duration-150"
                :class="isDarkMode 
                  ? 'bg-gradient-to-r from-cyan-400 to-blue-300' 
                  : 'bg-gradient-to-r from-blue-500 to-blue-400'">
              </div>
            </span>
          </h2>
          
          <!-- Slogan (EXACTO AL INICIO) 
          <div class="mt-2 md:mt-3 animate-fadeInUp transition-all duration-150" style="animation-delay: 50ms">
            <p class="text-base md:text-lg font-bold transition-colors duration-150"
               :class="isDarkMode ? 'text-blue-100/90' : 'text-blue-700/90'">
              De <span :class="isDarkMode ? 'text-blue-200' : 'text-blue-800'">Ideas</span> a 
              <span :class="isDarkMode ? 'text-blue-200' : 'text-blue-800'">Resultados</span> Excepcionales
            </p>
          </div>-->
        </div>
        
        <!-- Subtítulo (CONSISTENTE CON INICIO) -->
        <div class="relative max-w-2xl mx-auto mb-4 md:mb-6 animate-fadeInUp transition-all duration-150" style="animation-delay: 100ms">
          <div class="relative backdrop-blur-sm border rounded-lg p-3 md:p-4 shadow-lg transform transition-all duration-150 hover:scale-102"
               :class="isDarkMode 
                 ? 'bg-blue-900/20 border-blue-400/15 shadow-blue-500/10 hover:border-blue-300/30' 
                 : 'bg-blue-50/20 border-blue-300/15 shadow-blue-400/10 hover:border-blue-400/30'">
            <p class="text-sm sm:text-base md:text-lg leading-relaxed text-center font-medium transition-colors duration-150"
               :class="isDarkMode ? 'text-white/90' : 'text-blue-800/90'">
              <span :class="isDarkMode ? 'text-white' : 'text-blue-900'">Planes premium </span> 
              <span class="relative inline-block">
                <span 
                  class="bg-clip-text text-transparent font-bold transition-all duration-150"
                  :class="isDarkMode 
                    ? 'bg-gradient-to-r from-blue-300 via-blue-200 to-white' 
                    : 'bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400'">
                  diseñados exclusivamente
                </span>
                <!-- Brillo de fondo del texto -->
                <div 
                  class="absolute inset-0 blur-sm -z-10 rounded-full transition-all duration-150"
                  :class="isDarkMode 
                    ? 'bg-gradient-to-r from-blue-400/20 via-blue-300/15 to-blue-200/15' 
                    : 'bg-gradient-to-r from-blue-500/20 via-blue-400/15 to-blue-300/15'">
                </div>
              </span>
              para tu <span :class="isDarkMode ? 'text-blue-100' : 'text-blue-700'">negocio</span>
            </p>
          </div>
        </div>

        <!-- Grid de servicios (CONSISTENTE EN COLORES Y ESTILOS) -->
        <!-- CAMBIO AQUÍ: Agregado mb-8 en móvil para más espacio entre tarjetas -->
        <div class="grid grid-cols-1 lg:grid-cols-4 gap-3 md:gap-4 max-w-6xl mx-auto w-full px-4 animate-fadeInUp transition-all duration-150 mb-4 md:mb-0" style="animation-delay: 150ms">
          
          <!-- Plan Básico -->
          <!-- CAMBIO AQUÍ: Agregado pb-6 en móvil para más espacio debajo de la tarjeta -->
          <div class="group relative animate-fadeInUp transition-all duration-150 pb-6 md:pb-0" style="animation-delay: 80ms">
            <!-- Tarjeta (ESTILOS IGUALES A LAS TARJETAS DE STATS DEL INICIO) -->
            <div class="relative backdrop-blur-xl rounded-lg border p-4 transform transition-all duration-150 group-hover:-translate-y-0.5 group-hover:scale-105 group-hover:shadow-lg shadow-md hover:shadow-glow h-full flex flex-col"
                 :class="isDarkMode 
                   ? 'bg-gradient-to-br from-blue-700/40 via-indigo-800/50 to-blue-900/40 border-cyan-400/40 hover:border-cyan-300/50' 
                   : 'bg-gradient-to-br from-blue-50/80 via-blue-100/70 to-blue-200/60 border-blue-400/50 hover:border-blue-500/60'">
              
              <!-- Header -->
              <div class="relative mb-3 md:mb-4 text-center flex-shrink-0">
                <div class="w-12 h-12 md:w-14 md:h-14 rounded-lg flex items-center justify-center mb-3 mx-auto transform transition-all duration-150 group-hover:scale-110 animate-pulse-slow"
                     :class="isDarkMode 
                       ? 'bg-gradient-to-br from-blue-500/70 to-cyan-500/70 border border-cyan-400/30' 
                       : 'bg-gradient-to-br from-blue-200/70 to-blue-300/70 border border-blue-300/30'">
                  <span class="text-xl md:text-2xl">🌱</span>
                </div>
                
                <h3 class="text-lg md:text-xl font-black mb-1 transition-colors duration-150"
                    :class="isDarkMode ? 'text-white' : 'text-blue-900'">
                  Básico
                </h3>
                <p class="text-xs font-semibold tracking-wide uppercase transition-colors duration-150"
                   :class="isDarkMode ? 'text-blue-100/60' : 'text-blue-700/60'">
                  Página Web Básica
                </p>
              </div>
              
              <!-- Precio (ESTILOS IGUALES A LOS STATS) -->
              <div class="mb-4 text-center flex-shrink-0">
                <div class="text-xl md:text-2xl lg:text-3xl font-black leading-none mb-1 transition-all duration-150"
                     :class="isDarkMode ? 'text-blue-200' : 'text-blue-800'">
                  $400.000
                </div>
                <div class="text-xs font-medium transition-colors duration-150"
                     :class="isDarkMode ? 'text-white/90' : 'text-blue-700/90'">
                Soporte Mensual: $10.000
                </div>
              </div>
              
              <!-- Features -->
              <div class="mb-4 flex-grow">
                <ul class="space-y-2">
                  <li v-for="(feature, index) in basicFeatures" :key="index" 
                      class="flex items-start transform group-hover:translate-x-1 transition-transform duration-150"
                      :style="`transition-delay: ${index * 50}ms`">
                    <div class="w-2 h-2 rounded-full mr-2 mt-1.5 flex-shrink-0 shadow-sm animate-pulse-fast"
                         :class="isDarkMode 
                           ? 'bg-gradient-to-r from-cyan-400 to-blue-300' 
                           : 'bg-gradient-to-r from-blue-400 to-blue-300'">
                    </div>
                    <span class="text-sm text-left flex-1 font-medium transition-colors duration-150"
                          :class="isDarkMode ? 'text-white/85' : 'text-blue-800/85'">
                      {{ feature }}
                    </span>
                  </li>
                </ul>
              </div>
              
              <!-- Botón (IGUAL A LOS BOTONES DEL INICIO) -->
              <div class="flex-shrink-0">
                <button @click="scrollToSection('contacto')"
                        class="group/btn relative w-full text-white font-bold py-2.5 px-4 rounded-xl transition-all duration-150 transform hover:scale-105 hover:-translate-y-0.5 shadow-lg hover:shadow-glow-hover text-sm md:text-base overflow-hidden"
                        :class="isDarkMode 
                          ? 'bg-gradient-to-r from-blue-600 via-cyan-700 to-indigo-800 hover:from-blue-700 hover:via-cyan-800 hover:to-indigo-900' 
                          : 'bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 hover:from-blue-700 hover:via-blue-800 hover:to-blue-900'">
                  <!-- Efecto de brillo al hover -->
                  <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-300"></div>
                  
                  <span class="flex items-center justify-center relative">
                    Comenzar
                    <span class="ml-2 text-lg animate-bounce-fast">→</span>
                  </span>
                </button>
              </div>
            </div>
          </div>

          <!-- Plan Estándar - Popular -->
          <!-- CAMBIO AQUÍ: Agregado pb-6 en móvil para más espacio debajo de la tarjeta -->
          <div class="group relative animate-fadeInUp transition-all duration-150 pb-6 md:pb-0" style="animation-delay: 120ms">
            <!-- Badge Popular (ESTILO IGUAL AL BADGE DEL INICIO) -->
            <div class="absolute -top-2 left-1/2 transform -translate-x-1/2 z-30 transition-all duration-150">
              <div class="inline-flex items-center backdrop-blur-lg rounded-full px-3 py-1 border shadow-sm animate-pulse-slow transition-all duration-150"
                   :class="isDarkMode 
                     ? 'bg-gradient-to-r from-blue-600/40 to-cyan-500/30 border border-cyan-400/40' 
                     : 'bg-gradient-to-r from-blue-500/30 to-blue-400/40 border border-blue-400/50'">
                <div 
                  class="w-1.5 h-1.5 rounded-full mr-1.5 animate-pulse-fast transition-all duration-150"
                  :class="isDarkMode 
                    ? 'bg-gradient-to-r from-cyan-400 to-blue-300' 
                    : 'bg-gradient-to-r from-blue-400 to-blue-300'">
                </div>
                <span class="text-xs font-bold tracking-wider transition-colors duration-150"
                      :class="isDarkMode ? 'text-white' : 'text-blue-900'">⭐ POPULAR</span>
              </div>
            </div>
            
            <!-- Tarjeta -->
            <div class="relative backdrop-blur-xl rounded-lg border p-4 transform transition-all duration-150 group-hover:-translate-y-0.5 group-hover:scale-105 group-hover:shadow-lg shadow-md hover:shadow-glow h-full flex flex-col"
                 :class="isDarkMode 
                   ? 'bg-gradient-to-br from-blue-700/50 via-indigo-800/60 to-blue-900/50 border-cyan-400/50 hover:border-cyan-300/60' 
                   : 'bg-gradient-to-br from-blue-50/85 via-blue-100/75 to-blue-200/65 border-blue-400/60 hover:border-blue-500/70'">
              
              <!-- Header -->
              <div class="relative mb-3 md:mb-4 text-center flex-shrink-0">
                <div class="w-12 h-12 md:w-14 md:h-14 rounded-lg flex items-center justify-center mb-3 mx-auto transform transition-all duration-150 group-hover:scale-110 animate-pulse-slow"
                     :class="isDarkMode 
                       ? 'bg-gradient-to-br from-blue-500/70 to-cyan-500/70 border border-cyan-400/30' 
                       : 'bg-gradient-to-br from-blue-200/70 to-blue-300/70 border border-blue-300/30'">
                  <span class="text-xl md:text-2xl">🚀</span>
                </div>
                
                <h3 class="text-lg md:text-xl font-black mb-1 transition-colors duration-150"
                    :class="isDarkMode ? 'text-white' : 'text-blue-900'">
                  Estándar
                </h3>
                <p class="text-xs font-semibold tracking-wide uppercase transition-colors duration-150"
                   :class="isDarkMode ? 'text-blue-100/60' : 'text-blue-700/60'">
                  Página Web Moderna y Animada
                </p>
              </div>
              
              <!-- Precio -->
              <div class="mb-4 text-center flex-shrink-0">
                <div class="text-xl md:text-2xl lg:text-3xl font-black leading-none mb-1 transition-all duration-150"
                     :class="isDarkMode ? 'text-blue-200' : 'text-blue-800'">
                  $800.000
                </div>
                <div class="text-xs font-medium transition-colors duration-150"
                     :class="isDarkMode ? 'text-white/90' : 'text-blue-700/90'">
                  Soporte Mensual: $20.000
                </div>
              </div>
              
              <!-- Features -->
              <div class="mb-4 flex-grow">
                <ul class="space-y-2">
                  <li v-for="(feature, index) in standardFeatures" :key="index" 
                      class="flex items-start transform group-hover:translate-x-1 transition-transform duration-150"
                      :style="`transition-delay: ${index * 50}ms`">
                    <div class="w-2 h-2 rounded-full mr-2 mt-1.5 flex-shrink-0 shadow-sm animate-pulse-fast"
                         :class="isDarkMode 
                           ? 'bg-gradient-to-r from-cyan-400 to-blue-300' 
                           : 'bg-gradient-to-r from-blue-400 to-blue-300'">
                    </div>
                    <span class="text-sm text-left flex-1 font-medium transition-colors duration-150"
                          :class="isDarkMode ? 'text-white/85' : 'text-blue-800/85'">
                      {{ feature }}
                    </span>
                  </li>
                </ul>
              </div>
              
              <!-- Botón -->
              <div class="flex-shrink-0">
                <button @click="scrollToSection('contacto')"
                        class="group/btn relative w-full text-white font-bold py-2.5 px-4 rounded-xl transition-all duration-150 transform hover:scale-105 hover:-translate-y-0.5 shadow-lg hover:shadow-glow-hover text-sm md:text-base overflow-hidden"
                        :class="isDarkMode 
                          ? 'bg-gradient-to-r from-blue-600 via-cyan-700 to-indigo-800 hover:from-blue-700 hover:via-cyan-800 hover:to-indigo-900' 
                          : 'bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 hover:from-blue-700 hover:via-blue-800 hover:to-blue-900'">
                  <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-300"></div>
                  
                  <span class="flex items-center justify-center relative">
                    Elegir Plan
                    <span class="ml-2 text-lg animate-bounce-fast">⚡</span>
                  </span>
                </button>
              </div>
            </div>
          </div>

          <!-- Plan Profesional -->
          <!-- CAMBIO AQUÍ: Agregado pb-6 en móvil para más espacio debajo de la tarjeta -->
          <div class="group relative animate-fadeInUp transition-all duration-150 pb-6 md:pb-0" style="animation-delay: 160ms">
            <!-- Tarjeta -->
            <div class="relative backdrop-blur-xl rounded-lg border p-4 transform transition-all duration-150 group-hover:-translate-y-0.5 group-hover:scale-105 group-hover:shadow-lg shadow-md hover:shadow-glow h-full flex flex-col"
                 :class="isDarkMode 
                   ? 'bg-gradient-to-br from-blue-700/50 via-indigo-800/60 to-blue-900/50 border-cyan-400/50 hover:border-cyan-300/60' 
                   : 'bg-gradient-to-br from-blue-50/85 via-blue-100/75 to-blue-200/65 border-blue-400/60 hover:border-blue-500/70'">
              
              <!-- Header -->
              <div class="relative mb-3 md:mb-4 text-center flex-shrink-0">
                <div class="w-12 h-12 md:w-14 md:h-14 rounded-lg flex items-center justify-center mb-3 mx-auto transform transition-all duration-150 group-hover:scale-110 animate-pulse-slow"
                     :class="isDarkMode 
                       ? 'bg-gradient-to-br from-blue-500/70 to-cyan-500/70 border border-cyan-400/30' 
                       : 'bg-gradient-to-br from-blue-200/70 to-blue-300/70 border border-blue-300/30'">
                  <span class="text-xl md:text-2xl">⭐</span>
                </div>
                
                <h3 class="text-lg md:text-xl font-black mb-1 transition-colors duration-150"
                    :class="isDarkMode ? 'text-white' : 'text-blue-900'">
                  Avanzado
                </h3>
                <p class="text-xs font-semibold tracking-wide uppercase transition-colors duration-150"
                   :class="isDarkMode ? 'text-blue-100/60' : 'text-blue-700/60'">
                  Página Web con Administrador
                </p>
              </div>
              
              <!-- Precio -->
              <div class="mb-4 text-center flex-shrink-0">
                <div class="text-xl md:text-2xl lg:text-3xl font-black leading-none mb-1 transition-all duration-150"
                     :class="isDarkMode ? 'text-blue-200' : 'text-blue-800'">
                  $1.400.000
                </div>
                <div class="text-xs font-medium transition-colors duration-150"
                     :class="isDarkMode ? 'text-white/90' : 'text-blue-700/90'">
                  Soporte Mensual: $30.000
                </div>
              </div>
              
              <!-- Features -->
              <div class="mb-4 flex-grow">
                <ul class="space-y-2">
                  <li v-for="(feature, index) in professionalFeatures" :key="index" 
                      class="flex items-start transform group-hover:translate-x-1 transition-transform duration-150"
                      :style="`transition-delay: ${index * 50}ms`">
                    <div class="w-2 h-2 rounded-full mr-2 mt-1.5 flex-shrink-0 shadow-sm animate-pulse-fast"
                         :class="isDarkMode 
                           ? 'bg-gradient-to-r from-cyan-400 to-blue-300' 
                           : 'bg-gradient-to-r from-blue-400 to-blue-300'">
                    </div>
                    <span class="text-sm text-left flex-1 font-medium transition-colors duration-150"
                          :class="isDarkMode ? 'text-white/85' : 'text-blue-800/85'">
                      {{ feature }}
                    </span>
                  </li>
                </ul>
              </div>
              
              <!-- Botón -->
              <div class="flex-shrink-0">
                <button @click="scrollToSection('contacto')"
                        class="group/btn relative w-full text-white font-bold py-2.5 px-4 rounded-xl transition-all duration-150 transform hover:scale-105 hover:-translate-y-0.5 shadow-lg hover:shadow-glow-hover text-sm md:text-base overflow-hidden"
                        :class="isDarkMode 
                          ? 'bg-gradient-to-r from-blue-600 via-cyan-700 to-indigo-800 hover:from-blue-700 hover:via-cyan-800 hover:to-indigo-900' 
                          : 'bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 hover:from-blue-700 hover:via-blue-800 hover:to-blue-900'">
                  <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-300"></div>
                  
                  <span class="flex items-center justify-center relative">
                    Ir Avanzado
                    <span class="ml-2 text-lg animate-bounce-fast">→</span>
                  </span>
                </button>
              </div>
            </div>
          </div>

          <!-- Plan Empresa -->
          <!-- CAMBIO AQUÍ: Agregado pb-6 en móvil para más espacio debajo de la tarjeta -->
          <div class="group relative animate-fadeInUp transition-all duration-150 pb-6 md:pb-0" style="animation-delay: 200ms">
            <!-- Tarjeta -->
            <div class="relative backdrop-blur-xl rounded-lg border p-4 transform transition-all duration-150 group-hover:-translate-y-0.5 group-hover:scale-105 group-hover:shadow-lg shadow-md hover:shadow-glow h-full flex flex-col"
                 :class="isDarkMode 
                   ? 'bg-gradient-to-br from-blue-700/50 via-indigo-800/60 to-blue-900/50 border-cyan-400/50 hover:border-cyan-300/60' 
                   : 'bg-gradient-to-br from-blue-50/85 via-blue-100/75 to-blue-200/65 border-blue-400/60 hover:border-blue-500/70'">
              
              <!-- Header -->
              <div class="relative mb-3 md:mb-4 text-center flex-shrink-0">
                <div class="w-12 h-12 md:w-14 md:h-14 rounded-lg flex items-center justify-center mb-3 mx-auto transform transition-all duration-150 group-hover:scale-110 animate-pulse-slow"
                     :class="isDarkMode 
                       ? 'bg-gradient-to-br from-blue-500/70 to-cyan-500/70 border border-cyan-400/30' 
                       : 'bg-gradient-to-br from-blue-200/70 to-blue-300/70 border border-blue-300/30'">
                  <span class="text-xl md:text-2xl">🏢</span>
                </div>
                
                <h3 class="text-lg md:text-xl font-black mb-1 transition-colors duration-150"
                    :class="isDarkMode ? 'text-white' : 'text-blue-900'">
                  Empresa
                </h3>
                <p class="text-xs font-semibold tracking-wide uppercase transition-colors duration-150"
                   :class="isDarkMode ? 'text-blue-100/60' : 'text-blue-700/60'">
                  SOLUCIONES CORPORATIVAS
                </p>
              </div>
              
              <!-- Precio (CON GRADIENTE ESPECIAL) -->
              <div class="mb-4 text-center flex-shrink-0">
                <div class="text-xl md:text-2xl lg:text-3xl font-black leading-none mb-1 bg-clip-text text-transparent transition-all duration-150"
                     :class="isDarkMode 
                       ? 'bg-gradient-to-r from-white via-cyan-200 to-blue-100' 
                       : 'bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700'">
                  Hablemos
                </div>
                <div class="text-xs font-medium transition-colors duration-150"
                     :class="isDarkMode ? 'text-white/90' : 'text-blue-700/90'">
                  Aplicaciones Web & Mobile Complejas
                </div>
              </div>
              
              <!-- Features -->
              <div class="mb-4 flex-grow">
                <ul class="space-y-2">
                  <li v-for="(feature, index) in enterpriseFeatures" :key="index" 
                      class="flex items-start transform group-hover:translate-x-1 transition-transform duration-150"
                      :style="`transition-delay: ${index * 50}ms`">
                    <div class="w-2 h-2 rounded-full mr-2 mt-1.5 flex-shrink-0 shadow-sm animate-pulse-fast"
                         :class="isDarkMode 
                           ? 'bg-gradient-to-r from-cyan-400 to-blue-300' 
                           : 'bg-gradient-to-r from-blue-400 to-blue-300'">
                    </div>
                    <span class="text-sm text-left flex-1 font-medium transition-colors duration-150"
                          :class="isDarkMode ? 'text-white/85' : 'text-blue-800/85'">
                      {{ feature }}
                    </span>
                  </li>
                </ul>
              </div>
              
              <!-- Botón -->
              <div class="flex-shrink-0">
                <button @click="scrollToSection('contacto')"
                        class="group/btn relative w-full text-white font-bold py-2.5 px-4 rounded-xl transition-all duration-150 transform hover:scale-105 hover:-translate-y-0.5 shadow-lg hover:shadow-glow-hover text-sm md:text-base overflow-hidden"
                        :class="isDarkMode 
                          ? 'bg-gradient-to-r from-blue-600 via-cyan-700 to-indigo-800 hover:from-blue-700 hover:via-cyan-800 hover:to-indigo-900' 
                          : 'bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 hover:from-blue-700 hover:via-blue-800 hover:to-blue-900'">
                  <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-300"></div>
                  
                  <span class="flex items-center justify-center relative">
                    Enviar Mensaje
                    <span class="ml-2 text-lg animate-bounce-fast">→</span>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Nota adicional -->
        <!-- CAMBIO AQUÍ: Agregado mt-8 en móvil para más espacio después del grid -->
        <div class="text-center mt-8 md:mt-6 max-w-2xl mx-auto px-4 animate-fadeInUp transition-all duration-150" style="animation-delay: 240ms">
          <div class="relative backdrop-blur-sm border rounded-lg p-3 md:p-4 shadow-lg transform transition-all duration-150 hover:scale-102"
               :class="isDarkMode 
                 ? 'bg-blue-900/20 border-blue-400/15 shadow-blue-500/10 hover:border-blue-300/30' 
                 : 'bg-blue-50/20 border-blue-300/15 shadow-blue-400/10 hover:border-blue-400/30'">
            <p class="text-xs sm:text-sm leading-relaxed text-center font-medium transition-colors duration-150"
               :class="isDarkMode ? 'text-white/90' : 'text-blue-800/90'">
              <span :class="isDarkMode ? 'text-white' : 'text-blue-900'">¿Necesitas algo personalizado?</span> 
              Todos los planes son ajustables.
              <button @click="scrollToSection('contacto')"
                      class="inline-flex items-center font-bold ml-1 transition-colors duration-150 group"
                      :class="isDarkMode ? 'text-blue-200 hover:text-white' : 'text-blue-700 hover:text-blue-900'">
                Contáctanos
                <span class="ml-1 transform transition-transform duration-150 group-hover:translate-x-0.5 animate-bounce-fast transition-all duration-150"
                      :class="isDarkMode ? 'text-blue-300' : 'text-blue-600'">
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
import { ref, computed, onMounted, watch } from 'vue';

// Estado (SIN localStorage)
const isDarkMode = ref(true);
const isTransitioning = ref(false);
const gradientPosition = ref(0);
const showParticles = ref(false);

// Gradientes simplificados
const darkGradient = 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 25%, #0369a1 50%, #1e40af 75%, #0f172a 100%)';
const lightGradient = 'linear-gradient(135deg, #dbeafe 0%, #bfdbfe 25%, #93c5fd 50%, #60a5fa 75%, #3b82f6 100%)';

// Inicializar tema (SIN localStorage)
const initializeTheme = () => {
  // Usamos tema oscuro por defecto siempre
  isDarkMode.value = true;
  gradientPosition.value = 0;
  
  // Opcional: puedes detectar preferencia del sistema
  // if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
  //   isDarkMode.value = false;
  //   gradientPosition.value = 100;
  // }
};

// Alternar tema (SIN localStorage)
const toggleTheme = async () => {
  if (isTransitioning.value) return;
  
  isTransitioning.value = true;
  showParticles.value = true;
  
  const startPosition = isDarkMode.value ? 0 : 100;
  const endPosition = isDarkMode.value ? 100 : 0;
  
  const duration = 200;
  const startTime = Date.now();
  
  const animateGradient = () => {
    const elapsed = Date.now() - startTime;
    const progress = Math.min(elapsed / duration, 1);
    
    const easedProgress = progress * (2 - progress);
    gradientPosition.value = startPosition + (endPosition - startPosition) * easedProgress;
    
    if (progress < 1) {
      requestAnimationFrame(animateGradient);
    } else {
      gradientPosition.value = endPosition;
    }
  };
  
  isDarkMode.value = !isDarkMode.value;
  // ELIMINADO: localStorage.setItem('theme', isDarkMode.value ? 'dark' : 'light');
  
  requestAnimationFrame(animateGradient);
  
  setTimeout(() => {
    showParticles.value = false;
    isTransitioning.value = false;
  }, duration + 50);
};

// Estilo del gradiente
const sectionGradientStyle = computed(() => {
  if (isTransitioning.value) {
    const startGradient = isDarkMode.value ? lightGradient : darkGradient;
    const endGradient = isDarkMode.value ? darkGradient : lightGradient;
    
    return {
      backgroundImage: `${startGradient}, ${endGradient}`,
      backgroundSize: `200% 200%, 200% 200%`,
      backgroundPosition: `${gradientPosition.value}% ${gradientPosition.value}%, ${gradientPosition.value}% ${gradientPosition.value}%`,
      filter: 'brightness(1.1)',
      transition: 'all 0.15s ease-out',
    };
  } else {
    return {
      backgroundImage: isDarkMode.value ? darkGradient : lightGradient,
      backgroundSize: '200% 200%',
      backgroundPosition: '0% 0%',
      animation: isDarkMode.value ? 'gradient-shift-dark 8s ease infinite' : 'gradient-shift-light 8s ease infinite',
    };
  }
});

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

// Inicializar
onMounted(() => {
  initializeTheme();
});

// Watch para cambio de tema
watch(isDarkMode, (newVal) => {
  document.documentElement.classList.add('theme-transition-fast');
  
  if (newVal) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
  
  setTimeout(() => {
    document.documentElement.classList.remove('theme-transition-fast');
  }, 200);
});
</script>

<style scoped>
/* ANIMACIONES OPTIMIZADAS */

@keyframes gradient-shift-dark {
  0%, 100% {
    background-position: 0% 0%;
  }
  50% {
    background-position: 100% 50%;
  }
}

@keyframes gradient-shift-light {
  0%, 100% {
    background-position: 0% 0%;
  }
  50% {
    background-position: 100% 50%;
  }
}

/* Transiciones de tema */
@keyframes themeFadeInFast {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes themeFadeOutFast {
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(1.05);
  }
}

.theme-fade-fast-enter-active {
  animation: themeFadeInFast 0.12s ease-out !important;
}

.theme-fade-fast-leave-active {
  animation: themeFadeOutFast 0.12s ease-out !important;
}

/* Transiciones optimizadas */
* {
  transition: background-color 0.12s ease-out, 
              border-color 0.12s ease-out,
              color 0.12s ease-out,
              transform 0.12s ease-out,
              opacity 0.12s ease-out;
}

/* Animación para rayos del sol */
@keyframes pulse-ray-fast {
  0%, 100% {
    opacity: 0.3;
    transform: rotate(var(--rotation)) translateY(-10px) scale(0.8);
  }
  50% {
    opacity: 0.7;
    transform: rotate(var(--rotation)) translateY(-10px) scale(1.1);
  }
}

/* Animación para brillo estelar */
@keyframes twinkle-fast {
  0%, 100% {
    opacity: 0.3;
    transform: scale(0.8);
  }
  50% {
    opacity: 0.8;
    transform: scale(1.1);
  }
}

/* Animaciones básicas */
.animate-pulse-fast {
  animation: pulse 1.2s ease-in-out infinite;
}

.animate-pulse-slow {
  animation: pulse 2.5s ease-in-out infinite;
}

.animate-bounce-fast {
  animation: bounce 0.8s infinite;
}

.animate-float {
  animation: float 2.5s ease-in-out infinite;
}

.animate-slideInLeft {
  animation: slideInLeft 0.5s ease-out forwards;
  opacity: 0;
}

.animate-fadeInUp {
  animation: fadeInUp 0.5s ease-out forwards;
  opacity: 0;
}

.animate-delay-300 {
  animation-delay: 300ms;
}

.animate-delay-600 {
  animation-delay: 600ms;
}

.animate-twinkle-fast {
  animation: twinkle-fast 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-8px);
  }
}

@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(15px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Efectos de sombras */
.shadow-glow {
  box-shadow: 0 0 15px rgba(34, 211, 238, 0.2);
}

.hover\:shadow-glow:hover {
  box-shadow: 0 0 20px rgba(34, 211, 238, 0.3);
}

.hover\:shadow-glow-hover:hover {
  box-shadow: 0 0 25px rgba(34, 211, 238, 0.4);
}

/* Optimización responsive */
@media (max-width: 768px) {
  #servicios {
    min-height: 80vh;
  }
  
  .relative.w-full.mb-1 {
    margin-bottom: 0.5rem;
  }
  
  .theme-switch-premium {
    width: 40px;
    height: 40px;
  }
  
  .theme-switch-premium > div:first-child {
    width: 32px;
    height: 32px;
  }
  
  .absolute.left-2 {
    left: 8px;
  }
  
  .absolute.right-2 {
    right: 8px;
  }
  
  .grid.grid-cols-1 {
    gap: 1.5rem;
  }
}

@media (max-width: 480px) {
  .grid.grid-cols-2 {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
  
  .theme-switch-premium {
    width: 44px;
    height: 44px;
  }
  
  .theme-switch-premium > div:first-child {
    width: 34px;
    height: 34px;
  }
  
  .absolute.left-2 {
    left: 9px;
  }
  
  .absolute.right-2 {
    right: 9px;
  }
  
  .relative.w-full.mb-1 {
    margin-bottom: 0.25rem;
  }
  
  .grid.grid-cols-1 {
    gap: 2rem;
  }
}

/* Accesibilidad */
@media (prefers-reduced-motion: reduce) {
  .animate-pulse-fast,
  .animate-pulse-slow,
  .animate-bounce-fast,
  .animate-float,
  .animate-slideInLeft,
  .animate-fadeInUp {
    animation: none !important;
  }
  
  .hover\:scale-105,
  .hover\:-translate-y-0\.5 {
    transform: none !important;
  }
}

/* Mejoras de rendimiento */
#servicios > div:first-child {
  will-change: background-position;
}

.theme-switch-premium {
  will-change: transform;
}
</style>