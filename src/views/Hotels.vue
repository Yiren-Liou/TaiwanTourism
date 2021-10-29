<template>
  <div class="container">
    <CardList :category="category"/>
  </div>
</template>

<script>
import CardList from '@/components/CardList.vue';

export default {
  data() {
    return {
      category: 'Hotel',
    };
  },
  components: {
    CardList,
  },
};
</script>
