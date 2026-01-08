<script setup>
import HeaderInicio from "../components/HeaderInicio.vue";
import Listo from "../components/Listo.vue";
import NuestrosServicios from "../components/NuestrosServicios.vue";
import PorqueElegirnos from "../components/PorqueElegirnos.vue";
import ProcesoDesarrollo from "../components/ProcesoDesarrollo.vue";
import TestimoniosClientes from "../components/TestimoniosClientes.vue";
import Contacto from "../components/Contacto.vue";

import { ref, onMounted, onUnmounted } from 'vue';

const isMobile = ref(false);
const isMenuOpen = ref(false);
const isScrolled = ref(false);
const activeSection = ref('inicio');

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
    activeSection.value = sectionId;
  }
  isMenuOpen.value = false;
};

const checkMobile = () => {
  isMobile.value = window.innerWidth <= 768;
};

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
  
  // Update active section based on scroll position
  const sections = ['inicio', 'servicios', 'proceso', 'por-que-elegirnos', 'contacto'];
  const scrollPosition = window.scrollY + 100;
  
  for (const section of sections) {
    const element = document.getElementById(section);
    if (element) {
      const offsetTop = element.offsetTop;
      const offsetBottom = offsetTop + element.offsetHeight;
      
      if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
        activeSection.value = section;
        break;
      }
    }
  }
};

onMounted(() => {
  checkMobile();
  window.addEventListener('resize', checkMobile);
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('resize', checkMobile);
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <div class="min-h-screen bg-white overflow-hidden flex flex-col items-center">
    <!-- Navigation -->
    <nav 
      class="bg-white/95 backdrop-blur-xl text-gray-800 fixed w-full top-0 z-50 transition-all duration-500 border-b border-blue-200/50 flex justify-center"
      :class="isScrolled ? 'py-2 shadow-lg' : 'py-4'"
    >
      <div class="w-full max-w-6xl mx-auto px-4">
        <div class="flex justify-between items-center">
          <!-- Logo -->
          <div class="flex items-center space-x-4 group cursor-pointer" @click="scrollToSection('inicio')">
            <div class="w-11 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 shadow">
              <span class="text-white font-bold text-base">JMG</span>
            </div>
            <div class="text-center">
              <span class="text-lg font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">JMG Desarrollos</span>
              <div class="h-0.5 w-0 bg-gradient-to-r from-blue-600 to-blue-800 transition-all duration-500 group-hover:w-full mt-1 mx-auto"></div>
            </div>
          </div>
          
          <!-- Desktop Menu -->
          <ul class="hidden md:flex space-x-6 items-center">
            <li 
              v-for="item in [
                { id: 'inicio', name: 'Inicio' },
                { id: 'servicios', name: 'Servicios' },
                { id: 'proceso', name: 'Proceso' },
                { id: 'por-que-elegirnos', name: 'Nosostros' }
              ]" 
              :key="item.id"
              @click="scrollToSection(item.id)"
              class="cursor-pointer transition-all duration-500 relative group"
              :class="activeSection === item.id ? 'text-blue-600 scale-105' : 'text-gray-600 hover:text-blue-500'"
            >
              <a class="font-semibold text-base relative z-10 px-2 py-1">{{ item.name }}</a>
              <div 
                class="absolute -bottom-1 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full transition-all duration-500 origin-center"
                :class="activeSection === item.id ? 'w-full' : 'w-0 group-hover:w-full'"
              ></div>
              <div class="absolute inset-0 bg-blue-600/10 rounded-md scale-0 group-hover:scale-100 transition-transform duration-500"></div>
            </li>
            <li 
              @click="scrollToSection('contacto')" 
              class="cursor-pointer bg-gradient-to-r from-blue-600 to-blue-800 text-white hover:from-blue-700 hover:to-blue-900 px-8 py-2 rounded-lg transition-all duration-500 transform hover:scale-105 font-semibold shadow hover:shadow-md relative overflow-hidden group"
            >
              <span class="relative z-10 text-sm">Contacto</span>
              <div class="absolute inset-0 bg-white/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </li>
          </ul>

          <!-- Mobile Menu Button -->
          <button 
            @click="toggleMenu" 
            class="md:hidden flex flex-col justify-center items-center w-8 h-8 cursor-pointer relative z-60 bg-gradient-to-br from-blue-600 to-blue-800 rounded-md shadow"
            aria-label="Menú"
          >
            <span class="w-5 h-0.5 bg-white mb-1 rounded transition-all duration-500" 
                  :class="{ 'rotate-45 translate-y-1': isMenuOpen }"></span>
            <span class="w-5 h-0.5 bg-white mb-1 rounded transition-all duration-500" 
                  :class="{ 'opacity-0': isMenuOpen }"></span>
            <span class="w-5 h-0.5 bg-white rounded transition-all duration-500" 
                  :class="{ '-rotate-45 -translate-y-1': isMenuOpen }"></span>
          </button>
        </div>

        <!-- Mobile Menu -->
        <div 
          v-if="isMobile && isMenuOpen" 
          class="md:hidden bg-white/95 backdrop-blur-xl border-t border-blue-200/50 py-4 mt-1 rounded-b-xl shadow-lg text-center"
        >
          <ul class="space-y-3">
            <li 
              v-for="item in [
                { id: 'inicio', name: 'Inicio' },
                { id: 'servicios', name: 'Servicios' },
                { id: 'proceso', name: 'Proceso' },
                { id: 'por-que-elegirnos', name: 'Nosotros' }
              ]" 
              :key="item.id"
              @click="scrollToSection(item.id)"
              class="cursor-pointer transition-all duration-500 py-3 px-4 rounded-md mx-2"
              :class="activeSection === item.id ? 'bg-blue-600/10 text-blue-600 scale-105' : 'text-gray-600 hover:bg-blue-50'"
            >
              <a class="font-semibold text-base flex items-center justify-center">
                <div class="w-1.5 h-1.5 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full mr-3 transition-all duration-500" 
                     :class="activeSection === item.id ? 'scale-100' : 'scale-0'"></div>
                {{ item.name }}
              </a>
            </li>
            <li 
              @click="scrollToSection('contacto')" 
              class="cursor-pointer bg-gradient-to-r from-blue-600 to-blue-800 text-white hover:from-blue-700 hover:to-blue-900 px-6 py-3 rounded-md transition-all duration-500 transform hover:scale-105 font-semibold shadow mt-4 mx-2 text-center text-sm"
            >
              <a>Contacto</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <main class="pt-14 w-full flex flex-col items-center">
      <HeaderInicio />
      <NuestrosServicios />
      <ProcesoDesarrollo />
      
      <Listo />
      
      <PorqueElegirnos />
      <Contacto />
      
      
      
    </main>

    <!-- Floating Action Buttons -->
    <div class="fixed bottom-4 right-4 z-40 space-y-2">
      <!-- WhatsApp Button -->
      <a 
  href="https://wa.me/5492212222358" 
  target="_blank"
  class="w-12 h-12 rounded-lg shadow-lg flex items-center justify-center transition-all duration-500 transform hover:scale-110 hover:rotate-6 group overflow-hidden relative bg-transparent"
  aria-label="WhatsApp"
