<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container">
      <a class="navbar-brand" href="#">Taiwan</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
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
  methods: {
    emitCategory(isSpots) {
      emitter.emit('emit-category', isSpots);
    },
  },
};
</script>
