<template>
  <section 
    id="proceso" 
    class="min-h-[85vh] w-full text-white relative overflow-hidden flex items-center justify-center transition-all duration-150 ease-out"
    :style="sectionGradientStyle"
  >
    <!-- Capa de fondo principal (EXACTO A OTRAS SECCIONES) -->
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

    <!-- Efectos de fondo animados (EXACTO A OTRAS SECCIONES) -->
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
      
      <!-- Contenedor para badge y botón de temas (EXACTO A OTRAS SECCIONES) -->
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
                :class="isDarkMode ? 'text-white' : 'text-blue-900'">🔄 PROCESO</span>
          <div 
            class="ml-2 w-0.5 h-4 rounded-full transition-all duration-150"
            :class="isDarkMode 
              ? 'bg-gradient-to-b from-blue-300/30 to-blue-400/30' 
              : 'bg-gradient-to-b from-blue-400/30 to-blue-500/30'">
          </div>
        </div>

        <!-- Botón de tema compacto - AUMENTADO EN MÓVIL (EXACTO A OTRAS SECCIONES) -->
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
        <!-- Título principal en un solo renglón (MISMO TAMAÑO QUE INICIO) -->
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
                  Metodología Probada
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
              De <span :class="isDarkMode ? 'text-blue-200' : 'text-blue-800'">Estrategia</span> a 
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
              <span :class="isDarkMode ? 'text-white' : 'text-blue-900'">Un proceso estructurado </span> 
              <span class="relative inline-block">
                <span 
                  class="bg-clip-text text-transparent font-bold transition-all duration-150"
                  :class="isDarkMode 
                    ? 'bg-gradient-to-r from-blue-300 via-blue-200 to-white' 
                    : 'bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400'">
                  que garantiza el éxito
                </span>
                <!-- Brillo de fondo del texto -->
                <div 
                  class="absolute inset-0 blur-sm -z-10 rounded-full transition-all duration-150"
                  :class="isDarkMode 
                    ? 'bg-gradient-to-r from-blue-400/20 via-blue-300/15 to-blue-200/15' 
                    : 'bg-gradient-to-r from-blue-500/20 via-blue-400/15 to-blue-300/15'">
                </div>
              </span>
              de tu <span :class="isDarkMode ? 'text-blue-100' : 'text-blue-700'">proyecto digital</span>
            </p>
          </div>
        </div>

        <!-- Contenedor del carrusel de pasos -->
        <div class="relative w-full max-w-6xl mx-auto mb-6 md:mb-8 animate-fadeInUp transition-all duration-150" style="animation-delay: 150ms">
          <!-- Contenedor principal con tarjetas -->
          <div class="flex items-center justify-center h-[340px] md:h-[360px] transition-all duration-150">
            
            <!-- Botón izquierdo (ESTILO COHERENTE) -->
            <button 
              @click="prevSlide"
              :disabled="isAnimating"
              class="relative z-30 w-12 h-12 md:w-14 md:h-14 backdrop-blur-lg rounded-lg border flex items-center justify-center transition-all duration-150 hover:scale-110 hover:-translate-y-0.5 hover:shadow-xl group mr-2 md:mr-3 shadow-md"
              :class="isDarkMode 
                ? 'bg-blue-900/30 border-cyan-400/30 hover:border-cyan-300/50 shadow-cyan-500/15 hover:shadow-cyan-500/30' 
                : 'bg-blue-50/30 border-blue-400/30 hover:border-blue-500/50 shadow-blue-400/15 hover:shadow-blue-400/30'">
              <!-- Efecto de fondo -->
              <div class="absolute inset-0 transition-all duration-150"
                   :class="isDarkMode 
                     ? 'bg-gradient-to-br from-blue-800/40 to-indigo-800/40' 
                     : 'bg-gradient-to-br from-blue-100/40 to-blue-200/40'"></div>
              
              <div class="relative w-6 h-6 rounded-full flex items-center justify-center transform group-hover:-translate-x-0.5 transition-transform duration-150 animate-pulse-slow"
                   :class="isDarkMode 
                     ? 'bg-gradient-to-r from-blue-200 to-blue-100 shadow-inner' 
                     : 'bg-gradient-to-r from-blue-300 to-blue-200 shadow-inner'">
                <span class="text-base font-bold transition-colors duration-150"
                      :class="isDarkMode ? 'text-blue-900' : 'text-blue-800'">
                  ←
                </span>
              </div>
            </button>

            <!-- Contenedor de tarjetas -->
            <div class="flex-1 relative flex items-center justify-center h-full transition-all duration-150">
              
              <!-- Tarjeta anterior -->
              <div 
                v-if="prevCard"
                class="absolute left-0 w-[220px] h-[300px] md:w-[260px] md:h-[300px] transition-all duration-300 z-20"
                :class="isAnimating ? 'opacity-60 -translate-x-8' : 'opacity-80'"
              >
                <div 
                  class="w-full h-full backdrop-blur-xl rounded-lg border shadow-lg p-4 transform hover:scale-105 hover:shadow-xl transition-all duration-300 cursor-pointer group flex flex-col items-center justify-center relative overflow-hidden"
                  style="transform: rotateY(15deg) translateZ(-10px);"
                  @click="prevSlide"
                  :class="isDarkMode 
                    ? 'bg-gradient-to-br from-blue-700/40 via-indigo-800/50 to-blue-900/40 border-cyan-400/40 hover:border-cyan-300/50 hover:shadow-glow' 
                    : 'bg-gradient-to-br from-blue-50/80 via-blue-100/70 to-blue-200/60 border-blue-400/50 hover:border-blue-500/60 hover:shadow-glow'">
                  
                  <!-- Icono grande -->
                  <div class="flex justify-center mb-4 w-full">
                    <div class="w-16 h-16 rounded-lg flex items-center justify-center border shadow-lg transform group-hover:scale-110 transition-transform duration-150 animate-pulse-slow"
                         :class="isDarkMode 
                           ? 'bg-gradient-to-br from-blue-500/70 to-cyan-500/70 border-cyan-400/30' 
                           : 'bg-gradient-to-br from-blue-200/70 to-blue-300/70 border-blue-300/30'">
                      <span class="text-3xl">{{ prevCard.icon }}</span>
                    </div>
                  </div>
                  
                  <!-- Título -->
                  <h3 class="text-base md:text-lg font-black mb-2 text-center w-full px-3 whitespace-normal tracking-tight"
                      :class="isDarkMode ? 'text-white' : 'text-blue-900'">
                    {{ prevCard.title }}
                  </h3>
                  
                  <!-- Descripción -->
                  <p class="leading-relaxed text-xs md:text-sm text-center mb-3 w-full px-3 transition-colors duration-150"
                     :class="isDarkMode ? 'text-white/80' : 'text-blue-800/80'">
                    {{ prevCard.description }}
                  </p>
                  
                  <!-- Características -->
                  <ul class="space-y-1.5 w-full px-3 flex-grow overflow-y-auto max-h-[100px] md:max-h-none">
                    <li v-for="(feature, featureIndex) in prevCard.features" :key="featureIndex" 
                        class="flex items-start justify-start transform group-hover:translate-x-1 transition-transform duration-150"
                        :style="`transition-delay: ${featureIndex * 50}ms`">
                      <div class="w-2 h-2 rounded-full mr-2 mt-0.5 flex-shrink-0 shadow-sm animate-pulse-fast"
                           :class="isDarkMode 
                             ? 'bg-gradient-to-r from-cyan-400 to-blue-300' 
                             : 'bg-gradient-to-r from-blue-400 to-blue-300'">
                      </div>
                      <span class="text-xs text-left flex-1 font-medium transition-colors duration-150"
                            :class="isDarkMode ? 'text-white/85' : 'text-blue-800/85'">
                        {{ feature }}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <!-- Tarjeta actual central -->
              <div 
                class="absolute left-1/2 transform -translate-x-1/2 w-[280px] h-[340px] md:w-[320px] md:h-[360px] z-30 transition-all duration-300"
                :class="isAnimating ? 'opacity-80 scale-95' : 'opacity-100 scale-100'"
              >
                <div 
                  class="w-full h-full backdrop-blur-xl rounded-lg border shadow-xl p-5 md:p-6 transform hover:scale-105 hover:-translate-y-0.5 transition-all duration-300 group flex flex-col items-center justify-center relative overflow-hidden"
                  :class="isDarkMode 
                    ? 'bg-gradient-to-br from-blue-700/50 via-indigo-800/60 to-blue-900/50 border-cyan-400/50 hover:border-cyan-300/60 shadow-cyan-500/20 hover:shadow-glow' 
                    : 'bg-gradient-to-br from-blue-50/85 via-blue-100/75 to-blue-200/65 border-blue-400/60 hover:border-blue-500/70 shadow-blue-400/20 hover:shadow-glow'">
                  
                  <!-- Icono grande central -->
                  <div class="flex justify-center mb-4 w-full relative">
                    <div class="w-20 h-20 rounded-lg flex items-center justify-center border shadow-xl transform group-hover:rotate-12 transition-transform duration-300 animate-pulse-slow"
                         :class="isDarkMode 
                           ? 'bg-gradient-to-br from-blue-500/60 to-cyan-600/60 border-cyan-400/50' 
                           : 'bg-gradient-to-br from-blue-300/60 to-blue-400/60 border-blue-300/50'">
                      <span class="text-4xl custom-bounce-slow">{{ currentCard.icon }}</span>
                    </div>
                  </div>
                  
                  <!-- Título principal -->
                  <h3 class="text-lg md:text-xl font-black mb-3 text-center w-full bg-clip-text text-transparent px-4 whitespace-normal tracking-tight transition-all duration-150"
                      :class="isDarkMode 
                        ? 'bg-gradient-to-r from-white via-blue-100 to-blue-200' 
                        : 'bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700'">
                    {{ currentCard.title }}
                  </h3>
                  
                  <!-- Descripción -->
                  <p class="leading-relaxed text-sm md:text-base text-center mb-4 w-full px-4 transition-colors duration-150"
                     :class="isDarkMode ? 'text-white/90' : 'text-blue-800/90'">
                    {{ currentCard.description }}
                  </p>
                  
                  <!-- Características -->
                  <ul class="space-y-1.5 w-full px-4 mb-4 flex-grow overflow-y-auto max-h-[100px] md:max-h-none">
                    <li v-for="(feature, featureIndex) in currentCard.features" :key="featureIndex" 
                        class="flex items-start justify-start transform group-hover:translate-x-1 transition-transform duration-150"
                        :style="`transition-delay: ${featureIndex * 80}ms`">
                      <div class="w-2 h-2 rounded-full mr-2 mt-0.5 flex-shrink-0 shadow-md group-hover:scale-110 transition-all duration-150 animate-pulse-fast"
                           :class="isDarkMode 
                             ? 'bg-gradient-to-r from-cyan-400 to-blue-300' 
                             : 'bg-gradient-to-r from-blue-400 to-blue-300'">
                      </div>
                      <span class="text-sm md:text-base text-left flex-1 font-semibold transition-colors duration-150"
                            :class="isDarkMode ? 'text-white/85' : 'text-blue-800/85'">
                        {{ feature }}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <!-- Tarjeta siguiente -->
              <div 
                v-if="nextCard"
                class="absolute right-0 w-[220px] h-[300px] md:w-[260px] md:h-[300px] transition-all duration-300 z-20"
                :class="isAnimating ? 'opacity-60 translate-x-8' : 'opacity-80'"
              >
                <div 
                  class="w-full h-full backdrop-blur-xl rounded-lg border shadow-lg p-4 transform hover:scale-105 hover:shadow-xl transition-all duration-300 cursor-pointer group flex flex-col items-center justify-center relative overflow-hidden"
                  style="transform: rotateY(-15deg) translateZ(-10px);"
                  @click="nextSlide"
                  :class="isDarkMode 
                    ? 'bg-gradient-to-br from-blue-700/40 via-indigo-800/50 to-blue-900/40 border-cyan-400/40 hover:border-cyan-300/50 hover:shadow-glow' 
                    : 'bg-gradient-to-br from-blue-50/80 via-blue-100/70 to-blue-200/60 border-blue-400/50 hover:border-blue-500/60 hover:shadow-glow'">
                  
                  <!-- Icono grande -->
                  <div class="flex justify-center mb-4 w-full">
                    <div class="w-16 h-16 rounded-lg flex items-center justify-center border shadow-lg transform group-hover:scale-110 transition-transform duration-150 animate-pulse-slow"
                         :class="isDarkMode 
                           ? 'bg-gradient-to-br from-blue-500/70 to-cyan-500/70 border-cyan-400/30' 
                           : 'bg-gradient-to-br from-blue-200/70 to-blue-300/70 border-blue-300/30'">
                      <span class="text-3xl">{{ nextCard.icon }}</span>
                    </div>
                  </div>
                  
                  <!-- Título -->
                  <h3 class="text-base md:text-lg font-black mb-2 text-center w-full px-3 whitespace-normal tracking-tight"
                      :class="isDarkMode ? 'text-white' : 'text-blue-900'">
                    {{ nextCard.title }}
                  </h3>
                  
                  <!-- Descripción -->
                  <p class="leading-relaxed text-xs md:text-sm text-center mb-3 w-full px-3 transition-colors duration-150"
                     :class="isDarkMode ? 'text-white/80' : 'text-blue-800/80'">
                    {{ nextCard.description }}
                  </p>
                  
                  <!-- Características -->
                  <ul class="space-y-1.5 w-full px-3 flex-grow overflow-y-auto max-h-[100px] md:max-h-none">
                    <li v-for="(feature, featureIndex) in nextCard.features" :key="featureIndex" 
                        class="flex items-start justify-start transform group-hover:translate-x-1 transition-transform duration-150"
                        :style="`transition-delay: ${featureIndex * 50}ms`">
                      <div class="w-2 h-2 rounded-full mr-2 mt-0.5 flex-shrink-0 shadow-sm animate-pulse-fast"
                           :class="isDarkMode 
                             ? 'bg-gradient-to-r from-cyan-400 to-blue-300' 
                             : 'bg-gradient-to-r from-blue-400 to-blue-300'">
                      </div>
                      <span class="text-xs text-left flex-1 font-medium transition-colors duration-150"
                            :class="isDarkMode ? 'text-white/85' : 'text-blue-800/85'">
                        {{ feature }}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <!-- Botón derecho (ESTILO COHERENTE) -->
            <button 
              @click="nextSlide"
              :disabled="isAnimating"
              class="relative z-30 w-12 h-12 md:w-14 md:h-14 backdrop-blur-lg rounded-lg border flex items-center justify-center transition-all duration-150 hover:scale-110 hover:-translate-y-0.5 hover:shadow-xl group ml-2 md:ml-3 shadow-md"
              :class="isDarkMode 
                ? 'bg-blue-900/30 border-cyan-400/30 hover:border-cyan-300/50 shadow-cyan-500/15 hover:shadow-cyan-500/30' 
                : 'bg-blue-50/30 border-blue-400/30 hover:border-blue-500/50 shadow-blue-400/15 hover:shadow-blue-400/30'">
              <!-- Efecto de fondo -->
              <div class="absolute inset-0 transition-all duration-150"
                   :class="isDarkMode 
                     ? 'bg-gradient-to-br from-blue-800/40 to-indigo-800/40' 
                     : 'bg-gradient-to-br from-blue-100/40 to-blue-200/40'"></div>
              
              <div class="relative w-6 h-6 rounded-full flex items-center justify-center transform group-hover:translate-x-0.5 transition-transform duration-150 animate-pulse-slow"
                   :class="isDarkMode 
                     ? 'bg-gradient-to-r from-blue-200 to-blue-100 shadow-inner' 
                     : 'bg-gradient-to-r from-blue-300 to-blue-200 shadow-inner'">
                <span class="text-base font-bold transition-colors duration-150"
                      :class="isDarkMode ? 'text-blue-900' : 'text-blue-800'">
                  →
                </span>
              </div>
            </button>
          </div>

          <!-- Indicadores (ESTILO COHERENTE CON BOTONES DE OTRAS SECCIONES) -->
          <div class="flex justify-center items-center mt-4 md:mt-6 space-x-2 md:space-x-3 animate-fadeInUp transition-all duration-150" style="animation-delay: 200ms">
            <button 
              v-for="(step, index) in steps" 
              :key="index"
              @click="goToSlide(index)"
              class="relative w-6 h-6 md:w-8 md:h-8 rounded-full transition-all duration-150 group hover:scale-110 hover:-translate-y-0.5"
            >
              <div 
                class="absolute inset-0 rounded-full flex items-center justify-center transition-all duration-150 border"
                :class="currentIndex === index 
                  ? (isDarkMode 
                      ? 'bg-gradient-to-r from-cyan-400 to-blue-300 border-cyan-300/80 shadow-glow' 
                      : 'bg-gradient-to-r from-blue-400 to-blue-300 border-blue-500/80 shadow-blue-500/15')
                  : (isDarkMode 
                      ? 'bg-blue-800/30 border-blue-600/30' 
                      : 'bg-blue-200/30 border-blue-300/30')"
                :style="currentIndex === index 
                  ? { 
                      opacity: 1, 
                      boxShadow: isDarkMode 
                        ? '0 0 10px rgba(34, 211, 238, 0.6)' 
                        : '0 0 10px rgba(59, 130, 246, 0.6)',
                    } 
                  : { 
                      opacity: 0.7,
                    }"
              >
                <span class="text-xs font-bold transition-colors duration-150"
                      :class="currentIndex === index 
                        ? (isDarkMode ? 'text-blue-900' : 'text-white') 
                        : (isDarkMode ? 'text-blue-300/60' : 'text-blue-700/60')">
                  {{ step.icon }}
                </span>
              </div>
              <div v-if="currentIndex === index" 
                   class="absolute inset-0 rounded-full custom-ping transition-all duration-150"
                   :class="isDarkMode ? 'bg-cyan-400/30' : 'bg-blue-500/30'">
              </div>
            </button>
          </div>
        </div>

        <!-- Nota adicional (EXACTO A OTRAS SECCIONES) -->
        <div class="text-center mt-4 md:mt-6 max-w-2xl mx-auto px-4 animate-fadeInUp transition-all duration-150" style="animation-delay: 240ms">
          <div class="relative backdrop-blur-sm border rounded-lg p-3 md:p-4 shadow-lg transform transition-all duration-150 hover:scale-102"
               :class="isDarkMode 
                 ? 'bg-blue-900/20 border-blue-400/15 shadow-blue-500/10 hover:border-blue-300/30' 
                 : 'bg-blue-50/20 border-blue-300/15 shadow-blue-400/10 hover:border-blue-400/30'">
            <p class="text-xs sm:text-sm leading-relaxed text-center font-medium transition-colors duration-150"
               :class="isDarkMode ? 'text-white/90' : 'text-blue-800/90'">
              <span :class="isDarkMode ? 'text-white' : 'text-blue-900'">¿Listo para comenzar?</span> 
              Nuestro proceso probado garantiza resultados excepcionales en cada paso.
              <button @click="scrollToSection('contacto')"
                      class="inline-flex items-center font-bold ml-1 transition-colors duration-150 group"
                      :class="isDarkMode ? 'text-blue-200 hover:text-white' : 'text-blue-700 hover:text-blue-900'">
                Iniciar Proyecto
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
import { ref, computed, onMounted, onUnmounted, watch } from 'vue';

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
const autoRotateInterval = ref(null);

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

