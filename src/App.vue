<script setup lang="jsx">
import HelloWorld from './components/HelloWorld.vue'
import Table from './components/Table.vue'
import Calendar from "@toast-ui/react-calendar";


import { ref } from 'vue'
import { applyPureReactInVue, injectSyncUpdateForPureReactInVue } from 'veaury'
import ReactSimpleInput from "./react_app/Input";
injectSyncUpdateForPureReactInVue(ReactSimpleInput, {
  // The name of the hook function that determines the content update of the Input component
  onChange(args) {
    return {
      value: args.target.value
    }
  }
})

const SimpleInput = applyPureReactInVue(ReactSimpleInput)
const value = ref("");
const PureCalendar = applyPureReactInVue(Calendar);
</script>

<template>
  <main class="flex flex-col overflow-auto scroll-smooth">
    <SimpleInput :value="value" @change="value = $event.target.value" />
    <PureCalendar />
    <!-- <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" /> -->
    <Table />
  </main>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
