<template>
  <section 
    id="contacto" 
    class="min-h-auto w-full relative overflow-hidden flex items-center justify-center py-6 md:py-8 transition-all duration-150 ease-out"
    :style="sectionGradientStyle"
  >
    <!-- Background Elements con tema -->
    <div class="absolute inset-0 overflow-hidden w-full transition-all duration-150 ease-out">
      <!-- Partículas con tema -->
      <div v-for="i in 20" :key="i" 
           class="absolute rounded-full custom-float transition-all duration-150"
           :class="isDarkMode ? 'bg-blue-400/15' : 'bg-blue-300/20'"
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
                :class="isDarkMode ? 'text-white' : 'text-blue-900'">📞 CONTACTO</span>
          <div 
            class="ml-2 w-0.5 h-4 rounded-full transition-all duration-150"
            :class="isDarkMode 
              ? 'bg-gradient-to-b from-blue-300/30 to-blue-400/30' 
              : 'bg-gradient-to-b from-blue-400/30 to-blue-500/30'">
          </div>
        </div>

        <!-- Botón de tema compacto IDÉNTICO AL HEADER -->
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
                  Comencemos Hoy
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
          
          <!-- Slogan 
          <div class="mt-2 md:mt-3 animate-fadeInUp transition-all duration-150" style="animation-delay: 50ms">
            <p class="text-base md:text-lg font-bold transition-colors duration-150"
               :class="isDarkMode ? 'text-blue-100/90' : 'text-blue-700/90'">
              Contáctanos y recibe una <span :class="isDarkMode ? 'text-blue-200' : 'text-blue-800'">cotización gratuita</span>
            </p>
          </div>-->
        </div>
        
        <!-- Subtítulo -->
        <div class="relative max-w-2xl mx-auto mb-4 md:mb-6 animate-fadeInUp transition-all duration-150" style="animation-delay: 100ms">
          <div class="relative backdrop-blur-sm border rounded-lg p-3 md:p-4 shadow-lg transform transition-all duration-150 hover:scale-102"
               :class="isDarkMode 
                 ? 'bg-blue-900/20 border-blue-400/15 shadow-blue-500/10 hover:border-blue-300/30' 
                 : 'bg-blue-50/20 border-blue-300/15 shadow-blue-400/10 hover:border-blue-400/30'">
            <p class="text-sm sm:text-base md:text-lg leading-relaxed text-center font-medium transition-colors duration-150"
               :class="isDarkMode ? 'text-white/90' : 'text-blue-800/90'">
              Contáctanos <span :class="isDarkMode ? 'text-white' : 'text-blue-900'">y recibe</span> 
               una <span class="relative inline-block">
                <span 
                  class="bg-clip-text text-transparent font-bold transition-all duration-150"
                  :class="isDarkMode 
                    ? 'bg-gradient-to-r from-blue-300 via-blue-200 to-white' 
                    : 'bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400'">
                  cotización gratuita
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

        <!-- Contenido Principal -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-3 md:gap-4 w-full max-w-6xl mx-auto px-4 animate-fadeInUp transition-all duration-150" style="animation-delay: 150ms">
          
          <!-- WhatsApp Box (caja compacta) -->
          <div 
            class="backdrop-blur-xl rounded-lg border shadow-lg p-4 md:p-5 w-full flex flex-col items-center justify-center transform hover:scale-101 transition-all duration-150 group min-h-[300px]"
            :class="isDarkMode 
              ? 'bg-gradient-to-br from-green-900/20 via-emerald-800/25 to-green-900/20 border-green-400/35 hover:border-green-300/50' 
              : 'bg-gradient-to-br from-green-50/85 via-emerald-100/75 to-green-200/65 border-green-400/35 hover:border-green-300/50'"
          >
            <!-- WhatsApp Logo compacto -->
            <div class="mb-3 md:mb-4">
              <img 
                src="/assets/whatsapp-logo1.png" 
                alt="WhatsApp" 
                class="w-16 h-16 md:w-20 md:h-20 object-contain transition-all duration-500 group-hover:scale-105"
              />
            </div>
            
            <!-- Título WhatsApp compacto -->
            <h3 class="text-lg md:text-xl font-bold mb-2 text-center w-full bg-clip-text text-transparent transition-all duration-150"
                :class="isDarkMode 
                  ? 'bg-gradient-to-r from-green-300 via-emerald-200 to-green-100' 
                  : 'bg-gradient-to-r from-green-900 via-emerald-800 to-green-700'">
              WhatsApp Directo
            </h3>
            
            <!-- Descripción compacta -->
            <p class="mb-3 md:mb-4 text-center w-full max-w-md mx-auto text-xs md:text-sm transition-colors duration-150 px-2"
               :class="isDarkMode ? 'text-green-100/90' : 'text-green-900/90'">
              <span :class="isDarkMode ? 'text-green-200 font-semibold' : 'text-green-800 font-semibold'">Respuesta en menos de 24 HS</span> y atención personalizada
            </p>
            
            <!-- Botón de WhatsApp -->
            <a 
              href="https://wa.me/5492212222358" 
              target="_blank"
              @click="openWhatsApp"
              class="group relative text-white font-bold py-2.5 md:py-3 px-6 md:px-8 rounded-xl transition-all duration-150 transform hover:scale-105 hover:-translate-y-0.5 shadow-lg hover:shadow-glow text-base md:text-lg overflow-hidden w-full max-w-xs"
              :class="isDarkMode 
                ? 'bg-gradient-to-r from-green-600 via-emerald-700 to-green-800 hover:from-green-700 hover:via-emerald-800 hover:to-green-900' 
                : 'bg-gradient-to-r from-green-600 via-green-700 to-green-800 hover:from-green-700 hover:via-green-800 hover:to-green-900'"
            >
              <!-- Efecto de brillo al hover -->
              <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-300"></div>
              
              <span class="flex items-center justify-center relative">
                <img 
                  src="/assets/whatsapp-logo1.png" 
                  alt="WhatsApp" 
                  class="w-5 h-5 md:w-6 md:h-6 mr-2 object-contain transition-all duration-500 group-hover:scale-110"
                />
                Chatear Ahora
              </span>
            </a>
            
            <!-- Información adicional compacta -->
            <div class="mt-3 md:mt-4 pt-3 md:pt-4 border-t w-full max-w-sm"
                 :class="isDarkMode ? 'border-green-400/20' : 'border-green-400/30'">
              <div class="flex justify-center space-x-4 md:space-x-6">
                <div class="text-center">
                  <div class="text-base md:text-lg transition-colors duration-150"
                       :class="isDarkMode ? 'text-green-300' : 'text-green-700'">
                    <span class="text-xl">⚡</span>
                  </div>
                  <p class="text-xs mt-0.5 transition-colors duration-150"
                     :class="isDarkMode ? 'text-green-200/80' : 'text-green-800/80'">
                    Rápido
                  </p>
                </div>
                <div class="text-center">
                  <div class="text-base md:text-lg transition-colors duration-150"
                       :class="isDarkMode ? 'text-green-300' : 'text-green-700'">
                    <span class="text-xl">💬</span>
                  </div>
                  <p class="text-xs mt-0.5 transition-colors duration-150"
                     :class="isDarkMode ? 'text-green-200/80' : 'text-green-800/80'">
                    Consultas Gratis
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Contact Information (datos de contacto) -->
          <div class="flex flex-col justify-center items-start w-full transition-all duration-150">
            <!-- Contact Methods -->
            <div class="space-y-3 w-full transition-all duration-150">
              <!-- Phone -->
              <div class="flex items-start group cursor-pointer transform transition-all duration-400 hover:scale-103 w-full transition-all duration-150">
                <div class="w-12 h-12 rounded-lg flex items-center justify-center mr-4 transform transition-all duration-400 group-hover:scale-105 group-hover:rotate-2 shadow-md group-hover:shadow-glow"
                     :class="isDarkMode 
                       ? 'bg-gradient-to-br from-blue-600 via-cyan-700 to-indigo-800' 
                       : 'bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800'">
                  <span class="text-xl transition-all duration-150">📞</span>
                </div>
                <div class="flex-1 text-left transition-all duration-150">
                  <h4 class="text-base md:text-lg font-bold mb-1 transition-colors duration-150"
                      :class="isDarkMode ? 'text-white' : 'text-blue-900'">
                    Teléfono
                  </h4>
                  <p class="text-sm md:text-base font-semibold transition-colors duration-150"
                     :class="isDarkMode ? 'text-cyan-200' : 'text-blue-700'">
                    +54 9 221 222-2358
                  </p>
                  <p class="text-xs transition-colors duration-150 mt-0.5"
                     :class="isDarkMode ? 'text-white/65' : 'text-blue-900/65'">
                    Lunes a Viernes 9:00 - 18:00
                  </p>
                </div>
              </div>
              
              <!-- Email -->
              <div class="flex items-start group cursor-pointer transform transition-all duration-400 hover:scale-103 w-full transition-all duration-150">
                <div class="w-12 h-12 rounded-lg flex items-center justify-center mr-4 transform transition-all duration-400 group-hover:scale-105 group-hover:rotate-2 shadow-md group-hover:shadow-glow"
                     :class="isDarkMode 
                       ? 'bg-gradient-to-br from-blue-700 via-cyan-800 to-indigo-900' 
                       : 'bg-gradient-to-br from-blue-700 via-blue-800 to-blue-900'">
                  <span class="text-xl transition-all duration-150">✉️</span>
                </div>
                <div class="flex-1 text-left transition-all duration-150">
                  <h4 class="text-base md:text-lg font-bold mb-1 transition-colors duration-150"
                      :class="isDarkMode ? 'text-white' : 'text-blue-900'">
                    Email
                  </h4>
                  <p class="text-sm md:text-base font-semibold transition-colors duration-150"
                     :class="isDarkMode ? 'text-cyan-200' : 'text-blue-700'">
                    jmgdesarrollos@gmail.com
                  </p>
                  <p class="text-xs transition-colors duration-150 mt-0.5"
                     :class="isDarkMode ? 'text-white/65' : 'text-blue-900/65'">
                    Respondemos en menos de 24 horas
                  </p>
                </div>
              </div>
              
              <!-- Location -->
              <div class="flex items-start group cursor-pointer transform transition-all duration-400 hover:scale-103 w-full transition-all duration-150">
                <div class="w-12 h-12 rounded-lg flex items-center justify-center mr-4 transform transition-all duration-400 group-hover:scale-105 group-hover:rotate-2 shadow-md group-hover:shadow-glow"
                     :class="isDarkMode 
                       ? 'bg-gradient-to-br from-indigo-800 via-blue-900 to-purple-900' 
                       : 'bg-gradient-to-br from-blue-800 via-blue-900 to-indigo-900'">
                  <span class="text-xl transition-all duration-150">📍</span>
                </div>
                <div class="flex-1 text-left transition-all duration-150">
                  <h4 class="text-base md:text-lg font-bold mb-1 transition-colors duration-150"
                      :class="isDarkMode ? 'text-white' : 'text-blue-900'">
                    Ubicación
                  </h4>
                  <p class="text-sm md:text-base font-semibold transition-colors duration-150"
                     :class="isDarkMode ? 'text-cyan-200' : 'text-blue-700'">
                    Buenos Aires, Argentina
                  </p>
                  <p class="text-xs transition-colors duration-150 mt-0.5"
                     :class="isDarkMode ? 'text-white/65' : 'text-blue-900/65'">
                    Trabajamos con clientes de todo el mundo
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Elemento decorativo final -->
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

