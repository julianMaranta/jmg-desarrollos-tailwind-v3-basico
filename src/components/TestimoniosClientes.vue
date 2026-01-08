<template>
  <section 
    id="testimonios" 
    class="py-8 md:py-10 text-white relative overflow-hidden w-full flex justify-center transition-all duration-150 ease-out"
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

    <div class="w-full max-w-6xl mx-auto px-4 md:px-6 relative z-10 flex flex-col items-center">
      <!-- Badge animado compacto CENTRADO (CAMBIO PRINCIPAL) -->
      <div class="text-center w-full mb-4">
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
                :class="isDarkMode ? 'text-white' : 'text-blue-900'">💬 TESTIMONIOS</span>
          <div 
            class="ml-2 w-0.5 h-4 rounded-full transition-all duration-150"
            :class="isDarkMode 
              ? 'bg-gradient-to-b from-blue-300/30 to-blue-400/30' 
              : 'bg-gradient-to-b from-blue-400/30 to-blue-500/30'">
          </div>
        </div>
      </div>

      <!-- Botón de tema compacto - EXACTO AL HEADER Y SERVICIOS CON MÁS ESPACIO A LA DERECHA -->
      <div class="absolute top-0 right-0 md:right-2 z-50 mr-2 md:mr-0">
        <button
          @click="toggleTheme"
          class="relative flex items-center justify-center w-10 h-10 md:w-32 md:h-12 rounded-lg border shadow-md hover:shadow-lg transform hover:scale-105 active:scale-95 transition-all duration-150 ease-out overflow-hidden group theme-switch-premium"
          :class="isDarkMode 
            ? 'border-cyan-400/50 hover:border-cyan-300 shadow-cyan-500/15 bg-gradient-to-br from-blue-900/80 via-indigo-900/80 to-purple-900/80' 
            : 'border-blue-300/50 hover:border-blue-200 shadow-blue-400/15 bg-gradient-to-br from-white/90 via-blue-50/90 to-blue-100/90'"
          :title="isDarkMode ? 'Cambiar a tema claro' : 'Cambiar a tema oscuro'"
          aria-label="Cambiar tema"
        >
          <!-- Switch compacto - MÁS GRANDE EN MÓVIL (IGUAL AL HEADER Y SERVICIOS) -->
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

      <!-- Título principal en un solo renglón (MISMO TAMAÑO QUE INICIO) -->
      <div class="relative w-full mb-2 transition-all duration-150 text-center">
        <h2 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-center w-full tracking-tight leading-tight animate-slideInLeft transition-all duration-150">
          <span class="relative inline-block">
            <div class="relative pb-1">
              <!-- Línea completa -->
              <div 
                class="bg-clip-text text-transparent leading-tight transition-all duration-150"
                :class="isDarkMode 
                  ? 'bg-gradient-to-r from-white via-cyan-200 to-blue-100' 
                  : 'bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700'">
                Nuestro Caso de Éxito: ENSEA
              </div>
            </div>
            
            <!-- Subrayado animado (EXACTO AL INICIO) -->
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
      <div class="relative max-w-2xl mx-auto mb-3 animate-fadeInUp transition-all duration-150" style="animation-delay: 100ms">
        <div class="relative backdrop-blur-sm border rounded-lg p-3 md:p-4 shadow-lg transform transition-all duration-150 hover:scale-102"
             :class="isDarkMode 
               ? 'bg-blue-900/20 border-blue-400/15 shadow-blue-500/10 hover:border-blue-300/30' 
               : 'bg-blue-50/20 border-blue-300/15 shadow-blue-400/10 hover:border-blue-400/30'">
          <p class="text-sm sm:text-base md:text-lg leading-relaxed text-center font-medium transition-colors duration-150"
             :class="isDarkMode ? 'text-white/90' : 'text-blue-800/90'">
            <span :class="isDarkMode ? 'text-white' : 'text-blue-900'">Renovamos su </span> 
            <span class="relative inline-block">
              <span 
                class="bg-clip-text text-transparent font-bold transition-all duration-150"
                :class="isDarkMode 
                  ? 'bg-gradient-to-r from-blue-300 via-blue-200 to-white' 
                  : 'bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400'">
                Plataforma Web
              </span>
              <!-- Brillo de fondo del texto -->
              <div 
                class="absolute inset-0 blur-sm -z-10 rounded-full transition-all duration-150"
                :class="isDarkMode 
                  ? 'bg-gradient-to-r from-blue-400/20 via-blue-300/15 to-blue-200/15' 
                  : 'bg-gradient-to-r from-blue-500/20 via-blue-400/15 to-blue-300/15'">
              </div>
            </span>
            de <span :class="isDarkMode ? 'text-blue-100' : 'text-blue-700'">cursos</span>
          </p>
        </div>
      </div>

      <!-- CARRUSEL DE IMÁGENES - ESPACIO REDUCIDO (CAMBIO PRINCIPAL) -->
      <div class="relative w-full max-w-[1000px] mx-auto mb-3 md:mb-4 animate-fadeInUp transition-all duration-150" style="animation-delay: 150ms">
        <!-- Contenedor del carrusel con altura reducida -->
        <div class="flex items-center justify-center h-[450px] md:h-[500px] transition-all duration-150">
          
          <!-- Botón izquierdo (OCULTO EN MÓVIL) -->
          <button 
            @click="prevSlide"
            :disabled="isAnimating"
            class="relative z-30 w-12 h-12 md:w-14 md:h-14 backdrop-blur-lg rounded-lg border flex items-center justify-center transition-all duration-150 hover:scale-110 hover:-translate-y-0.5 hover:shadow-xl group mr-2 md:mr-3 shadow-md hidden md:flex"
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

          <!-- Contenedor de imágenes -->
          <div class="flex-1 relative flex items-center justify-center h-full transition-all duration-150 px-3 md:px-0">
            
            <!-- Imagen anterior -->
            <div 
              v-if="prevImage"
              class="absolute left-0 w-[220px] h-[330px] md:w-[260px] md:h-[390px] transition-all duration-300 z-20 hidden md:block"
              :class="isAnimating ? 'opacity-60 -translate-x-16' : 'opacity-80'"
            >
              <div 
                class="w-full h-full backdrop-blur-xl rounded-lg border shadow-lg p-4 transform hover:scale-105 hover:shadow-xl transition-all duration-300 cursor-pointer group relative overflow-hidden min-h-full"
                style="transform: rotateY(15deg) translateZ(-20px);"
                @click="prevSlide"
                :class="isDarkMode 
                  ? 'bg-gradient-to-br from-blue-700/40 via-indigo-800/50 to-blue-900/40 border-cyan-400/40 hover:border-cyan-300/50 hover:shadow-glow' 
                  : 'bg-gradient-to-br from-blue-50/80 via-blue-100/70 to-blue-200/60 border-blue-400/50 hover:border-blue-500/60 hover:shadow-glow'">
                
                <!-- Imagen -->
                <div class="relative w-full h-[220px] md:h-[260px] rounded-t-lg overflow-hidden">
                  <img 
                    :src="prevImage.image" 
                    :alt="prevImage.title"
                    class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div class="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                </div>
                
                <!-- Contenido -->
                <div class="p-3 h-[110px] md:h-[130px] flex flex-col justify-center">
                  <h3 class="text-base font-bold mb-1 text-center transition-colors duration-150 line-clamp-1"
                      :class="isDarkMode ? 'text-white' : 'text-blue-900'">
                    {{ prevImage.title }}
                  </h3>
                  <p class="text-xs text-center transition-colors duration-150 line-clamp-2"
                     :class="isDarkMode ? 'text-white/80' : 'text-blue-800/80'">
                    {{ prevImage.description }}
                  </p>
                </div>
              </div>
            </div>

            <!-- Imagen actual central -->
            <div 
              class="absolute left-1/2 transform -translate-x-1/2 w-[calc(100%-20px)] md:w-[600px] h-[400px] md:h-[450px] z-30 transition-all duration-300"
              :class="isAnimating ? 'opacity-80 scale-95' : 'opacity-100 scale-100'"
            >
              <div 
                class="w-full h-full backdrop-blur-xl rounded-lg border shadow-xl transform hover:scale-105 hover:-translate-y-0.5 transition-all duration-300 group relative overflow-hidden min-h-full"
                :class="isDarkMode 
                  ? 'bg-gradient-to-br from-blue-700/50 via-indigo-800/60 to-blue-900/50 border-cyan-400/50 hover:border-cyan-300/60 shadow-cyan-500/20 hover:shadow-glow' 
                  : 'bg-gradient-to-br from-blue-50/85 via-blue-100/75 to-blue-200/65 border-blue-400/60 hover:border-blue-500/70 shadow-blue-400/20 hover:shadow-glow'">
                
                <!-- Imagen grande - MÁS ALTA Y MENOS ANCHA EN MÓVIL -->
                <div class="relative w-full h-[270px] md:h-[300px] rounded-t-lg overflow-hidden">
                  <img 
                    :src="currentImage.image" 
                    :alt="currentImage.title"
                    class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                </div>
                
                <!-- Contenido principal - ALTURA INCREMENTADA PARA EVITAR CORTE -->
                <div class="p-4 md:p-5 h-[130px] md:h-[150px] flex flex-col justify-center min-h-[80px]">
                  <h3 class="text-lg md:text-xl font-black mb-2 text-center bg-clip-text text-transparent transition-all duration-150 line-clamp-1"
                      :class="isDarkMode 
                        ? 'bg-gradient-to-r from-white via-blue-100 to-blue-200' 
                        : 'bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700'">
                    {{ currentImage.title }}
                  </h3>
                  <!-- TEXTO MÁS PEQUEÑO PERO CON SUFICIENTE ESPACIO -->
                  <p class="text-xs md:text-sm leading-relaxed text-center transition-colors duration-150 line-clamp-2"
                     :class="isDarkMode ? 'text-white/90' : 'text-blue-800/90'">
                    {{ currentImage.description }}
                  </p>
                </div>
              </div>
            </div>

            <!-- Imagen siguiente -->
            <div 
              v-if="nextImage"
              class="absolute right-0 w-[220px] h-[330px] md:w-[260px] md:h-[390px] transition-all duration-300 z-20 hidden md:block"
              :class="isAnimating ? 'opacity-60 translate-x-16' : 'opacity-80'"
            >
              <div 
                class="w-full h-full backdrop-blur-xl rounded-lg border shadow-lg p-4 transform hover:scale-105 hover:shadow-xl transition-all duration-300 cursor-pointer group relative overflow-hidden min-h-full"
                style="transform: rotateY(-15deg) translateZ(-20px);"
                @click="nextSlide"
                :class="isDarkMode 
                  ? 'bg-gradient-to-br from-blue-700/40 via-indigo-800/50 to-blue-900/40 border-cyan-400/40 hover:border-cyan-300/50 hover:shadow-glow' 
                  : 'bg-gradient-to-br from-blue-50/80 via-blue-100/70 to-blue-200/60 border-blue-400/50 hover:border-blue-500/60 hover:shadow-glow'">
                
                <!-- Imagen -->
                <div class="relative w-full h-[220px] md:h-[260px] rounded-t-lg overflow-hidden">
                  <img 
                    :src="nextImage.image" 
                    :alt="nextImage.title"
                    class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div class="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                </div>
                
                <!-- Contenido -->
                <div class="p-3 h-[110px] md:h-[130px] flex flex-col justify-center">
                  <h3 class="text-base font-bold mb-1 text-center transition-colors duration-150 line-clamp-1"
                      :class="isDarkMode ? 'text-white' : 'text-blue-900'">
                    {{ nextImage.title }}
                  </h3>
                  <p class="text-xs text-center transition-colors duration-150 line-clamp-2"
                     :class="isDarkMode ? 'text-white/80' : 'text-blue-800/80'">
                    {{ nextImage.description }}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Botón derecho (OCULTO EN MÓVIL) -->
          <button 
            @click="nextSlide"
            :disabled="isAnimating"
            class="relative z-30 w-12 h-12 md:w-14 md:h-14 backdrop-blur-lg rounded-lg border flex items-center justify-center transition-all duration-150 hover:scale-110 hover:-translate-y-0.5 hover:shadow-xl group ml-2 md:ml-3 shadow-md hidden md:flex"
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

        <!-- Indicadores (ESTILO COHERENTE CON SECCIÓN PROCESO) -->
        <div class="flex justify-center items-center mt-3 md:mt-4 space-x-2 md:space-x-3 animate-fadeInUp transition-all duration-150" style="animation-delay: 200ms">
          <button 
            v-for="(image, index) in images" 
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
                {{ index + 1 }}
              </span>
            </div>
            <div v-if="currentIndex === index" 
                 class="absolute inset-0 rounded-full custom-ping transition-all duration-150"
                 :class="isDarkMode ? 'bg-cyan-400/30' : 'bg-blue-500/30'">
            </div>
          </button>
        </div>
      </div>

      <!-- Título "Empresas que Confían en ENSEA" - EN UN RENGLÓN CON TAMAÑO REDUCIDO -->
      <div class="text-center w-full flex flex-col items-center mt-4 md:mt-5 animate-fadeInUp transition-all duration-150" style="animation-delay: 250ms">
        <!-- TÍTULO EN UN SOLO RENGLÓN CON TAMAÑO REDUCIDO EN MÓVIL -->
        <h3 class="text-lg sm:text-xl md:text-3xl lg:text-4xl font-black mb-4 md:mb-6 text-center w-full whitespace-nowrap overflow-hidden text-ellipsis px-4 md:px-0">
          <span class="relative inline-block">
            <div class="relative pb-1">
              <div 
                class="bg-clip-text text-transparent leading-tight transition-all duration-150"
                :class="isDarkMode 
                  ? 'bg-gradient-to-r from-white via-cyan-200 to-blue-100' 
                  : 'bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700'">
                Empresas que Confían en ENSEA
              </div>
            </div>
            
            <!-- Subrayado para esta sección -->
            <div 
              class="absolute -bottom-1 left-1/4 right-1/4 h-0.5 rounded-full opacity-60 mt-0.5 transition-all duration-150"
              :class="isDarkMode 
                ? 'bg-gradient-to-r from-cyan-400 to-blue-300' 
                : 'bg-gradient-to-r from-blue-500 to-blue-400'">
            </div>
          </span>
        </h3>
        
        <!-- Grid de logos de clientes - IMÁGENES AUMENTADAS 50% EN MÓVIL -->
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-4 items-center justify-items-center w-full max-w-4xl mx-auto">
          <div v-for="(client, index) in clients" :key="index" 
               class="group relative w-full">
            
            <!-- Logo Card -->
            <div class="relative backdrop-blur-xl rounded-lg border p-1 md:p-0.5 transition-all duration-150 transform group-hover:-translate-y-0.5 group-hover:scale-105 shadow-md hover:shadow-glow overflow-hidden h-full"
                 :class="isDarkMode 
                   ? 'bg-gradient-to-br from-blue-700/40 via-indigo-800/50 to-blue-900/40 border-cyan-400/40 hover:border-cyan-300/50 hover:shadow-glow' 
                   : 'bg-gradient-to-br from-blue-50/80 via-blue-100/70 to-blue-200/60 border-blue-400/50 hover:border-blue-500/60 hover:shadow-glow'">
              
              <!-- Logo Container -->
              <div class="p-3 md:p-5 flex flex-col items-center justify-center h-full relative z-10">
                <!-- Contenedor de imagen del logo - AUMENTADO 50% EN MÓVIL -->
                <div class="relative w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-lg overflow-hidden mb-2 md:mb-3 transform transition-all duration-150 group-hover:scale-110 bg-white p-1 md:p-2 shadow-inner">
                  <img 
                    :src="client.logo" 
                    :alt="client.name"
                    class="w-full h-full object-contain p-1"
                  />
                  <!-- Brillo interior del cuadrado blanco -->
                  <div class="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                </div>
                
                <!-- Nombre de la empresa -->
                <span class="text-xs md:text-sm font-medium text-center transition-colors duration-150 line-clamp-2"
                      :class="isDarkMode ? 'text-white/90 font-semibold' : 'text-blue-800/90'">
                  {{ client.name }}
                </span>
              </div>
              
              <!-- Efecto de borde brillante al hover -->
              <div class="absolute inset-0 rounded-lg border-2 opacity-0 group-hover:opacity-60 transition-opacity duration-300"
                   :class="isDarkMode ? 'border-cyan-400/60' : 'border-blue-500/60'"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Nota adicional -->
      <div class="text-center mt-6 md:mt-8 max-w-2xl mx-auto px-4 animate-fadeInUp transition-all duration-150" style="animation-delay: 300ms">
        <div class="relative backdrop-blur-sm border rounded-lg p-4 md:p-5 shadow-lg transform transition-all duration-150 hover:scale-102 w-full flex flex-col items-center justify-center group"
             :class="isDarkMode 
               ? 'bg-blue-900/20 border-blue-400/15 shadow-blue-500/10 hover:border-blue-300/30' 
               : 'bg-blue-50/20 border-blue-300/15 shadow-blue-400/10 hover:border-blue-400/30'">
          
          <h3 
            class="text-lg md:text-xl font-black mb-3 text-center w-full bg-clip-text text-transparent px-4 transition-all duration-150"
            :class="isDarkMode 
              ? 'bg-gradient-to-r from-white via-blue-100 to-blue-200' 
              : 'bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700'"
          >
            ¿Quieres ser nuestro próximo caso de éxito?
          </h3>
          
          <p 
            class="text-sm md:text-base mb-4 max-w-lg text-center transition-colors duration-150"
            :class="isDarkMode ? 'text-white/90' : 'text-blue-900/90'"
          >
            Únete a las empresas que ya transformaron su presencia digital.
          </p>
          
          <!-- Botón CTA (IGUAL A LOS BOTONES DEL INICIO) -->
          <div class="flex justify-center w-full transition-all duration-150">
            <button 
              @click="scrollToSection('contacto')"
              class="group/btn relative text-white font-bold py-2.5 px-6 rounded-xl transition-all duration-150 transform hover:scale-105 hover:-translate-y-0.5 shadow-lg hover:shadow-glow-hover text-sm md:text-base overflow-hidden"
              :class="isDarkMode 
                ? 'bg-gradient-to-r from-blue-600 via-cyan-700 to-indigo-800 hover:from-blue-700 hover:via-cyan-800 hover:to-indigo-900' 
                : 'bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 hover:from-blue-700 hover:via-blue-800 hover:to-blue-900'">
              
              <!-- Efecto de brillo al hover -->
              <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-300"></div>
              
              <span class="flex items-center justify-center relative transition-all duration-150">
                Contáctanos ahora
                <span class="ml-2 text-lg animate-bounce-fast"
                      :style="isTransitioning ? { transform: 'scale(1.1)' } : {}">→</span>
              </span>
            </button>
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