// Auto-rotation
const startAutoRotate = () => {
  autoRotateInterval.value = setInterval(() => nextSlide(), 6000);
};
const stopAutoRotate = () => {
  if (autoRotateInterval.value) {
    clearInterval(autoRotateInterval.value);
    autoRotateInterval.value = null;
  }
};

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

const handleInteraction = () => {
  stopAutoRotate();
  setTimeout(startAutoRotate, 15000);
};

// Inicializar
onMounted(() => {
  initializeTheme();
  startAutoRotate();
  const carouselContainer = document.querySelector('#proceso');
  if (carouselContainer) {
    carouselContainer.addEventListener('click', handleInteraction);
    carouselContainer.addEventListener('touchstart', handleInteraction);
  }
});

onUnmounted(() => {
  stopAutoRotate();
  const carouselContainer = document.querySelector('#proceso');
  if (carouselContainer) {
    carouselContainer.removeEventListener('click', handleInteraction);
    carouselContainer.removeEventListener('touchstart', handleInteraction);
  }
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

/* Animación para rebote lento */
@keyframes custom-bounce-slow {
  0%, 100% { 
    transform: translateY(0); 
  }
  50% { 
    transform: translateY(-6px); 
  }
}

/* Animación para ping */
@keyframes custom-ping {
  75%, 100% {
    transform: scale(1.3);
    opacity: 0;
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

.custom-bounce-slow {
  animation: custom-bounce-slow 3s ease-in-out infinite;
}

.custom-ping {
  animation: custom-ping 1.2s cubic-bezier(0, 0, 0.2, 1) infinite;
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

/* Optimización responsive */
@media (max-width: 768px) {
  #proceso {
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
  
  /* Iconos más grandes en móvil */
  .w-16 {
    width: 4rem;
    height: 4rem;
  }
  
  .w-20 {
    width: 5rem;
    height: 5rem;
  }
  
  .text-3xl {
    font-size: 2rem;
  }
  
  .text-4xl {
    font-size: 2.5rem;
  }
  
  /* Reducir altura máxima del scroll */
  .max-h-\[100px\] {
    max-height: 100px;
  }
  
  /* Permitir scroll en características */
  .overflow-y-auto {
    overflow-y: auto;
  }
  
  /* Mejorar el scroll */
  ::-webkit-scrollbar {
    width: 4px;
  }
  
  ::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 4px;
  }
  
  ::-webkit-scrollbar-thumb {
    background: rgba(59, 130, 246, 0.5);
    border-radius: 4px;
  }
  
  /* Asegurar que el texto no se corte */
  .whitespace-normal {
    white-space: normal;
  }
  
  /* Centrar contenido verticalmente */
  .justify-center {
    justify-content: center;
  }
  
  /* Botones de navegación más pequeños */
  .w-12, .w-14 {
    width: 2.5rem;
    height: 2.5rem;
  }
  
  .w-6, .w-8 {
    width: 1.5rem;
    height: 1.5rem;
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
  
  /* Iconos ajustados para pantallas pequeñas */
  .w-16 {
    width: 3.5rem;
    height: 3.5rem;
  }
  
  .w-20 {
    width: 4rem;
    height: 4rem;
  }
  
  .text-3xl {
    font-size: 1.75rem;
  }
  
  .text-4xl {
    font-size: 2rem;
  }
  
  /* Reducir márgenes */
  .mb-3, .mb-4 {
    margin-bottom: 0.75rem;
  }
  
  .mb-2 {
    margin-bottom: 0.5rem;
  }
  
  /* Reducir padding */
  .p-4 {
    padding: 0.75rem;
  }
  
  .p-5 {
    padding: 1rem;
  }
  
  /* Botones más pequeños */
  .w-12, .w-14 {
    width: 2rem;
    height: 2rem;
  }
  
  .w-6, .w-8 {
    width: 1.25rem;
    height: 1.25rem;
  }
}

/* Accesibilidad */
@media (prefers-reduced-motion: reduce) {
  .animate-pulse-fast,
  .animate-pulse-slow,
  .animate-bounce-fast,
  .animate-float,
  .animate-slideInLeft,
  .animate-fadeInUp,
  .custom-bounce-slow,
  .custom-ping,
  .animate-twinkle-fast {
    animation: none !important;
  }
  
  .hover\:scale-105,
  .hover\:-translate-y-0\.5,
  .group-hover\:scale-110,
  .hover\:scale-110,
  .hover\:scale-105,
  .hover\:-translate-y-0\.5 {
    transform: none !important;
  }
}

/* Mejoras de rendimiento */
#proceso > div:first-child {
  will-change: background-position;
}

.theme-switch-premium {
  will-change: transform;
}

/* Utilidades para control de texto */
.line-clamp-1 {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  line-clamp: 1;
}

.line-clamp-2 {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  line-clamp: 2;
}

.text-ellipsis {
  text-overflow: ellipsis;
  overflow: hidden;
}

/* Transform GPU para mejor rendimiento */
.transform-gpu {
  transform: translate3d(0, 0, 0);
}

/* Utilidades de escalado */
.hover\:scale-102:hover {
  transform: scale(1.02);
}

/* Añadir utilidad para forzar el wrap de texto */
.break-words {
  overflow-wrap: break-word;
  word-wrap: break-word;
  word-break: break-word;
}

/* Para móvil específicamente */
@media (max-width: 768px) {
  .md\:break-words {
    overflow-wrap: break-word;
    word-wrap: break-word;
    word-break: break-word;
  }
  
  /* Asegurar que todos los textos sean visibles */
  h3, p, span {
    overflow: visible !important;
    text-overflow: unset !important;
    white-space: normal !important;
  }
}

/* Centrar contenido verticalmente */
.flex-col.justify-center {
  justify-content: center;
}
</style>