<template>
  <nav class="navbar navbar-expand-lg navbar-light"
  :class="{ 'changeNav': scroll }">
    <div class="container">
      <a class="navbar-brand" href="#">Taiwan</a>
      <button
        class="btn d-lg-none"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#mainNav"
        aria-controls="mainNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="mainNav">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/Spots" class="nav-link" @click="emitCategory(true)">
              景點
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/Hotels" class="nav-link" @click="emitCategory(false)">
              住宿
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import emitter from '@/methods/Emitter';

export default {
  data() {
    return {
      scroll: '',
    };
  },
  methods: {
    emitCategory(isSpots) {
      emitter.emit('emit-category', isSpots);
    },
  },
  mounted() {
    window.addEventListener('scroll', () => {
      this.scroll = document.documentElement.scrollTop > 40;
    });
  },
  unmounted() {
    window.removeEventListener('scroll', () => {
      this.scroll = document.documentElement.scrollTop > 40;
    });
  },
};
</script>
