<template>
  <div class="screen">
    <h1>{{ title }}</h1>
    <div style="position: fixed; right: 1rem; top: 0.5rem;"><Button  @click="back()" icon="pi pi-step-backward" label="Zurück"/><Button  @click="forward()" icon="pi pi-step-forward" label="Weiter"/>
      </div>
    <slot></slot>
    <div style="margin: 1cm"></div>
  </div>
</template>

<script>
import { Button } from 'primevue';

export default{
  components: {
    Button
  },
  props: {
    title: String,
    subPath: String
  },
  computed: {
    showBack(){
      return this.subPath!==null;
    }
  },
  methods: {
    back(){
      history.back();
      //window.location.hash="#"+this.$root.currentPath;
    },
    forward(){
      history.forward();
    }
  }
}
</script>

<style scoped>
  .screen{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: #2381c0ff;
    padding: 0.5rem;
    overflow: auto;
  }
</style>