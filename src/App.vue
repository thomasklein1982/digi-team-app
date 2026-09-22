

<template>
  <component :is="currentView" :sub-path="subPath"/>
  <Navbar :current-path="currentPath"/>
</template>

<script>
import Activities from './components/activities.vue';
import Home from './components/home.vue';
import Navbar from './components/navbar.vue';
import Teamstunden from './components/teamstunden.vue';
import {version} from '../package.json';


const routes={
  '/': Home,
  '/teamstunden': Teamstunden,
  '/activities': Activities
};

function getPathAndSubPath(hash){
  hash=hash.slice(1) || "/";
  if(hash.length===1) return { path: hash, subPath: null};
  let s=hash.split("/");
  return {
    path: "/"+s[1], subPath: s[2]
  }
}

export default{
  components: {
    Navbar
  },
  computed: {
    currentView() {
      return routes[this.currentPath];
    }
  },
  data(){
    return {
      currentPath: window.location.hash,
      subPath: null,
      version
    }
  },
  mounted() {
    window.addEventListener('hashchange', () => {
      let ps=getPathAndSubPath(window.location.hash);
      this.currentPath = ps.path;
      this.subPath=ps.subPath;
    });
    let ps=getPathAndSubPath(window.location.hash);
    this.currentPath = ps.path;
    this.subPath=ps.subPath;
  }
};
</script>

<style scoped>

</style>