>
  <img 
    src="/assets/whatsapp-logo.png" 
    alt="WhatsApp" 
    class="w-11 h-11 object-contain transition-all duration-500 group-hover:scale-110"
    onerror="this.style.display='none'; this.parentNode.innerHTML='<span class=\'text-white font-bold text-base\'>WA</span>';"
  />
  <div class="absolute inset-0 bg-white/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-500"></div>
</a>
      
      <!-- Scroll to Top -->
      <button 
        @click="scrollToSection('inicio')"
        class="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white rounded-lg shadow-lg flex items-center justify-center transition-all duration-500 transform hover:scale-110 hover:-translate-y-0.5 group"
        aria-label="Volver arriba"
      >
        <span class="text-xl transform transition-transform duration-500 group-hover:-translate-y-0.5">↑</span>
        <div class="absolute inset-0 bg-white/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-500"></div>
      </button>
    </div>

    <!-- Footer -->
    <footer class="bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white py-8 w-full flex justify-center relative overflow-hidden">
      <!-- Background Elements -->
      <div class="absolute inset-0 overflow-hidden">
        <div class="absolute -top-10 -right-10 w-32 h-32 bg-blue-600/10 rounded-full animate-pulse" style="animation-duration: 4s"></div>
        <div class="absolute -bottom-10 -left-10 w-32 h-32 bg-blue-500/10 rounded-full animate-pulse" style="animation-duration: 6s"></div>
      </div>
      
      <div class="w-full max-w-6xl mx-auto px-4 relative z-10">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-6 text-center md:text-left">
          <!-- Logo y Descripción -->
          <div class="flex flex-col items-center md:items-start">
            <div class="flex items-center space-x-3 justify-center md:justify-start mb-4 group cursor-pointer" @click="scrollToSection('inicio')">
              <div class="w-11 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 shadow">
                <span class="text-white font-bold text-base">JMG</span>
              </div>
              <span class="text-lg font-bold bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">JMG Desarrollos</span>
            </div>
            <p class="text-gray-400 mb-4 max-w-xs text-center md:text-left leading-relaxed text-sm">
              Creamos soluciones web innovadoras que impulsan el crecimiento de tu negocio
            </p>
            <p class="text-gray-500 text-xs text-center md:text-left">&copy; 2025 JMG Desarrollos. Todos los derechos reservados.</p>
          </div>
          
          <!-- Enlaces rápidos -->
          <div class="flex flex-col items-center md:items-start">
            <h3 class="text-base font-bold mb-4 text-transparent bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text">Enlaces Rápidos</h3>
            <ul class="space-y-2">
              <li v-for="link in ['inicio', 'servicios', 'proceso', 'testimonios']" :key="link">
                <a 
                  @click="scrollToSection(link)" 
                  class="text-gray-400 hover:text-white transition-all duration-500 cursor-pointer transform hover:translate-x-1 inline-block group"
                >
                  <span class="flex items-center justify-center md:justify-start text-sm">
                    <div class="w-1 h-1 bg-gradient-to-r from-blue-400 to-blue-300 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                    {{ link.charAt(0).toUpperCase() + link.slice(1) }}
                  </span>
                </a>
              </li>
            </ul>
          </div>
          
          <!-- Contacto -->
          <div class="flex flex-col items-center md:items-start">
            <h3 class="text-base font-bold mb-4 text-transparent bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text">Contacto</h3>
            <div class="space-y-2 text-gray-400 flex flex-col items-center md:items-start">
              <p class="flex items-center transition-all duration-500 hover:text-white transform hover:translate-x-1 group justify-center md:justify-start text-sm">
                <span class="w-6 h-6 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center mr-2 group-hover:scale-110 transition-transform duration-500 text-xs">📞</span>
                +54 9 221 222-2358
              </p>
              <p class="flex items-center transition-all duration-500 hover:text-white transform hover:translate-x-1 group justify-center md:justify-start text-sm">
                <span class="w-6 h-6 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center mr-2 group-hover:scale-110 transition-transform duration-500 text-xs">✉️</span>
                jmgdesarrollos@gmail.com
              </p>
              <p class="flex items-center transition-all duration-500 hover:text-white transform hover:translate-x-1 group justify-center md:justify-start text-sm">
                <span class="w-6 h-6 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center mr-2 group-hover:scale-110 transition-transform duration-500 text-xs">📍</span>
                Buenos Aires, Argentina
              </p>
            </div>
          </div>
          
          <!-- Redes sociales con imágenes desde assets -->
          <div class="flex flex-col items-center md:items-start">
            <h3 class="text-base font-bold mb-4 text-transparent bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text">Síguenos</h3>
            <div class="flex justify-center md:justify-start space-x-3">
              <!-- Facebook 
              <a 
                href="#" 
                class="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center transition-all duration-500 transform hover:scale-110 hover:-translate-y-0.5 shadow-lg group overflow-hidden"
              >
                <img 
                  src="/assets/icono-facebook.png" 
                  alt="Facebook" 
                  class="w-6 h-6 object-contain transition-all duration-500 group-hover:scale-110"
                  onerror="this.style.display='none'; this.parentNode.innerHTML='<span class=\'text-white font-bold text-base\'>FB</span>';"
                />
                <div class="absolute inset-0 bg-white/10 rounded-xl scale-0 group-hover:scale-100 transition-transform duration-500"></div>
              </a> -->
              
              <!-- Instagram -->
              <a 
                href="https://www.instagram.com/jmg.desarrollos/" 
                class="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center transition-all duration-500 transform hover:scale-110 hover:-translate-y-0.5 shadow-lg group overflow-hidden"
              >
                <img 
                  src="/assets/icono-instagram.png" 
                  alt="Instagram" 
                  class="w-6 h-6 object-contain transition-all duration-500 group-hover:scale-110"
                  onerror="this.style.display='none'; this.parentNode.innerHTML='<span class=\'text-white font-bold text-base\'>IG</span>';"
                />
                <div class="absolute inset-0 bg-white/10 rounded-xl scale-0 group-hover:scale-100 transition-transform duration-500"></div>
              </a>
              
              <!-- LinkedIn -->
              <a 
                href="https://www.linkedin.com/company/jmg-desarrollos" 
                class="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center transition-all duration-500 transform hover:scale-110 hover:-translate-y-0.5 shadow-lg group overflow-hidden"
              >
                <img 
                  src="/assets/icono-linkedin.png" 
                  alt="LinkedIn" 
                  class="w-6 h-6 object-contain transition-all duration-500 group-hover:scale-110"
                  onerror="this.style.display='none'; this.parentNode.innerHTML='<span class=\'text-white font-bold text-base\'>IN</span>';"
                />
                <div class="absolute inset-0 bg-white/10 rounded-xl scale-0 group-hover:scale-100 transition-transform duration-500"></div>
              </a>
              
              
            </div>
          </div>
          </div>
        
        <!-- Divider -->
        <div class="border-t border-blue-700/50 mt-6 pt-4 text-center">
          <p class="text-gray-500 text-xs">
            Hecho con ❤️ por JMG Desarrollos - Transformando ideas en realidad digital
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>