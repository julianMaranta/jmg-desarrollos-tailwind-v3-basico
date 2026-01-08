<template>
  <section 
    id="proceso" 
    class="min-h-[50vh] w-full text-white relative overflow-hidden flex items-center justify-center transition-all duration-150 ease-out"
    :style="sectionGradientStyle"
  >
    <!-- Capa de fondo principal -->
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

    <!-- Efectos de fondo animados -->
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
      
      <!-- Contenedor para badge y botón de temas -->
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
                :class="isDarkMode ? 'text-white' : 'text-blue-900'">🚀 ANIMATE</span>
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
                <!-- Línea completa -->
                <div 
                  class="bg-clip-text text-transparent leading-tight transition-all duration-150"
                  :class="isDarkMode 
                    ? 'bg-gradient-to-r from-white via-cyan-200 to-blue-100' 
                    : 'bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700'">
                  Empecemos el proceso
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
              Consultas y asesorías 
              <span 
                class="bg-clip-text text-transparent font-bold transition-all duration-150"
                :class="isDarkMode 
                  ? 'bg-gradient-to-r from-blue-300 via-blue-200 to-white' 
                  : 'bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400'">
                100% Gratis.
              </span>
              ¡Envíanos un mensaje!
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
              Sigue los pasos de nuestro 
              <span class="relative inline-block">
                <span 
                  class="bg-clip-text text-transparent font-bold transition-all duration-150"
                  :class="isDarkMode 
                    ? 'bg-gradient-to-r from-blue-300 via-blue-200 to-white' 
                    : 'bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400'">
                  proceso probado
                </span>
                <!-- Brillo de fondo del texto -->
                <div 
                  class="absolute inset-0 blur-sm -z-10 rounded-full transition-all duration-150"
                  :class="isDarkMode 
                    ? 'bg-gradient-to-r from-blue-400/20 via-blue-300/15 to-blue-200/15' 
                    : 'bg-gradient-to-r from-blue-500/20 via-blue-400/15 to-blue-300/15'">
                </div>
              </span>.
            </p>
          </div>
        </div>

        <!-- CTA Section -->
        <div class="text-center mt-1 w-full max-w-2xl mx-auto transition-all duration-150">
          <div 
            class="backdrop-blur-xl rounded-2xl border shadow-lg p-4 md:p-5 w-full flex flex-col items-center justify-center transform transition-all duration-150 group"
            :class="isDarkMode 
              ? 'bg-gradient-to-br from-blue-700/45 via-indigo-800/55 to-blue-900/45 border-cyan-400/40' 
              : 'bg-gradient-to-br from-blue-50/85 via-blue-100/75 to-blue-200/65 border-blue-400/50'"
          >
            <!-- Efecto de borde animado -->
            <div 
              class="absolute inset-0 rounded-2xl border border-transparent transition-all duration-150"
              :class="isDarkMode 
                ? 'group-hover:border-cyan-400/35' 
                : 'group-hover:border-blue-400/40'"
            ></div>
            
            <!-- Título CTA -->
            <h3 
              class="text-lg md:text-xl font-black mb-2 text-center w-full bg-clip-text text-transparent px-3 transition-all duration-150"
              :class="isDarkMode 
                ? 'bg-gradient-to-r from-white via-cyan-200 to-blue-100' 
                : 'bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700'"
            >
              ¿Listo para Iniciar tu Proyecto?
            </h3>
            
            <!-- Texto CTA -->
            <p 
              class="text-sm md:text-base mb-4 max-w-md text-center transition-colors duration-150"
              :class="isDarkMode ? 'text-white/85' : 'text-blue-900/85'"
            >
              De <span :class="isDarkMode ? 'text-blue-200' : 'text-blue-800'">Ideas</span> a 
              <span :class="isDarkMode ? 'text-blue-200' : 'text-blue-800'">Resultados</span> Excepcionales
            </p>
            
            <!-- Botones CTA -->
            <div class="flex flex-col sm:flex-row gap-2 md:gap-3 justify-center items-center w-full animate-fadeInUp transition-all duration-150" style="animation-delay: 150ms">
              
              <!-- Botón Primario -->
              <button @click="scrollToSection('contacto')"
                      class="group relative text-white font-bold py-2.5 px-6 rounded-xl transition-all duration-150 transform hover:scale-105 hover:-translate-y-0.5 shadow-lg hover:shadow-glow-hover text-sm md:text-base overflow-hidden"
                      :class="isDarkMode 
                        ? 'bg-gradient-to-r from-blue-600 via-cyan-700 to-indigo-800 hover:from-blue-700 hover:via-cyan-800 hover:to-indigo-900' 
                        : 'bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 hover:from-blue-700 hover:via-blue-800 hover:to-blue-900'">
                <!-- Efecto de brillo al hover -->
                <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-300"></div>
                
                <span class="flex items-center justify-center relative">
                  Iniciar Proceso
                  <span class="ml-2 text-lg animate-bounce-fast">🚀</span>
                </span>
              </button>
              
              <!-- Botón Secundario -->
              <button @click="scrollToSection('contacto')"
                      class="group relative border font-bold py-2.5 px-6 rounded-xl transition-all duration-150 transform hover:scale-105 hover:-translate-y-0.5 text-sm md:text-base overflow-hidden backdrop-blur-lg"
                      :class="isDarkMode 
                        ? 'border-cyan-400/40 text-white hover:text-blue-100 hover:border-cyan-300/50' 
                        : 'border-blue-400/40 text-blue-800 hover:text-blue-900 hover:border-blue-500/60'">
                <!-- Efecto de fondo al hover -->
                <div class="absolute inset-0 transition-all duration-150"
                     :class="isDarkMode 
                       ? 'bg-blue-900/15 group-hover:bg-blue-800/20' 
                       : 'bg-blue-100/15 group-hover:bg-blue-200/20'"></div>
                
                <span class="relative z-10 flex items-center justify-center">
                  <span class="mr-2 text-lg transform transition-transform duration-300 group-hover:scale-105 animate-bounce-fast">💬</span>
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

