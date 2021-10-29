<template>
  <div class="fixNav">
    <Navbar/>
  </div>
  <template v-if="isSpots">
      <div class="d-center bg-center bg-cover py-6 mb-4 mt-5"
      :style="
        {backgroundImage: 'url('+ spotImg +')'}
      ">
      <p class="py-6 fs-2 fw-bold text-light">說走就走的台灣旅行</p>
    </div>
  </template>
  <template v-else>
      <div class="d-center bg-center bg-cover py-6 mb-4 mt-5"
      :style="
        {backgroundImage: 'url('+ roomImg +')'}
      ">
      <p class="py-6 fs-2 fw-bold text-light">就像在自己家一樣的台灣旅店</p>
    </div>
  </template>
  <div class="main container">
    <div class="row">
      <div class="col-lg-2">
        <SubNav />
      </div>
      <div class="col-lg-10">
          <router-view />
      </div>
    </div>
  </div>
  <Footer />
</template>

<script>
import emitter from '@/methods/Emitter';
import collapseNav from '@/methods/collapseNav';
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import SubNav from '@/components/SubNav.vue';
import SpotImg from '@/assets/images/spotImg.jpg';
import RoomImg from '@/assets/images/roomImg.jpg';

export default {
  data() {
    return {
      isSpots: true,
      spotImg: SpotImg,
      roomImg: RoomImg,
    };
  },
  components: {
    Navbar,
    Footer,
    SubNav,
  },
  watch: {
    $route() {
      if (this.$route.path !== 'layout') {
        console.log('collapseNav');
        collapseNav();
      }
    },
  },
  mounted() {
    emitter.on('emit-category', (item) => {
      this.isSpots = item;
    });
  },
  unmounted() {
    emitter.off('emit-category');
  },
};
</script>
