<template>
  <Dock :model="items">
    <template #itemicon="{ item }">
      <a v-tooltip.top="item.label" :href="'#/'+item.url" class="link" :class="item.url===activeItem? 'active':''">
          <img class="icon" :alt="item.label" :src="'img/'+item.icon"/>
      </a>
    </template>
</Dock>
</template>

<script>
import { Dock } from 'primevue';

export default{
  components: {
    Dock
  },
  props: {
    currentPath: String
  },
  data(){
    return {
      items: [
        {
          label: "Home",
          icon: "home.svg",
          url: ""
        },
        {
          label: "Teamstunden",
          icon: "teamstunden.svg",
          url: "teamstunden"
        },
        {
          label: "Activities",
          icon: "activities.svg",
          url: "activities"
        }
      ]
    };
  },
  computed: {
    activeItem(){
      return this.currentPath.slice(1);
    }
  },
  methods: {
  }
}

</script>

<style scoped>
  .icon{
    width: 100%;
    border-radius: 0.5rem;
    aspect-ratio: 1;
    filter: brightness(0.6);
  }

  .active>img{
    filter: brightness(1.3);
  }
  .p-dock-item-content{
    border: 1pt solid darkblue;
  }
</style>