<template>
  <div class="row mb-5">
    <div v-for="item in filterData" :key="item.ID" class="col-md-6 col-lg-4 mb-3">
      <router-link :to="{ path: `/${category}/${item.ID}`,
                            query: { region: item.Region,
                                    name : item.Name}}"
          class="card h-100 shadow-sm">
        <img :src="item.Picture.PictureUrl1" class="cardImg card-img-top img-fluid objectFit"
            :alt="item.Name"
            onerror="this.src='https://images.unsplash.com/photo-1623018035782-b269248df916?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'" />
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
              class="btn btn-outline-primary rounded w-100">
            前往網站
          </a>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ['filterData', 'category'],
};
</script>
