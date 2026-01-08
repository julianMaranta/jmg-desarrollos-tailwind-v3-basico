<template>
  <section 
    id="por-que-elegirnos" 
    class="min-h-auto w-full relative overflow-hidden flex items-center justify-center py-6 md:py-8 transition-all duration-150 ease-out"
    :style="sectionGradientStyle"
  >
    <!-- Background Elements con tema -->
    <div class="absolute inset-0 overflow-hidden w-full transition-all duration-150 ease-out">
      <!-- Partículas con tema -->
      <div v-for="i in 8" :key="i" 
           class="absolute rounded-full custom-float transition-all duration-150"
           :class="isDarkMode ? 'bg-blue-400/25' : 'bg-blue-300/20'"
           :style="getParticleStyle(i)">
      </div>
      
      <!-- Orbes con tema -->
      <div class="absolute -top-20 -left-20 w-40 h-40 rounded-full blur-2xl custom-pulse-slow transition-all duration-150"
           :class="isDarkMode ? 'bg-blue-600/15' : 'bg-blue-400/10'"
           :style="transitionStyle">
      </div>
      <div class="absolute -bottom-20 -right-20 w-40 h-40 rounded-full blur-2xl custom-pulse-slow custom-delay-2000 transition-all duration-150"
           :class="isDarkMode ? 'bg-blue-700/15' : 'bg-blue-300/10'"
           :style="transitionStyle">
      </div>
      
      <!-- Gradientes de borde con tema -->
      <div class="absolute top-0 left-0 right-0 h-16 transition-all duration-150"
           :class="isDarkMode ? 'bg-gradient-to-b from-blue-900/40 to-transparent' : 'bg-gradient-to-b from-blue-100/25 to-transparent'">
      </div>
    </div>

    <!-- Contenedor Principal -->
    <div class="w-full max-w-6xl mx-auto px-4 md:px-6 text-center relative z-10 py-6 md:py-8 flex flex-col items-center">
      
      <!-- Contenedor para badge y botón de temas alineados -->
      <div class="relative w-full mb-1 md:mb-6">
        <!-- Botón de tema compacto - AUMENTADO EN MÓVIL -->
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
                :class="isDarkMode ? 'text-white' : 'text-blue-900'">💎 VENTAJAS EXCLUSIVAS</span>
          <div 
            class="ml-2 w-0.5 h-4 rounded-full transition-all duration-150"
            :class="isDarkMode 
              ? 'bg-gradient-to-b from-blue-300/30 to-blue-400/30' 
              : 'bg-gradient-to-b from-blue-400/30 to-blue-500/30'">
          </div>
        </div>
      </div>

      <!-- Sección principal con títulos -->
      <div class="w-full flex flex-col items-center space-y-3 md:space-y-4">
        <!-- Título principal -->
        <div class="relative w-full mb-1 md:mb-2 transition-all duration-150 text-center">
          <h2 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-center w-full tracking-tight leading-tight animate-slideInLeft transition-all duration-150">
            <span class="relative inline-block">
              <div class="relative pb-1">
                <!-- Línea única -->
                <div 
                  class="bg-clip-text text-transparent leading-tight transition-all duration-150"
                  :class="isDarkMode 
                    ? 'bg-gradient-to-r from-white via-cyan-200 to-blue-100' 
                    : 'bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700'">
                  ¿Por Qué Elegirnos?
                </div>
              </div>
              
              <!-- Subrayado animado -->
              <div 
                class="absolute -bottom-1 left-1/4 right-1/4 h-0.5 rounded-full opacity-60 mt-0.5 transition-all duration-150"
                :class="isDarkMode 
                  ? 'bg-gradient-to-r from-cyan-400 to-blue-300' 
                  : 'bg-gradient-to-r from-blue-500 to-blue-400'">
              </div>
            </span>
          </h2>
          
          <!-- Slogan -->
          <div class="mt-2 md:mt-3 animate-fadeInUp transition-all duration-150" style="animation-delay: 50ms">
            <p class="text-base md:text-lg font-bold transition-colors duration-150"
               :class="isDarkMode ? 'text-blue-100/90' : 'text-blue-700/90'">
              Creamos <span :class="isDarkMode ? 'text-blue-200' : 'text-blue-800'">experiencias digitales</span> que 
              <span :class="isDarkMode ? 'text-blue-200' : 'text-blue-800'">impulsan tu negocio</span>
            </p>
          </div>
        </div>
        
        <!-- Subtítulo -->
        <div class="relative max-w-2xl mx-auto mb-4 md:mb-6 animate-fadeInUp transition-all duration-150" style="animation-delay: 100ms">
          <div class="relative backdrop-blur-sm border rounded-lg p-3 md:p-4 shadow-lg transform transition-all duration-150 hover:scale-102"
               :class="isDarkMode 
                 ? 'bg-blue-900/20 border-blue-400/15 shadow-blue-500/10 hover:border-blue-300/30' 
                 : 'bg-blue-50/20 border-blue-300/15 shadow-blue-400/10 hover:border-blue-400/30'">
            <p class="text-sm sm:text-base md:text-lg leading-relaxed text-center font-medium transition-colors duration-150"
               :class="isDarkMode ? 'text-white/90' : 'text-blue-800/90'">
              <span :class="isDarkMode ? 'text-white' : 'text-blue-900'">Transformamos ideas en soluciones digitales</span> 
              que 
              <span class="relative inline-block">
                <span 
                  class="bg-clip-text text-transparent font-bold transition-all duration-150"
                  :class="isDarkMode 
                    ? 'bg-gradient-to-r from-blue-300 via-blue-200 to-white' 
                    : 'bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400'">
                  superan expectativas
                </span>
                <!-- Brillo de fondo del texto -->
                <div 
                  class="absolute inset-0 blur-sm -z-10 rounded-full transition-all duration-150"
                  :class="isDarkMode 
                    ? 'bg-gradient-to-r from-blue-400/20 via-blue-300/15 to-blue-200/15' 
                    : 'bg-gradient-to-r from-blue-500/20 via-blue-400/15 to-blue-300/15'">
                </div>
              </span>
              
            </p>
          </div>
        </div>

        <!-- Features Grid con efectos premium 
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-3 max-w-6xl mx-auto w-full px-4 animate-fadeInUp transition-all duration-150" style="animation-delay: 150ms">
          
          <div v-for="(feature, index) in features" :key="index" 
               class="group relative w-full max-w-xs flex flex-col animate-fadeInUp transform-gpu"
               :style="{ animationDelay: `${120 + index * 50}ms` }">-->
            
            <!-- Efecto de iluminación premium al hover 
            <div class="absolute inset-0 rounded-lg transform group-hover:scale-103 transition-all duration-400 opacity-0 group-hover:opacity-100 transition-all duration-150"
                 :class="isDarkMode 
                   ? 'bg-gradient-to-br from-blue-300/25 via-blue-200/20 to-blue-100/15' 
                   : 'bg-gradient-to-br from-blue-300/20 via-blue-200/15 to-blue-100/10'">
            </div>-->
            
            <!-- Tarjeta Principal premium 
            <div class="relative backdrop-blur-xl rounded-lg border transition-all duration-250 transform group-hover:-translate-y-1 shadow-md group-hover:shadow-lg overflow-hidden w-full flex flex-col flex-1"
                 :class="isDarkMode 
                   ? 'bg-gradient-to-br from-blue-700/25 via-indigo-800/35 to-blue-900/25 border-cyan-400/35 hover:border-cyan-300/50 shadow-cyan-500/10 group-hover:shadow-cyan-500/20' 
                   : 'bg-gradient-to-br from-blue-50/85 via-blue-100/75 to-blue-200/65 border-blue-400/35 hover:border-blue-300/50 shadow-blue-400/10 group-hover:shadow-blue-400/20'">-->
              
              <!-- Luz superior premium 
              <div class="absolute top-0 left-0 right-0 h-0.5 rounded-t-lg bg-gradient-to-r from-transparent via-blue-400/40 to-transparent group-hover:via-blue-300/60 transition-all duration-400"
                   :class="isDarkMode ? 'via-blue-400/35 group-hover:via-cyan-300/50' : 'via-blue-400/35 group-hover:via-blue-500/50'">
              </div>-->
              
              <!-- Header premium 
              <div class="p-4 text-center border-b flex-shrink-0 flex flex-col items-center justify-center transition-all duration-150"
                   :class="isDarkMode ? 'border-cyan-400/20' : 'border-blue-400/20'">-->
                
                <!-- Icono premium 
                <div class="relative w-14 h-14 rounded-lg flex items-center justify-center mb-2 transform transition-all duration-250 group-hover:scale-105 group-hover:rotate-2 shadow-md group-hover:shadow-glow"
                     :class="isDarkMode 
                       ? 'bg-gradient-to-br from-blue-500 via-cyan-600 to-blue-700 group-hover:shadow-cyan-500/25' 
                       : 'bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 group-hover:shadow-blue-500/25'">
                  <span class="text-2xl text-white">{{ feature.icon }}</span>
                </div>
                
                <h3 class="text-lg font-bold mb-1 transition-colors duration-250 bg-clip-text text-transparent"
                    :class="isDarkMode 
                      ? 'bg-gradient-to-r from-white via-cyan-200 to-blue-100 group-hover:from-cyan-300 group-hover:via-blue-200 group-hover:to-white' 
                      : 'bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 group-hover:from-blue-800 group-hover:via-blue-700 group-hover:to-blue-600'">{{ feature.title }}</h3>
                <p class="font-bold text-sm tracking-tight uppercase transition-colors duration-250"
                   :class="isDarkMode 
                     ? 'text-cyan-300/75 group-hover:text-cyan-300' 
                     : 'text-blue-600/75 group-hover:text-blue-600'">
                  {{ feature.subtitle || 'VENTAJA PREMIUM' }}
                </p>
              </div>-->
              
              <!-- Descripción premium 
              <div class="p-4 flex-grow relative flex items-center justify-center">
                <div class="relative w-full">
                  <p class="text-sm leading-relaxed text-center transition-colors duration-250"
                     :class="isDarkMode 
                       ? 'text-white/85 group-hover:text-white' 
                       : 'text-blue-800/75 group-hover:text-blue-900/85'">
                    {{ feature.description }}
                  </p>
                </div>
              </div>-->
              
              <!-- Línea de iluminación premium 
              <div class="px-4 pb-4 pt-0 flex-shrink-0">
                <div class="w-0 h-0.5 rounded-full transition-all duration-400 group-hover:w-full animate-pulse-fast"
                     :class="isDarkMode 
                       ? 'bg-gradient-to-r from-cyan-400 to-blue-400' 
                       : 'bg-gradient-to-r from-blue-500 to-blue-400'"></div>
              </div>
            </div>
          </div>
        </div>-->

        <!-- Technology & Promise Section premium -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-3 md:gap-4 items-start w-full max-w-6xl mx-auto mt-4 md:mt-6 animate-fadeInUp transition-all duration-150" style="animation-delay: 200ms">
          
          <!-- Technology Stack premium -->
          <div class="relative flex flex-col animate-fadeInUp" style="animation-delay: 350ms">
            <!-- Badge premium -->
            <div 
              class="inline-flex items-center backdrop-blur-xl rounded-full px-4 py-1.5 mb-2 border shadow-glow w-full justify-center animate-pulse-slow transform-gpu transition-all duration-150"
              :class="isDarkMode 
                ? 'bg-gradient-to-r from-blue-600/40 to-cyan-500/30 border border-cyan-400/40 shadow-cyan-500/15' 
                : 'bg-gradient-to-r from-blue-500/30 to-blue-400/40 border border-blue-400/50 shadow-blue-400/15'"
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
                    :class="isDarkMode ? 'text-white' : 'text-blue-900'">
                ⚡ TECNOLOGÍA DE VANGUARDIA
              </span>
            </div>
            
            <!-- Título premium -->
            <div class="relative mb-3 text-center">
              <h3 class="text-xl md:text-2xl font-bold mb-1.5">
                <span class="relative inline-block">
                  <span 
                    class="bg-clip-text text-transparent transition-all duration-150"
                    :class="isDarkMode 
                      ? 'bg-gradient-to-r from-white via-cyan-200 to-blue-100' 
                      : 'bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700'">
                    Stack Tecnológico
                  </span>
                </span>
              </h3>
              
              <div class="relative backdrop-blur-xl rounded-lg p-4 border transform transition-all duration-150 shadow-md"
                   :class="isDarkMode 
                     ? 'bg-gradient-to-br from-blue-700/25 via-indigo-800/35 to-blue-900/25 border-cyan-400/35 shadow-cyan-500/8' 
                     : 'bg-gradient-to-br from-blue-50/85 via-blue-100/75 to-blue-200/65 border-blue-400/35 shadow-blue-400/8'">
                <p class="text-sm leading-relaxed max-w-md mx-auto transition-colors duration-150"
                   :class="isDarkMode ? 'text-white/85' : 'text-blue-900/85'">
                  Dominamos las tecnologías más demandadas para soluciones 
                  <span class="relative inline-block transition-all duration-150">
                    <span 
                      class="bg-clip-text text-transparent font-semibold transition-all duration-150"
                      :class="isDarkMode 
                        ? 'bg-gradient-to-r from-cyan-300 via-blue-200 to-blue-100' 
                        : 'bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400'">
                      robustas y modernas
                    </span>
                  </span>.
                </p>
              </div>
            </div>
            
            <!-- Grid de tecnologías premium -->
            <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-2 md:gap-3 w-full">
              <div v-for="(tech, index) in technologies" :key="index" 
                   class="group relative flex flex-col items-center p-4 backdrop-blur-xl rounded-lg border transition-all duration-250 transform hover:-translate-y-1 animate-fadeInUp transform-gpu shadow-sm hover:shadow-md"
                   :class="isDarkMode 
                     ? 'bg-gradient-to-br from-blue-700/20 via-indigo-800/30 to-blue-900/20 border-cyan-400/30 hover:border-cyan-300/50 shadow-cyan-500/8' 
                     : 'bg-gradient-to-br from-blue-50/75 via-blue-100/65 to-blue-200/55 border-blue-400/30 hover:border-blue-300/50 shadow-blue-400/8'"
                   :style="{ animationDelay: `${400 + index * 35}ms` }">
                   
                <!-- Efecto de iluminación premium -->
                <div class="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-400 transition-all duration-150"
                     :class="isDarkMode 
                       ? 'bg-gradient-to-br from-blue-300/20 via-cyan-200/15 to-blue-100/10' 
                       : 'bg-gradient-to-br from-blue-300/15 via-blue-200/10 to-blue-100/5'">
                </div>
                
                <!-- Icono premium -->
                <div class="relative w-10 h-10 backdrop-blur-md rounded-md flex items-center justify-center mb-2 transform transition-all duration-250 group-hover:rotate-2 group-hover:scale-105 flex-shrink-0 shadow group-hover:shadow-glow"
                     :class="isDarkMode 
                       ? 'bg-gradient-to-br from-blue-500 via-cyan-600 to-blue-700' 
                       : 'bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700'">
                  <span class="text-lg text-white">{{ tech.icon }}</span>
                </div>
                
                <!-- Contenido premium -->
                <div class="relative z-10 w-full text-center">
                  <div class="font-bold text-sm mb-0.5 transition-colors duration-250 break-words whitespace-normal leading-tight bg-clip-text text-transparent"
                       :class="isDarkMode 
                         ? 'bg-gradient-to-r from-white via-blue-100 to-blue-200 group-hover:from-cyan-300' 
                         : 'bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 group-hover:from-blue-800'">
                    {{ tech.name }}
                  </div>
                  <div class="text-xs font-medium transition-colors duration-250"
                       :class="isDarkMode 
                         ? 'text-cyan-300/75 group-hover:text-cyan-300' 
                         : 'text-blue-600/75 group-hover:text-blue-600'">
                    {{ tech.category }}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Our Promise premium -->
          <div class="relative flex flex-col animate-fadeInUp" style="animation-delay: 500ms">
            <!-- Badge premium -->
            <div 
              class="inline-flex items-center backdrop-blur-xl rounded-full px-4 py-1.5 mb-2 border shadow-glow w-full justify-center animate-pulse-slow transform-gpu transition-all duration-150"
              :class="isDarkMode 
                ? 'bg-gradient-to-r from-blue-600/40 to-cyan-500/30 border border-cyan-400/40 shadow-cyan-500/15' 
                : 'bg-gradient-to-r from-blue-500/30 to-blue-400/40 border border-blue-400/50 shadow-blue-400/15'"
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
                    :class="isDarkMode ? 'text-white' : 'text-blue-900'">
                💎 NUESTRA PROMESA
              </span>
            </div>
            
            <!-- Título premium -->
            <div class="relative mb-3 text-center">
              <h4 class="text-xl md:text-2xl font-bold mb-1.5">
                <span class="relative inline-block">
                  <span 
                    class="bg-clip-text text-transparent transition-all duration-150"
                    :class="isDarkMode 
                      ? 'bg-gradient-to-r from-white via-cyan-200 to-blue-100' 
                      : 'bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700'">
                    Compromiso Total
                  </span>
                </span>
              </h4>
              
              <div class="relative backdrop-blur-xl rounded-lg p-4 border transform transition-all duration-150 shadow-md"
                   :class="isDarkMode 
                     ? 'bg-gradient-to-br from-blue-700/25 via-indigo-800/35 to-blue-900/25 border-cyan-400/35 shadow-cyan-500/8' 
                     : 'bg-gradient-to-br from-blue-50/85 via-blue-100/75 to-blue-200/65 border-blue-400/35 shadow-blue-400/8'">
                <p class="text-sm leading-relaxed max-w-md mx-auto transition-colors duration-150"
                   :class="isDarkMode ? 'text-white/85' : 'text-blue-900/85'">
                  Construimos relaciones duraderas basadas en 
                  <span class="relative inline-block transition-all duration-150">
                    <span 
                      class="bg-clip-text text-transparent font-semibold transition-all duration-150"
                      :class="isDarkMode 
                        ? 'bg-gradient-to-r from-cyan-300 via-blue-200 to-blue-100' 
                        : 'bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400'">
                      confianza y resultados
                    </span>
                  </span>.
                </p>
              </div>
            </div>
            
            <!-- Tarjeta de promesa premium -->
            <div class="relative backdrop-blur-xl rounded-lg border overflow-hidden transform-gpu group shadow-md hover:shadow-lg transition-all duration-400"
                 :class="isDarkMode 
                   ? 'bg-gradient-to-br from-blue-700/25 via-indigo-800/35 to-blue-900/25 border-cyan-400/35 hover:border-cyan-300/50 shadow-cyan-500/10' 
                   : 'bg-gradient-to-br from-blue-50/85 via-blue-100/75 to-blue-200/65 border-blue-400/35 hover:border-blue-300/50 shadow-blue-400/10'">
              
              <div class="relative z-10 p-4">
                <!-- Promesas premium -->
                <div class="space-y-3">
                  <div v-for="(promise, index) in promises" :key="index" 
                       class="group/promise relative flex items-start p-4 backdrop-blur-xl rounded-lg border transition-all duration-250 transform hover:-translate-y-1 animate-fadeInUp transform-gpu shadow-xs hover:shadow-sm"
                       :class="isDarkMode 
                         ? 'bg-gradient-to-br from-blue-700/20 via-indigo-800/30 to-blue-900/20 border-cyan-400/30 hover:border-cyan-300/50' 
                         : 'bg-gradient-to-br from-blue-50/75 via-blue-100/65 to-blue-200/55 border-blue-400/30 hover:border-blue-300/50'"
                       :style="{ animationDelay: `${600 + index * 50}ms` }">
                       
                    <!-- Check premium -->
                    <div class="relative w-10 h-10 backdrop-blur-md rounded-md flex items-center justify-center mr-3 transform transition-all duration-250 group-hover/promise:rotate-2 group-hover/promise:scale-105 flex-shrink-0 mt-0.5 shadow group-hover/promise:shadow-glow"
                         :class="isDarkMode 
                           ? 'bg-gradient-to-br from-blue-500 via-cyan-600 to-blue-700' 
                           : 'bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700'">
                      <span class="text-lg text-white transition-colors duration-150">✓</span>
                    </div>
                    
                    <!-- Contenido premium -->
                    <div class="flex-1 min-w-0">
                      <div class="font-bold text-sm mb-1 transition-colors duration-250 bg-clip-text text-transparent"
                           :class="isDarkMode 
                             ? 'bg-gradient-to-r from-white via-blue-100 to-blue-200 group-hover/promise:from-cyan-300' 
                             : 'bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 group-hover/promise:from-blue-800'">{{ promise.title }}</div>
                      <div class="text-sm leading-relaxed transition-colors duration-250"
                           :class="isDarkMode 
                             ? 'text-white/75 group-hover/promise:text-white/85' 
                             : 'text-blue-800/65 group-hover/promise:text-blue-900/75'">{{ promise.description }}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Elemento decorativo final premium -->
        <div class="mt-4 md:mt-6 animate-fadeInUp" style="animation-delay: 700ms">
          <div class="w-10 h-0.5 rounded-full mx-auto animate-pulse-fast transition-all duration-150"
               :class="isDarkMode 
                 ? 'bg-gradient-to-r from-cyan-400 to-blue-300' 
                 : 'bg-gradient-to-r from-blue-500 to-blue-400'"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue';

