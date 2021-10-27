<template>
  <div class="row mb-5">
    <div v-for="item in filterData" :key="item.id" class="col-md-6 col-lg-4 mb-3">
      <div class="card h-100 shadow-sm">
        <img :src="item.Picture.PictureUrl1" class="cardImg card-img-top img-fluid objectFit"
            :alt="item.Name" />
        <div class="card-body">
          <ul class="list-unstyled">
            <li class="d-flex mb-3">
              <span class="badge bg-secondary me-2">{{ item.Region }}</span>
              <span class="badge bg-secondary">{{ item.City }}</span>
            </li>
            <li class="mb-2">
              <h5 class="card-title fw-bold mb-0">{{ item.Name }}</h5>
            </li>
            <li class="mb-2">
              聯絡電話: {{ item.Phone }}
            </li>
            <li class="text-truncate">
              {{ item.Description }}
            </li>
          </ul>
        </div>
        <div v-if="item.WebsiteUrl" class="card-footer border-0 bg-transparent mb-2">
          <a :href="item.WebsiteUrl" target="_blank"
              class="btn btn-outline-primary rounded-pill w-100">
            前往網站
          </a>
        </div>
      </div>
    </div>
  </div>
  <div class="d-center flex-column mb-4">
    <Pagination :page="pagination" />
  </div>
</template>

<script>
import emitter from '@/methods/Emitter';
import NewPagination from '@/methods/newPagination';
import Pagination from '@/components/Pagination.vue';

export default {
  data() {
    return {
      dataList: '',
      filterData: '',
      tempData: '',
      pagination: '',
      routeName: this.$route.name,
      path: {
        region: '全部',
      },
    };
  },
  components: {
    Pagination,
  },
  computed: {
    spotsList() {
      return this.$store.getters.spotsList;
    },
    hotelsList() {
      return this.$store.getters.hotelsList;
    },
  },
  methods: {
    filterPages(page = 1) {
      const NewPage = NewPagination(page, this.tempData);
      this.pagination = NewPage.pages;
      this.filterData = NewPage.filterData;
      this.$router.push({ path: `/${this.routeName}`, query: { region: this.path.region, page } });
    },
    filterSpots(region) {
      this.path.region = region;
      this.tempData = this.dataList;
      if (region !== '全部') {
        const temp = this.tempData.filter((item) => item.Region === this.path.region);
        this.tempData = temp;
      }
      this.filterPages();
    },
    init() {
      if (this.routeName === 'Spots') {
        this.dataList = this.spotsList;
      } else if (this.routeName === 'Hotels') {
        this.dataList = this.hotelsList;
      }
      this.tempData = this.dataList;
      this.filterPages();
    },
  },
  mounted() {
    this.init();
    emitter.on('emit-page', (page) => {
      this.filterPages(page);
    });
    emitter.on('emit-region', (region) => {
      this.filterSpots(region);
    });
  },
  unmounted() {
    emitter.off('emit-page');
    emitter.off('emit-region');
  },
};
</script>
