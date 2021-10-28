<template>
  <div class="fixNav">
    <Navbar/>
  </div>
  <BannerSwiper />
  <div class="main container mb-5">
    <div class="d-flex align-items-center mb-3">
      <i class="fas fa-map-marked-alt fa-2x text-primary me-2"></i>
      <h2 class="fs-3 fw-bold">台灣旅行行程推薦</h2>
    </div>
    <p class="mb-3">熱門打卡景點、自然系秘境，全台各地玩透透，周末假日和家人朋友一起出遊踏青囉 ! </p>
    <HomeCard :filterData="filterSpots" />
    <div class="d-flex align-items-center mb-3">
      <i class="fas fa-home fa-2x text-primary me-2"></i>
      <h2 class="fs-3 fw-bold">台灣旅行住宿推薦</h2>
    </div>
    <p class="mb-3">舒服的住宿空間消除一天的遊玩疲勞，隔天帶著好心情出發新的旅程 ! </p>
    <HomeCard :filterData="filterHotels" />
    <div class="row mb-4">
      <div class="col-md-6 bgContainer mb-3 mb-md-0">
        <router-link to="/Spots"
              class="d-center bg-center bg-cover position-relative rounded py-6 mb-4 h-100"
          :style="
            {backgroundImage: 'url('+ spotImg +')'}
          ">
          <div class="bgImg">
            <p class="bgText text-light fs-2">瀏覽全台灣景點</p>
          </div>
        </router-link>
      </div>
      <div class="col-md-6 bgContainer">
        <router-link to="/Spots"
              class="d-center bg-center bg-cover position-relative rounded py-6 mb-4 h-100"
          :style="
            {backgroundImage: 'url('+ roomImg +')'}
          ">
          <div class="bgImg rounded">
            <p class="bgText text-light fs-2">瀏覽全台灣旅宿</p>
          </div>
        </router-link>
      </div>
    </div>
  </div>
  <GoTop />
  <Footer />
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import SpotImg from '@/assets/images/spotImg.jpg';
import RoomImg from '@/assets/images/roomImg.jpg';
import HomeCard from '@/components/HomeCard.vue';
import BannerSwiper from '@/components/BannerSwiper.vue';
import GoTop from '@/components/GoTop.vue';

export default {
  data() {
    return {
      spotImg: SpotImg,
      roomImg: RoomImg,
    };
  },
  components: {
    Navbar,
    Footer,
    BannerSwiper,
    HomeCard,
    GoTop,
  },
  computed: {
    ...mapGetters(['spotsList', 'hotelsList', 'filterSpots', 'filterHotels']),
  },
  methods: {
    ...mapActions(['init']),
  },
  created() {
    this.init();
  },
};
</script>
