<template>
  <button
    class="topBtn btn rounded"
    :class="{ 'd-block': top }"
    @click="goTop"
  >
    <i class="fas fa-angle-up"></i>
  </button>
</template>

<script>
export default {
  data() {
    return {
      pageY: '',
    };
  },
  computed: {
    top() {
      let show = false;
      if (this.pageY > 200) {
        show = true;
      }
      return show;
    },
  },
  methods: {
    goTop() {
      window.scroll(0, 0);
    },
  },
  mounted() {
    window.addEventListener('scroll', () => {
      this.pageY = window.pageYOffset;
    });
  },
  unmounted() {
    window.removeEventListener('scroll', () => {
      this.pageY = window.pageYOffset;
    });
  },
};
</script>