// Estado - TEMA OSCURO SIEMPRE POR DEFECTO
const isDarkMode = ref(true);
const isTransitioning = ref(false);
const gradientPosition = ref(0);
const showParticles = ref(false);

// Gradientes simplificados
const darkGradient = 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 25%, #0369a1 50%, #1e40af 75%, #0f172a 100%)';
const lightGradient = 'linear-gradient(135deg, #dbeafe 0%, #bfdbfe 25%, #93c5fd 50%, #60a5fa 75%, #3b82f6 100%)';

// Inicializar tema - SIEMPRE TEMA OSCURO POR DEFECTO
const initializeTheme = () => {
  // TEMA OSCURO SIEMPRE como valor inicial
  isDarkMode.value = true;
  gradientPosition.value = 0;
  
  // Aplicar tema oscuro inmediatamente al HTML
  document.documentElement.classList.add('dark');
};

// Alternar tema - SIN localStorage
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

// Estilo de transición
const transitionStyle = computed(() => isTransitioning.value ? { filter: 'brightness(1.15)' } : {});

// Estilo de partículas
const getParticleStyle = (i) => {
  const size = Math.random() * 1.2 + 0.6;
  return {
    width: `${size}px`,
    height: `${size}px`,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    animationDelay: `${Math.random() * 3}s`,
    animationDuration: `${6 + Math.random() * 6}s`,
    filter: isTransitioning.value ? 'brightness(1.2)' : 'brightness(1)',
  };
};