// Imágenes del carrusel
const images = [
  {
    image: '/assets/ensea1.png',
    title: 'ENSEA - Plataforma Educativa',
    description: 'Rediseño completo de la Plataforma Web con Panel de Administrador y contenido autogestionable',
  },
  {
    image: '/assets/ensea2.png',
    title: 'ENSEA - Niveles de Cursos',
    description: 'Niveles de complejidad',
  },
  {
    image: '/assets/ensea3.png',
    title: 'ENSEA - Alianzas Comerciales',
    description: 'Empresas asociadas con ENSEA',
  },
  {
    image: '/assets/ensea4.png',
    title: 'ENSEA - Libro',
    description: 'Promoción',
  },
  {
    image: '/assets/ensea5.png',
    title: 'ENSEA - Nosotros',
    description: 'Información personal',
  },
  {
    image: '/assets/ensea6.png',
    title: 'ENSEA - Login Plataforma Educativa',
    description: 'Incio de sesión con usuario y contraseña',
  },
  {
    image: '/assets/ensea7.png',
    title: 'ENSEA - Plataforma de Estudiantes',
    description: 'Panel inicial de estudiantes',
  },
  {
    image: '/assets/ensea8.png',
    title: 'ENSEA - Catálogo de Cursos',
    description: 'Aquí se compran los cursos, especializaciones y tutorías',
  },
  {
    image: '/assets/ensea9.png',
    title: 'ENSEA - Comunidad',
    description: 'Redes sociales de la ONG',
  },
  {
    image: '/assets/ensea10.png',
    title: 'ENSEA - Listado de Clases',
    description: 'Los cursos están organizados en clases',
  },
  {
    image: '/assets/ensea11.png',
    title: 'ENSEA - Videos de Clases',
    description: 'Las clases contienen videos ilimitados.',
  },
  {
    image: '/assets/ensea12.png',
    title: 'ENSEA - Listado de Cursos Comprados',
    description: 'Cada estudiante tiene acceso a los cursos comprados',
  },
  {
    image: '/assets/ensea13.png',
    title: 'ENSEA - Clase Video + Imágenes',
    description: 'Videos e imágenes en todas las clases.',
  },
  {
    image: '/assets/ensea14.png',
    title: 'ENSEA - Imágenes de Clases',
    description: 'Las clases contienen imágenes ilimitadas',
  }
];

