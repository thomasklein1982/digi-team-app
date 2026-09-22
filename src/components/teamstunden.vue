<template>
  <Screen title="Teamstunden" :sub-path="subPath">
    <template v-for="(t,i) in teamstunden">
      <Card v-if="!subPath" style="margin-bottom: 0.5rem">
        <template #title>#{{i+1}} {{ t.name }}</template>
        <template #content>
          <span v-html="t.beschreibung"></span>
          <Button as="a" :href="'#/teamstunden/'+t.id">Starten</Button>
        </template>
      </Card>
      <Teamstunde v-else-if="t.id===subPath" :teamstunde="teamstunde" :number="i+1"/>
    </template>
  </Screen>
</template>

<script>
import { Button, Card } from 'primevue';
import { teamstunden } from '../data';
import Screen from './screen.vue';
import Teamstunde from './teamstunde.vue';

export default{
  components: {
    Screen, Teamstunde, Card, Button
  },
  props: {
    subPath: {
      type: String,
      default: null
    }
  },
  data(){
    return {
      teamstunden
    }
  },
  computed: {
    teamstunde(){
      for(let i=0;i<teamstunden.length;i++){
        let t=teamstunden[i];
        if(t.id===this.subPath) return t;
      }
      return null;
    }
  }
}
</script>