// WhatsApp function
const openWhatsApp = () => {
  const message = encodeURIComponent('Hola, me gustaría solicitar información sobre sus servicios de desarrollo web.');
  window.open(`https://wa.me/5492212222358?text=${message}`, '_blank', 'noopener,noreferrer');
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

/* Optimización responsive */
@media (max-width: 768px) {
  /* Botón de tema MÁS GRANDE EN MÓVIL - IDÉNTICO AL HEADER */
  .theme-switch-premium {
    width: 40px; /* AUMENTADO DE 28px */
    height: 40px; /* AUMENTADO DE 10px */
  }
  
  .theme-switch-premium > div:first-child {
    width: 32px; /* AUMENTADO DE 10px */
    height: 32px; /* AUMENTADO DE 10px */
  }
  
  /* Ajustar posiciones de iconos para botón más grande */
  .absolute.left-2 {
    left: 8px;
  }
  
  .absolute.right-2 {
    right: 8px;
  }
  
  /* ESPACIO REDUCIDO DEBAJO DEL BADGE EN MÓVIL */
  .relative.w-full.mb-1 {
    margin-bottom: 0.25rem; /* REDUCIDO SIGNIFICATIVAMENTE */
  }
  
  /* Elementos ocultos en móvil */
  .absolute.-bottom-4 {
    display: none; /* OCULTO EN MÓVIL */
  }
  
  .absolute.-bottom-6 {
    display: none; /* OCULTO EN MÓVIL */
  }
  
  /* WhatsApp logo responsive */
  .min-h-\[300px\] {
    min-height: 280px;
  }
}

@media (max-width: 480px) {
  .grid.grid-cols-2 {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
  
  /* Botón de tema AÚN MÁS GRANDE EN MÓVILES PEQUEÑOS */
  .theme-switch-premium {
    width: 44px; /* AUMENTADO DE 26px */
    height: 44px; /* AUMENTADO DE 9px */
  }
  
  .theme-switch-premium > div:first-child {
    width: 34px; /* AUMENTADO DE 9px */
    height: 34px; /* AUMENTADO DE 9px */
  }
  
  .absolute.left-2 {
    left: 9px;
  }
  
  .absolute.right-2 {
    right: 9px;
  }
  
  /* ESPACIO AÚN MÁS REDUCIDO EN MÓVILES MUY PEQUEÑOS */
  .relative.w-full.mb-1 {
    margin-bottom: 0.25rem; /* MANTENIDO MUY REDUCIDO */
  }
  
  /* WhatsApp logo más pequeño en móvil */
  .min-h-\[300px\] {
    min-height: 260px;
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

/* Gradientes de texto premium */
.bg-clip-text {
  -webkit-background-clip: text !important;
  background-clip: text !important;
  color: transparent;
  display: inline-block;
}
</style>