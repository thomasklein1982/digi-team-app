<template>
  <Card style="margin-bottom: 0.5rem">
    <template #title>{{ title }}</template>
    <template #content>
      <span v-if="activity.start" v-html="activity.start"></span>
      <Panel header="Material">
        <span v-if="activity.material" v-html="activity.material"></span>
        <template v-else>
          Kein besonderes Material nötig.
        </template>
      </Panel>
      <Panel header="Vorbereitung">
        <span v-if="activity.vorbereitung" v-html="activity.vorbereitung"></span>
        Die Übung erklären.
      </Panel>
      <Panel header="Ablauf" v-if="activity.ablauf">
        <ol style="margin: 0">
          <li v-for="(p,i) in activity.ablauf" v-html="p"></li>
        </ol>
      </Panel>
      <Panel header="Varianten" v-if="activity.varianten">
        <span v-html="activity.varianten"></span>
      </Panel>
    </template>
  </Card>
</template>

<script>
import { Card, Panel } from 'primevue';

export default{
  components: {
    Card, Panel
  },
  props: {
    activity: Object,
    number: Number
  },
  computed: {
    title(){
      return "#"+this.number+": "+this.activity.name;
    }
  }
}
</script>