// Logos de clientes
const clients = [
  {
    logo: '/assets/ATE.png',
    name: 'ATE'
  },
  {
    logo: '/assets/Carrefour.png',
    name: 'Carrefour'
  },
  {
    logo: '/assets/Disney.png',
    name: 'Disney'
  },
  {
    logo: '/assets/Makro.png',
    name: 'Makro'
  },
  {
    logo: '/assets/SAC.png',
    name: 'SAC'
  },
  {
    logo: '/assets/Swiss Medical.png',
    name: 'Swiss Medical'
  },
  {
    logo: '/assets/Trenes Argentinos.png',
    name: 'Trenes Argentinos'
  },
  {
    logo: '/assets/Adidas.png',
    name: 'Adidas'
  }
];

const currentIndex = ref(0);
const isAnimating = ref(false);
const autoRotateInterval = ref(null);

// Computed properties para el carrusel
const currentImage = computed(() => images[currentIndex.value]);
const prevImage = computed(() => {
  const prevIndex = (currentIndex.value - 1 + images.length) % images.length;
  return images[prevIndex];
});
const nextImage = computed(() => {
  const nextIndex = (currentIndex.value + 1) % images.length;
  return images[nextIndex];
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
  const nextIndex = (currentIndex.value + 1) % images.length;
  navigateToSlide(nextIndex);
};

const prevSlide = () => {
  const prevIndex = (currentIndex.value - 1 + images.length) % images.length;
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
  const carouselContainer = document.querySelector('#testimonios');
  if (carouselContainer) {
    carouselContainer.addEventListener('click', handleInteraction);
    carouselContainer.addEventListener('touchstart', handleInteraction);
  }
});

