<template>
  <q-layout view="lHh Lpr lF">
    <!-- HEADER -->
    <q-header elevated class="custom-header">
      <q-toolbar>
        <q-toolbar-title class="row justify-end items-center">
          <!-- LOGO -->
          <!-- LINKS -->
          <div class="q-gutter-sm">
            <q-btn flat dense label="Home" href="#home" />
            <q-btn flat dense label="Sobre" href="#sobre" />
            <q-btn flat dense label="Projetos" href="#projetos" />
            <q-btn flat dense label="Contato" href="#contato" />
          </div>

          <div class="q-pl-lg">
            <q-toggle
              size="xl"
              v-model="themeMode"
              checked-icon="sunny"
              unchecked-icon="dark_mode"
              color="accent"
            />
          </div>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <h2 class="text-center">teste</h2>
      <router-view />
    </q-page-container>
    <q-footer elevated class="custom-footer q-pa-lg">
      <div class="column items-start">
        <div class="text-social" style="margin-bottom: 8px">Minhas Redes</div>
        <div class="row q-gutter-sm btn-style">
          <a href="#" target="_blank" class="social-link">
            <i class="fab fa-linkedin fa-lg"></i>
          </a>
          <a href="#" target="_blank" class="social-link">
            <i class="fab fa-github fa-lg"></i>
          </a>
          <a href="#" target="_blank" class="social-link">
            <i class="fab fa-instagram fa-lg"></i>
          </a>
          <a href="#" target="_blank" class="social-link">
            <i class="fab fa-pinterest fa-lg"></i>
          </a>
        </div>
      </div>
    </q-footer>
  </q-layout>
</template>

<script setup>
import { stateTheme } from 'src/stores/theme'
import { computed } from 'vue'

const themeStore = stateTheme()

const themeMode = computed({
  get() {
    return themeStore.isDark
  },
  set(value) {
    return themeStore.setDark(value)
  },
})
</script>
