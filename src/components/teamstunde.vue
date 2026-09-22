<template>
  <Card style="margin-bottom: 0.5rem">
    <template #title>{{ title }}</template>
    <template #content>
      <span v-if="teamstunde.start" v-html="teamstunde.start"></span>
      <Panel header="Material">
        <span v-if="teamstunde.material" v-html="teamstunde.material"></span>
        <template v-else>
          Kein besonderes Material nötig.
        </template>
      </Panel>
      <Panel header="Beschreibung">
        <span v-if="teamstunde.beschreibung" v-html="teamstunde.beschreibung"></span>
      </Panel>
      <Panel header="Vorbereitung" v-if="teamstunde.vorbereitung">
        <span v-html="teamstunde.vorbereitung"></span>
      </Panel>
      <Panel header="Ablauf" v-if="teamstunde.ablauf">
        <template v-for="(p,i) in teamstunde.ablauf">
          <h3>{{ i+1 }}. {{ p.name }}</h3>
          <p v-html="p.beschreibung"></p>
          <ol>
            <li v-for="(u,j) in p.ablauf" v-html="u"></li>
          </ol>
        </template>
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
    teamstunde: Object,
    number: Number
  },
  computed: {
    title(){
      return "#"+this.number+" "+ this.teamstunde.name;
    }
  }
}
</script>