// Datos del componente
const features = [
  {
    icon: '⚡',
    title: 'Desarrollo Express',
    subtitle: 'VELOCIDAD',
    description: 'Entregas rápidas sin comprometer calidad, con metodologías ágiles y procesos optimizados.'
  },
  {
    icon: '💎',
    title: 'Calidad Premium',
    subtitle: 'EXCELENCIA',
    description: 'Código limpio y arquitectura escalable con las mejores prácticas de desarrollo moderno.'
  },
  {
    icon: '🛡️',
    title: 'Soporte Continuo',
    subtitle: 'COMPROMISO',
    description: 'Soporte técnico post-entrega y actualizaciones periódicas para mantener tu sitio seguro.'
  },
  {
    icon: '🎯',
    title: 'Enfoque en ROI',
    subtitle: 'RESULTADOS',
    description: 'Desarrollo enfocado en tus objetivos de negocio y maximización de conversiones.'
  }
];

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

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  }
};

// Inicializar - TEMA OSCURO INMEDIATAMENTE
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

// También forzar tema oscuro incluso antes de que se monte el componente
// Esto previene el "flash" de tema claro
if (typeof window !== 'undefined') {
  // Ejecutar inmediatamente
  document.documentElement.classList.add('dark');
}
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

/* Animaciones personalizadas */
@keyframes customFloat {
  0%, 100% { 
    transform: translateY(0) rotate(0deg); 
    opacity: 0.25;
  }
  50% { 
    transform: translateY(-12px) rotate(180deg); 
    opacity: 0.5;
  }
}