/* *********************************************************** */
/* MODIFICACIONES ESPECÍFICAS PARA MÓVIL - SOLO EN ESTA SECCIÓN */
/* *********************************************************** */

@media (max-width: 768px) {
  section {
    min-height: 40vh;
  }
  
  /* 1. ESPACIO REDUCIDO DEBAJO DEL BADGE EN MÓVIL */
  .relative.w-full.mb-1 {
    margin-bottom: 0.5rem !important;
  }
  
  /* 2. BOTÓN DE TEMA AUMENTADO EN MÓVIL */
  .theme-switch-premium {
    width: 40px !important;
    height: 40px !important;
  }
  
  .theme-switch-premium > div:first-child {
    width: 32px !important;
    height: 32px !important;
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
    width: 5px !important;
    height: 5px !important;
  }
  
  /* Espacio reducido general en móvil */
  .relative.w-full.mb-6 {
    margin-bottom: 4rem;
  }
  
  .absolute.-bottom-4 {
    font-size: 8px;
    bottom: -3px;
  }
}

@media (max-width: 480px) {
  /* 1. ESPACIO AÚN MÁS REDUCIDO EN MÓVILES PEQUEÑOS */
  .relative.w-full.mb-1 {
    margin-bottom: 0.25rem !important;
  }
  
  /* 2. BOTÓN DE TEMA AÚN MÁS GRANDE EN MÓVILES PEQUEÑOS */
  .theme-switch-premium {
    width: 44px !important;
    height: 44px !important;
  }
  
  .theme-switch-premium > div:first-child {
    width: 34px !important;
    height: 34px !important;
  }
  
  .theme-switch-premium .absolute.left-2 {
    left: 9px !important;
  }
  
  .theme-switch-premium .absolute.right-2 {
    right: 9px !important;
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
section > div:first-child {
  will-change: background-position;
}

.theme-switch-premium {
  will-change: transform;
}
</style>