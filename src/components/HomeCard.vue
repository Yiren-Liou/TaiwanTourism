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
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ['filterData'],
};
</script>
