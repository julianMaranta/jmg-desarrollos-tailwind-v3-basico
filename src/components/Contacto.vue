<template>
  <section 
    id="contacto" 
    class="min-h-auto w-full bg-white relative overflow-hidden flex items-center justify-center py-6 md:py-8"
  >
    <!-- Contenedor Principal -->
    <div class="w-full max-w-6xl mx-auto px-4 md:px-6 text-center relative z-10 py-6 md:py-8 flex flex-col items-center">
      
      <!-- Contenedor para badge -->
      <div class="relative w-full mb-1 md:mb-6">
        <!-- Badge -->
        <div class="inline-flex items-center bg-blue-50 rounded-full px-4 py-1.5 mb-2 border border-blue-200">
          <div class="w-2 h-2 rounded-full mr-2 bg-blue-500"></div>
          <span class="text-xs font-bold tracking-wider text-blue-800">📞 CONTACTO</span>
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
                <!-- Línea única -->
                <div class="text-blue-900 leading-tight">
                  Comencemos Hoy
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
              Contáctanos <span class="text-blue-900">y recibe</span> 
               una <span class="text-blue-700 font-bold">
                cotización gratuita
              </span>
            </p>
          </div>
        </div>

        <!-- Contenido Principal -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-3 md:gap-4 w-full max-w-6xl mx-auto px-4">
          
          <!-- WhatsApp Box -->
          <div 
            class="bg-green-50 rounded-lg border border-green-300 p-4 md:p-5 w-full flex flex-col items-center justify-center min-h-[300px]"
          >
            <!-- WhatsApp Logo -->
            <div class="mb-3 md:mb-4">
              <img 
                src="/assets/whatsapp-logo1.png" 
                alt="WhatsApp" 
                class="w-16 h-16 md:w-20 md:h-20 object-contain"
              />
            </div>
            
            <!-- Título WhatsApp -->
            <h3 class="text-lg md:text-xl font-bold mb-2 text-center w-full text-green-900">
              WhatsApp Directo
            </h3>
            
            <!-- Descripción -->
            <p class="mb-3 md:mb-4 text-center w-full max-w-md mx-auto text-xs md:text-sm text-green-900 px-2">
              <span class="text-green-800 font-semibold">Respuesta en menos de 24 HS</span> y atención personalizada
            </p>
            
            <!-- Botón de WhatsApp -->
            <a 
              href="https://wa.me/5492212222358" 
              target="_blank"
              @click="openWhatsApp"
              class="relative bg-green-600 text-white font-bold py-2.5 md:py-3 px-6 md:px-8 rounded-lg hover:bg-green-700 text-base md:text-lg w-full max-w-xs"
            >
              <span class="flex items-center justify-center">
                <img 
                  src="/assets/whatsapp-logo1.png" 
                  alt="WhatsApp" 
                  class="w-5 h-5 md:w-6 md:h-6 mr-2 object-contain"
                />
                Chatear Ahora
              </span>
            </a>
            
            <!-- Información adicional -->
            <div class="mt-3 md:mt-4 pt-3 md:pt-4 border-t w-full max-w-sm border-green-300">
              <div class="flex justify-center space-x-4 md:space-x-6">
                <div class="text-center">
                  <div class="text-base md:text-lg text-green-700">
                    <span class="text-xl">⚡</span>
                  </div>
                  <p class="text-xs mt-0.5 text-green-800">
                    Rápido
                  </p>
                </div>
                <div class="text-center">
                  <div class="text-base md:text-lg text-green-700">
                    <span class="text-xl">💬</span>
                  </div>
                  <p class="text-xs mt-0.5 text-green-800">
                    Consultas Gratis
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Contact Information -->
          <div class="flex flex-col justify-center items-start w-full">
            <!-- Contact Methods -->
            <div class="space-y-3 w-full">
              <!-- Phone -->
              <div class="flex items-start w-full">
                <div class="w-12 h-12 rounded-lg flex items-center justify-center mr-4 bg-blue-600">
                  <span class="text-xl">📞</span>
                </div>
                <div class="flex-1 text-left">
                  <h4 class="text-base md:text-lg font-bold mb-1 text-blue-900">
                    Teléfono
                  </h4>
                  <p class="text-sm md:text-base font-semibold text-blue-700">
                    +54 9 221 222-2358
                  </p>
                  <p class="text-xs mt-0.5 text-blue-900">
                    Lunes a Viernes 9:00 - 18:00
                  </p>
                </div>
              </div>
              
              <!-- Email -->
              <div class="flex items-start w-full">
                <div class="w-12 h-12 rounded-lg flex items-center justify-center mr-4 bg-blue-700">
                  <span class="text-xl">✉️</span>
                </div>
                <div class="flex-1 text-left">
                  <h4 class="text-base md:text-lg font-bold mb-1 text-blue-900">
                    Email
                  </h4>
                  <p class="text-sm md:text-base font-semibold text-blue-700">
                    jmgdesarrollos@gmail.com
                  </p>
                  <p class="text-xs mt-0.5 text-blue-900">
                    Respondemos en menos de 24 horas
                  </p>
                </div>
              </div>
              
              <!-- Location -->
              <div class="flex items-start w-full">
                <div class="w-12 h-12 rounded-lg flex items-center justify-center mr-4 bg-blue-800">
                  <span class="text-xl">📍</span>
                </div>
                <div class="flex-1 text-left">
                  <h4 class="text-base md:text-lg font-bold mb-1 text-blue-900">
                    Ubicación
                  </h4>
                  <p class="text-sm md:text-base font-semibold text-blue-700">
                    Buenos Aires, Argentina
                  </p>
                  <p class="text-xs mt-0.5 text-blue-900">
                    Trabajamos con clientes de todo el mundo
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Elemento decorativo final -->
        <div class="mt-4 md:mt-6">
          <div class="w-10 h-0.5 rounded-full mx-auto bg-blue-500"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// WhatsApp function
const openWhatsApp = () => {
  const message = encodeURIComponent('Hola, me gustaría solicitar información sobre sus servicios de desarrollo web.');
  window.open(`https://wa.me/5492212222358?text=${message}`, '_blank', 'noopener,noreferrer');
};
</script>

<style scoped>
/* Estilos responsive básicos */
@media (max-width: 768px) {
  .relative.w-full.mb-1 {
    margin-bottom: 0.25rem;
  }
  
  .min-h-\[300px\] {
    min-height: 280px;
  }
}

@media (max-width: 480px) {
  .min-h-\[300px\] {
    min-height: 260px;
  }
}
</style>