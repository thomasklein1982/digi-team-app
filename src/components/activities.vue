<template>
  <Screen title="Activities" :sub-path="subPath">
    <p v-if="!subPath">Hier findet ihr eine Reihe von Übungen, mit denen ihr eure Teamstunden auflockern könnt.</p>
    Es lohnt sich immer, nach einer Übung darüber zu reflektieren:
      <ul>
        <li>Was hat euch an der Übung besonders gut gefallen?</li>
        <li>Würdet ihr die Übung gerne irgendwann noch einmal machen?</li>
        <li>Wie habt ihr euch während der Übung gefühlt?</li>
      </ul>
    
    <p>Jede Übung muss natürlich am Anfang erklärt werden.</p>
    <template v-for="(a,i) in activities">
      <Activity v-if="!subPath || a.id===subPath" :activity="a" :number="i+1"/>
    </template>
  </Screen>
</template>

<script>
import Activity from './activity.vue';
import Screen from './screen.vue';
import { activities } from '../data';

export default{
  components: {
    Screen, Activity
  },
  watch: {
    subPath(nv,ov){
      console.log("change",nv);
    }
  },
  props: {
    subPath: {
      type: String,
      default: null
    }
  },
  data(){
    return {
      activities
    }
  }
}
</script>