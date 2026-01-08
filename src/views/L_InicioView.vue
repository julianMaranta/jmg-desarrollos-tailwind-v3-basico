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
      class="bg-white text-gray-800 fixed w-full top-0 z-50 border-b border-gray-200 flex justify-center py-3"
    >
      <div class="w-full max-w-6xl mx-auto px-4">
        <div class="flex justify-between items-center">
          <!-- Logo -->
          <div class="flex items-center space-x-3 cursor-pointer" @click="scrollToSection('inicio')">
            <div class="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <span class="text-white font-bold text-sm">JMG</span>
            </div>
            <div class="text-center">
              <span class="text-lg font-bold text-blue-600">JMG Desarrollos</span>
            </div>
          </div>
          
          <!-- Desktop Menu -->
          <ul class="hidden md:flex space-x-6 items-center">
            <li 
              v-for="item in [
                { id: 'inicio', name: 'Inicio' },
                { id: 'servicios', name: 'Servicios' },
                { id: 'proceso', name: 'Proceso' },
                { id: 'por-que-elegirnos', name: 'Nosotros' }
              ]" 
              :key="item.id"
              @click="scrollToSection(item.id)"
              class="cursor-pointer"
            >
              <a class="font-semibold text-base px-2 py-1"
                 :class="activeSection === item.id ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'">
                {{ item.name }}
              </a>
            </li>
            <li 
              @click="scrollToSection('contacto')" 
              class="cursor-pointer bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold"
            >
              <span class="text-sm">Contacto</span>
            </li>
          </ul>

          <!-- Mobile Menu Button -->
          <button 
            @click="toggleMenu" 
            class="md:hidden flex flex-col justify-center items-center w-8 h-8 cursor-pointer relative z-60 bg-blue-600 rounded-md"
            aria-label="Menú"
          >
            <span class="w-5 h-0.5 bg-white mb-1 rounded" 
                  :class="{ 'rotate-45 translate-y-1': isMenuOpen }"></span>
            <span class="w-5 h-0.5 bg-white mb-1 rounded" 
                  :class="{ 'opacity-0': isMenuOpen }"></span>
            <span class="w-5 h-0.5 bg-white rounded" 
                  :class="{ '-rotate-45 -translate-y-1': isMenuOpen }"></span>
          </button>
        </div>

        <!-- Mobile Menu -->
        <div 
          v-if="isMobile && isMenuOpen" 
          class="md:hidden bg-white border-t border-gray-200 py-4 mt-1 rounded-b-xl"
        >
          <ul class="space-y-2">
            <li 
              v-for="item in [
                { id: 'inicio', name: 'Inicio' },
                { id: 'servicios', name: 'Servicios' },
                { id: 'proceso', name: 'Proceso' },
                { id: 'por-que-elegirnos', name: 'Nosotros' }
              ]" 
              :key="item.id"
              @click="scrollToSection(item.id)"
              class="cursor-pointer py-3 px-4"
              :class="activeSection === item.id ? 'bg-blue-50 text-blue-600' : 'text-gray-600'"
            >
              <a class="font-semibold text-base flex items-center justify-center">
                {{ item.name }}
              </a>
            </li>
            <li 
              @click="scrollToSection('contacto')" 
              class="cursor-pointer bg-blue-600 text-white px-6 py-3 rounded-md font-semibold mt-2 text-center text-sm"
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
        class="w-12 h-12 rounded-lg shadow flex items-center justify-center bg-transparent"
        aria-label="WhatsApp"
      >
        <img 
          src="/assets/whatsapp-logo.png" 
          alt="WhatsApp" 
          class="w-11 h-11 object-contain"
        />
      </a>
      
      <!-- Scroll to Top -->
      <button 
        @click="scrollToSection('inicio')"
        class="w-12 h-12 bg-blue-600 text-white rounded-lg shadow flex items-center justify-center"
        aria-label="Volver arriba"
      >
        <span class="text-xl">↑</span>
      </button>
    </div>

    <!-- Footer -->
    <footer class="bg-blue-900 text-white py-8 w-full">
      <div class="w-full max-w-6xl mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-6 text-center md:text-left">
          <!-- Logo y Descripción -->
          <div class="flex flex-col items-center md:items-start">
            <div class="flex items-center space-x-3 justify-center md:justify-start mb-4 cursor-pointer" @click="scrollToSection('inicio')">
              <div class="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span class="text-white font-bold text-sm">JMG</span>
              </div>
              <span class="text-lg font-bold text-white">JMG Desarrollos</span>
            </div>
            <p class="text-gray-300 mb-4 max-w-xs text-center md:text-left text-sm">
              Creamos soluciones web innovadoras que impulsan el crecimiento de tu negocio
            </p>
            <p class="text-gray-400 text-xs text-center md:text-left">&copy; 2025 JMG Desarrollos. Todos los derechos reservados.</p>
          </div>
          
          <!-- Enlaces rápidos -->
          <div class="flex flex-col items-center md:items-start">
            <h3 class="text-base font-bold mb-4 text-white">Enlaces Rápidos</h3>
            <ul class="space-y-2">
              <li v-for="link in ['inicio', 'servicios', 'proceso', 'por-que-elegirnos']" :key="link">
                <a 
                  @click="scrollToSection(link)" 
                  class="text-gray-300 hover:text-white cursor-pointer text-sm"
                >
                  <span class="flex items-center justify-center md:justify-start">
                    {{ link.charAt(0).toUpperCase() + link.slice(1) }}
                  </span>
                </a>
              </li>
            </ul>
          </div>
          
          <!-- Contacto -->
          <div class="flex flex-col items-center md:items-start">
            <h3 class="text-base font-bold mb-4 text-white">Contacto</h3>
            <div class="space-y-2 text-gray-300 flex flex-col items-center md:items-start">
              <p class="flex items-center justify-center md:justify-start text-sm">
                <span class="w-5 h-5 bg-blue-700 rounded-full flex items-center justify-center mr-2 text-xs">📞</span>
                +54 9 221 222-2358
              </p>
              <p class="flex items-center justify-center md:justify-start text-sm">
                <span class="w-5 h-5 bg-blue-700 rounded-full flex items-center justify-center mr-2 text-xs">✉️</span>
                jmgdesarrollos@gmail.com
              </p>
              <p class="flex items-center justify-center md:justify-start text-sm">
                <span class="w-5 h-5 bg-blue-700 rounded-full flex items-center justify-center mr-2 text-xs">📍</span>
                Buenos Aires, Argentina
              </p>
            </div>
          </div>
          
          <!-- Redes sociales -->
          <div class="flex flex-col items-center md:items-start">
            <h3 class="text-base font-bold mb-4 text-white">Síguenos</h3>
            <div class="flex justify-center md:justify-start space-x-2">
              <!-- Instagram -->
              <a 
                href="https://www.instagram.com/jmg.desarrollos/" 
                class="w-10 h-10 bg-blue-700 rounded-lg flex items-center justify-center"
              >
                <img 
                  src="/assets/icono-instagram.png" 
                  alt="Instagram" 
                  class="w-5 h-5 object-contain"
                />
              </a>
              
              <!-- LinkedIn -->
              <a 
                href="https://www.linkedin.com/company/jmg-desarrollos" 
                class="w-10 h-10 bg-blue-700 rounded-lg flex items-center justify-center"
              >
                <img 
                  src="/assets/icono-linkedin.png" 
                  alt="LinkedIn" 
                  class="w-5 h-5 object-contain"
                />
              </a>
            </div>
          </div>
        </div>
        
        <!-- Divider -->
        <div class="border-t border-blue-700 mt-6 pt-4 text-center">
          <p class="text-gray-400 text-xs">
            Hecho con ❤️ por JMG Desarrollos - Transformando ideas en realidad digital
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>