@keyframes customPulseSlow {
  0%, 100% { 
    opacity: 0.25; 
    transform: scale(1);
  }
  50% { 
    opacity: 0.5; 
    transform: scale(1.02);
  }
}

@keyframes pulse-ray-fast {
  0%, 100% {
    opacity: 0.25;
    transform: rotate(var(--rotation)) translateY(-9px) scale(0.85);
  }
  50% {
    opacity: 0.8;
    transform: rotate(var(--rotation)) translateY(-9px) scale(1.1);
  }
}

@keyframes twinkle-fast {
  0%, 100% {
    opacity: 0.25;
    transform: scale(0.85);
  }
  50% {
    opacity: 0.9;
    transform: scale(1.1);
  }
}

/* Transiciones optimizadas */
* {
  transition: background-color 0.12s ease-out, 
              border-color 0.12s ease-out,
              color 0.12s ease-out,
              transform 0.12s ease-out,
              opacity 0.12s ease-out;
}

/* Animaciones básicas */
.custom-float {
  animation: customFloat 12s ease-in-out infinite;
}

.custom-pulse-slow {
  animation: customPulseSlow 4s ease-in-out infinite;
}

.custom-delay-2000 {
  animation-delay: 2s;
}

.animate-pulse-fast {
  animation: pulse 1.2s ease-in-out infinite;
}

