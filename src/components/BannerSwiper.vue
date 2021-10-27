<template>
  <div
    id="bannerCarousel"
    class="carousel mb-5"
    data-bs-ride="carousel"
  >
    <div class="carousel-indicators">
      <button
        type="button"
        data-bs-target="#bannerCarousel"
        data-bs-slide-to="0"
        class="active"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
      <button
        v-for="(item, i) in list"
        :key="item.name"
        type="button"
        data-bs-target="#bannerCarousel"
        :data-bs-slide-to="i + 1"
        :aria-label="i + 1"
      ></button>
    </div>
    <div class="carousel-inner">
      <img
        src="@/assets/images/people6.png"
        class="position-absolute bottom-0 start-50 translate-middle-x zTop d-none d-lg-block"
      />
      <div class="carousel-item active" data-bs-interval="5000">
        <img
          src="@/assets/images/鼻頭角.jpg"
          class="img-fluid objectFit"
          alt="鼻頭角"
        />
        <div class="carousel-title">
          <p class="carousel-text fw-bold">新北 鼻頭角</p>
        </div>
      </div>
      <div
        v-for="item in list"
        :key="item.name"
        class="carousel-item"
        data-bs-interval="5000"
      >
        <img
          :src="require(`@/assets/images/${item.name}.jpg`)"
          class="img-fluid objectFit"
          :alt="item.name"
        />
        <div class="carousel-title">
          <p class="carousel-text fw-bold">
            {{ item.city }} {{item.name}}
          </p>
        </div>
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#bannerCarousel"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#bannerCarousel"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          name: '九份',
          city: '新北',
        },
        {
          name: '野柳女王頭',
          city: '新北',
        },
        {
          name: '101大樓',
          city: '台北',
        },
        {
          name: '中正紀念堂',
          city: '台北',
        },
        {
          name: '日月潭',
          city: '台中',
        },
        {
          name: '合歡山',
          city: '南投',
        },
        {
          name: '綠色隧道',
          city: '台南',
        },
        {
          name: '清水斷崖',
          city: '花蓮',
        },
        {
          name: '太魯閣',
          city: '花蓮',
        },
      ],
    };
  },
};
</script>
