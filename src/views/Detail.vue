<template>
  <div class="row mb-4">
    <div class="col-md-7 mb-4 mb-md-0">
      <img :src="detail[0].Picture.PictureUrl1" id="mainImage" class="mainImage objectFit mb-2"
      onerror="this.src='https://images.unsplash.com/photo-1623018035782-b269248df916?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'" />
      <div class="d-flex">
        <div class="w-50 me-1" v-if="detail[0].Picture.PictureUrl2">
          <img :src="detail[0].Picture.PictureUrl2"
            class="detailImg objectFit" @click="changeImg"
            onerror="this.src='https://images.unsplash.com/photo-1623018035782-b269248df916?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'" />
        </div>
        <div class="w-50 ms-1" v-if="detail[0].Picture.PictureUrl3">
          <img :src="detail[0].Picture.PictureUrl3"
            class="detailImg objectFit" @click="changeImg"
            onerror="this.src='https://images.unsplash.com/photo-1623018035782-b269248df916?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'" />
        </div>
      </div>
    </div>
    <div class="col-md-5">
      <ul class="list-unstyled mb-5">
        <li class="mb-2">
          <span class="badge text-primary border border-primary me-2">{{ detail[0].City }}</span>
          <span class="badge text-primary border border-primary">{{ detail[0].Class }}</span>
        </li>
        <li class="mb-3">
          <h2 class="fs-3 fw-bold">{{ detail[0].Name }}</h2>
        </li>
        <li class="d-flex align-items-center mb-2">
          <i class="fas fa-map-marker-alt me-2"></i>
          <p class="fs-md-5">{{ detail[0].Address }}</p>
        </li>
        <li class="d-flex align-items-center mb-2">
          <i class="fas fa-phone-alt me-2"></i>
          <a :href='`tel: +${detail[0].Phone}`' class="fs-md-5">{{ detail[0].Phone }}</a>
        </li>
        <li v-if="service !== 'underfined'" class="d-flex align-items-center flex-wrap mb-2">
          <span v-if="service.includes('餐廳')" class="me-2">
            <i class="fas fa-utensils me-1"></i>餐廳
          </span>
          <span v-if="service.includes('停車場')" class="me-2">
            <i class="fas fa-parking me-1"></i>停車場
          </span>
          <span v-if="service.includes('無線網路')" class="me-2">
            <i class="fas fa-wifi me-1"></i>無線網路
          </span>
          <span v-if="service.includes('接送')" class="me-2">
            <i class="fas fa-shipping-fast me-1">接送服務</i>
          </span>
          <span class="me-2">
            <i class="fas fa-hot-tub me-1" v-if="service.includes('溫泉')">溫泉</i>
          </span>
        </li>
      </ul>
      <template v-if="detail[0].WebsiteUrl" class="mb-2">
        <a :href="detail[0].WebsiteUrl" target="_blank"
            class="btn btn-primary text-light rounded w-100">
          前往網站
        </a>
      </template>
    </div>
  </div>
  <div class="mb-4">
    <p class="fs-md-5">{{ detail[0].Description }}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      id: this.$route.params.id,
      category: this.$route.name,
      service: '',
      parking: false,
    };
  },
  watch: {
    $route() {
      if (this.$route.name === this.category) {
        this.id = this.$route.params.id;
        this.getDetail();
      }
    },
  },
  methods: {
    getDetail() {
      this.$store.dispatch('getDetail', { category: this.category, id: this.id });
      if (this.detail[0].ServiceInfo) {
        this.service = this.detail[0].ServiceInfo;
      }
    },
    changeImg(e) {
      const clickImg = e.target.getAttribute('src');
      const mainImage = document.getElementById('mainImage');
      const mainImageSrc = mainImage.getAttribute('src');
      mainImage.setAttribute('src', clickImg);
      e.target.setAttribute('src', mainImageSrc);
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