onUnmounted(() => {
  stopAutoRotate();
  const carouselContainer = document.querySelector('#testimonios');
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

.hover\:shadow-glow-hover:hover {
  box-shadow: 0 0 25px rgba(34, 211, 238, 0.4);
}

/* *********************************************************** */
/* MODIFICACIONES ESPECÍFICAS PARA MÓVIL - SOLO EN ESTA SECCIÓN */
/* *********************************************************** */

@media (max-width: 768px) {
  /* 1. BOTÓN DE TEMAS CON MÁS ESPACIO A LA DERECHA */
  .mr-2 {
    margin-right: 0.5rem !important;
  }
  
  .theme-switch-premium {
    width: 40px !important;
    height: 40px !important;
  }
  
  .theme-switch-premium > div:first-child {
    width: 32px !important;
    height: 32px !important;
  }
  
  .absolute.left-2 {
    left: 8px !important;
  }
  
  .absolute.right-2 {
    right: 8px !important;
  }
  
  .absolute.-bottom-4 {
    display: none !important;
  }
  
  .absolute.-bottom-6 {
    display: none !important;
  }
  
  /* 2. CARRUSEL CON MÁS ALTURA, MENOS ANCHO Y ESPACIO A LOS COSTADOS */
  .h-\[450px\] {
    height: 380px !important;
  }
  
  .w-\[calc\(100\%-20px\)\] {
    width: calc(100% - 20px) !important;
  }
  
  .h-\[400px\] {
    height: 350px !important;
  }
  
  .h-\[270px\] {
    height: 240px !important;
  }
  
  .h-\[130px\] {
    height: 110px !important;
    min-height: 110px !important;
  }
  
  .px-3 {
    padding-left: 0.75rem !important;
    padding-right: 0.75rem !important;
  }
  
  /* 3. TÍTULO "Empresas que Confían en ENSEA" CON TAMAÑO REDUCIDO */
  .text-lg {
    font-size: 1.125rem !important;
  }
  
  .sm\:text-xl {
    font-size: 1.25rem !important;
  }
  
  .px-4 {
    padding-left: 1rem !important;
    padding-right: 1rem !important;
  }
  
  .whitespace-nowrap {
    white-space: nowrap !important;
  }
  
  .overflow-hidden {
    overflow: hidden !important;
  }
  
  .text-ellipsis {
    text-overflow: ellipsis !important;
  }
  
  /* 4. IMÁGENES DE EMPRESAS (MANTIENE TAMAÑO AUMENTADO) */
  .w-20, .h-20 {
    width: 5rem !important;
    height: 5rem !important;
  }
  
  .md\:w-24, .md\:h-24 {
    width: 3.5rem !important;
    height: 3.5rem !important;
  }
  
  .lg\:w-28, .lg\:h-28 {
    width: 4rem !important;
    height: 4rem !important;
  }
  
  .p-3 {
    padding: 0.75rem !important;
  }
  
  .gap-4 {
    gap: 1rem !important;
  }
  
  /* Ajustes adicionales existentes */
  .h-\[500px\] {
    height: 420px;
  }
  
  .h-\[550px\] {
    height: 450px;
  }
  
  .md\:w-\[600px\] {
    width: 90vw;
  }
  
  .md\:h-\[300px\] {
    height: 220px;
  }
  
  .md\:h-\[150px\] {
    height: 130px;
  }
  
  .w-\[260px\] {
    width: 35vw;
  }
  
  .h-\[390px\] {
    height: 300px;
  }
  
  .h-\[260px\] {
    height: 200px;
  }
  
  .h-\[130px\] {
    height: 100px;
  }
  
  /* Flechas ocultas en móvil */
  .hidden.md\:flex {
    display: none !important;
  }
  
  /* Imágenes laterales ocultas en móvil */
  .hidden.md\:block {
    display: none !important;
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
  /* 1. BOTÓN DE TEMAS CON MÁS ESPACIO EN MÓVILES PEQUEÑOS */
  .mr-2 {
    margin-right: 0.625rem !important;
  }
  
  .theme-switch-premium {
    width: 44px !important;
    height: 44px !important;
  }
  
  .theme-switch-premium > div:first-child {
    width: 34px !important;
    height: 34px !important;
  }
  
  .absolute.left-2 {
    left: 9px !important;
  }
  
  .absolute.right-2 {
    right: 9px !important;
  }
  
  /* 2. CARRUSEL AÚN MÁS OPTIMIZADO PARA MÓVILES PEQUEÑOS */
  .h-\[450px\] {
    height: 340px !important;
  }
  
  .h-\[400px\] {
    height: 310px !important;
  }
  
  .h-\[270px\] {
    height: 220px !important;
  }
  
  .h-\[130px\] {
    height: 90px !important;
    min-height: 90px !important;
  }
  
  /* Más espacio a los costados en móviles pequeños */
  .px-3 {
    padding-left: 1rem !important;
    padding-right: 1rem !important;
  }
  
  /* 3. TÍTULO MÁS PEQUEÑO EN MÓVILES PEQUEÑOS */
  .text-lg {
    font-size: 1rem !important;
  }
  
  .sm\:text-xl {
    font-size: 1.125rem !important;
  }
  
  /* Ajuste de padding para mejor visualización */
  .px-4 {
    padding-left: 0.75rem !important;
    padding-right: 0.75rem !important;
  }
  
  /* 4. IMÁGENES DE EMPRESAS AÚN MÁS AUMENTADAS EN MÓVILES PEQUEÑOS */
  .w-20, .h-20 {
    width: 4.5rem !important;
    height: 4.5rem !important;
  }
  
  /* Reducir padding para logos más grandes */
  .p-3 {
    padding: 0.5rem !important;
  }
  
  /* Ajustes adicionales existentes */
  .h-\[500px\] {
    height: 380px;
  }
  
  .h-\[550px\] {
    height: 400px;
  }
  
  .w-\[600px\] {
    width: 95vw;
  }
  
  .h-\[450px\] {
    height: 300px;
  }
  
  .h-\[300px\] {
    height: 190px;
  }
  
  .h-\[150px\] {
    height: 110px;
  }
  
  .w-\[260px\] {
    width: 30vw;
  }
  
  .h-\[390px\] {
    height: 260px;
  }
  
  .h-\[260px\] {
    height: 170px;
  }
  
  .h-\[130px\] {
    height: 90px;
  }
  
  /* Textos más pequeños */
  .text-xl {
    font-size: 1.125rem;
  }
  
  .text-lg {
    font-size: 1rem;
  }
  
  .text-base {
    font-size: 0.9rem;
  }
  
  /* Logos en 2 columnas */
  .grid-cols-2 {
    grid-template-columns: repeat(2, 1fr);
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
#testimonios > div:first-child {
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

/* Utilidades de escalado */
.hover\:scale-102:hover {
  transform: scale(1.02);
}
</style>