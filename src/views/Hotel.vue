<template>
  hotel
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      id: this.$route.params.id,
      category: this.$route.name,
    };
  },
  methods: {
    getDetail() {
      this.$store.dispatch('getDetail', { category: this.category, id: this.id });
    },
  },
  computed: {
    ...mapGetters(['detail']),
  },
  created() {
    this.getDetail();
  },
};
</script>