.animate-pulse-slow {
  animation: pulse 2.5s ease-in-out infinite;
}

.animate-twinkle-fast {
  animation: twinkle-fast 1.2s ease-in-out infinite;
}

.animate-slideInLeft {
  animation: slideInLeft 0.5s ease-out forwards;
  opacity: 0;
}

.animate-fadeInUp {
  animation: fadeInUp 0.5s ease-out forwards;
  opacity: 0;
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
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

/* *********************************************************** */
/* MODIFICACIONES ESPECÍFICAS PARA MÓVIL - SOLO EN ESTA SECCIÓN */
/* *********************************************************** */

@media (max-width: 768px) {
  /* 1. ESPACIO REDUCIDO DEBAJO DEL BADGE EN MÓVIL */
  .relative.w-full.mb-1 {
    margin-bottom: 0.5rem !important; /* REDUCIDO DE 1.5rem (24px) A 0.5rem (8px) */
  }
  
  /* 2. BOTÓN DE TEMA AUMENTADO EN MÓVIL */
  .theme-switch-premium {
    width: 40px !important;        /* AUMENTADO DE 10px */
    height: 40px !important;       /* AUMENTADO DE 10px */
  }
  
  .theme-switch-premium > div:first-child {
    width: 32px !important;        /* AUMENTADO DE 8px */
    height: 32px !important;       /* AUMENTADO DE 8px */
  }
  
  /* Ajustar posiciones de iconos para botón más grande */
  .theme-switch-premium .absolute.left-2 {
    left: 8px !important;
  }
  
  .theme-switch-premium .absolute.right-2 {
    right: 8px !important;
  }
  
  /* Ajustar tamaños de iconos en móvil */
  .theme-switch-premium .absolute.left-2,
  .theme-switch-premium .absolute.right-2 {
    width: 5px !important;        /* Ajustado para móvil */
    height: 5px !important;       /* Ajustado para móvil */
  }
  
  /* Mantener otros ajustes existentes */
  .absolute.left-3, .absolute.right-3 {
    width: 5px;
    height: 5px;
  }
  
  .absolute.-bottom-4 {
    font-size: 8px;
    bottom: -3px;
  }
  
  /* Ajuste del contenedor badge y botón en móvil - REDUCIDO */
  .relative.w-full.mb-6 {
    margin-bottom: 4rem;          /* Mantenido para desktop, solo afecta desktop */
  }
}

@media (max-width: 480px) {
  /* 1. ESPACIO AÚN MÁS REDUCIDO EN MÓVILES PEQUEÑOS */
  .relative.w-full.mb-1 {
    margin-bottom: 0.25rem !important; /* AÚN MÁS REDUCIDO - DE 0.5rem A 0.25rem (4px) */
  }
  
  /* 2. BOTÓN DE TEMA AÚN MÁS GRANDE EN MÓVILES PEQUEÑOS */
  .theme-switch-premium {
    width: 44px !important;        /* AUMENTADO DE 40px */
    height: 44px !important;       /* AUMENTADO DE 40px */
  }
  
  .theme-switch-premium > div:first-child {
    width: 34px !important;        /* AUMENTADO DE 32px */
    height: 34px !important;       /* AUMENTADO DE 32px */
  }
  
  .theme-switch-premium .absolute.left-2 {
    left: 9px !important;
  }
  
  .theme-switch-premium .absolute.right-2 {
    right: 9px !important;
  }
  
  /* Mantener ajustes existentes */
  .grid.grid-cols-2 {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
}

/* Accesibilidad */
@media (prefers-reduced-motion: reduce) {
  .custom-float,
  .custom-pulse-slow,
  .animate-pulse-fast,
  .animate-pulse-slow,
  .animate-twinkle-fast,
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
section > div:first-child {
  will-change: background-position;
}

.theme-switch-premium {
  will-change: transform;
}

/* Utilidades premium */
.transform-gpu { transform: translate3d(0, 0, 0); backface-visibility: hidden; }
.backdrop-blur-xl { backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); }
.backdrop-blur-lg { backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); }
.backdrop-blur-md { backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px); }

/* Gradientes de texto premium */
.bg-clip-text {
  -webkit-background-clip: text !important;
  background-clip: text !important;
  color: transparent;
  display: inline-block;
}
</style>