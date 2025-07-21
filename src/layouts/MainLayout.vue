<template>
  <q-layout view="lHh Lpr lF">
    <!-- Drawer -->
    <q-drawer v-model="drawer" :width="200" :breakpoint="600" bordered class="custom-drawer">
      <q-scroll-area class="fit">
        <q-list padding class="menu-list">
          <q-item clickable v-ripple @click="navigateTo('#home')">
            <q-item-section avatar>
              <q-icon name="home" />
            </q-item-section>
            <q-item-section>Home</q-item-section>
          </q-item>
          <q-item clickable v-ripple @click="navigateTo('#sobre')">
            <q-item-section avatar>
              <q-icon name="info" />
            </q-item-section>
            <q-item-section>Sobre</q-item-section>
          </q-item>
          <q-item clickable v-ripple @click="navigateTo('#projetos')">
            <q-item-section avatar>
              <q-icon name="folder" />
            </q-item-section>
            <q-item-section>Projetos</q-item-section>
          </q-item>
          <q-item clickable v-ripple @click="navigateTo('#contato')">
            <q-item-section avatar>
              <q-icon name="mail" />
            </q-item-section>
            <q-item-section>Contato</q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
    </q-drawer>
    <!-- HEADER -->
    <q-header elevated class="custom-header">
      <q-toolbar>
        <!-- Menu -->
        <q-btn class="menu-btn lt-md" flat round dense icon="menu" @click="drawer = !drawer" />
        <q-toolbar-title class="row justify-end items-center">
          <!-- LOGO -->
          <!-- LINKS -->
          <div class="q-gutter-sm gt-sm">
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
    <!-- FOOTER -->
    <q-footer elevated class="custom-footer q-pa-lg">
      <div class="custom-row-footer">
        <!-- 1° column -->
        <div class="column items-center">
          <div class="text-social" style="margin-bottom: 8px">Minhas Redes</div>
          <div class="row q-gutter-sm btn-style justify-center">
            <a href="#" target="_blank" class="social-link">
              <i class="fab fa-linkedin fa-md"></i>
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

        <div class="v-border q-my-md"></div>

        <!-- 2° column -->
        <div class="column items-center">
          <div class="text-social" style="margin-bottom: 8px">Entre em Contato</div>
          <div class="row q-gutter-sm btn-style justify-center">
            <a href="mailto:dugabrielle9@gmail.com" target="_blank" class="social-link">
              <i class="fa-regular fa-envelope fa-lg"></i>
              <span class="email-text text-bold">dugabrielle9@gmail.com</span>
            </a>
          </div>
        </div>
      </div>
      <!-- 3° column -->
      <div class="h-border"></div>
      <div class="text-social-bt">Copyright © 2025 - Todos os direitos reservados.</div>
    </q-footer>
  </q-layout>
</template>

<script setup>
import { stateTheme } from 'src/stores/theme'
import { computed } from 'vue'

import { ref } from 'vue'

const themeStore = stateTheme()

const themeMode = computed({
  get() {
    return themeStore.isDark
  },
  set(value) {
    return themeStore.setDark(value)
  },
})

const drawer = ref(false)
</script>
