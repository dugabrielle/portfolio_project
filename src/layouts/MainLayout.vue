<template>
  <q-layout view="lHh Lpr lFf">
    <!-- HEADER -->
    <q-header elevated class="custom-header ">
      <q-toolbar>
        <q-toolbar-title class="row justify-end items-center">
          <!-- LOGO -->
          <!-- LINKS -->
          <div class="q-gutter-sm">
            <q-btn flat dense label="Home" href="#home"/>
            <q-btn flat dense label="Sobre" href="#sobre" />
            <q-btn flat dense label="Projetos" href="#projetos"/>
            <q-btn flat dense label="Contato" href="#contato"/>
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
