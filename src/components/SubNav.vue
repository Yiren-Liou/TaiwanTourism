<template>
  <ul class="subNav nav nav-pills flex-lg-column justify-content-center mb-3">
    <li class="nav-item mb-2">
      <button class="btn nav-link w-100" type="button"
              :class="{'active': this.$route.query.region === '全部'}"
              @click="emitRegion">
        全部
      </button>
    </li>
    <li v-for="item in regions" :key="item" class="nav-item mb-2">
      <button class="btn nav-link w-100" type="button"
              :class="{'active': this.$route.query.region === item}"
              @click="emitRegion">
        {{ item }}
      </button>
    </li>
  </ul>
</template>

<script>
import { mapGetters } from 'vuex';
import emitter from '@/methods/Emitter';

export default {
  data() {
    return {
      region: this.$route.query.region,
      pathName: this.$route.name,
      goPath: '',
    };
  },
  watch: {
    $route() {
      if (this.$route.name !== this.pathName) {
        this.pathName = this.$route.name;
      }
    },
  },
  computed: {
    ...mapGetters(['regions']),
  },
  methods: {
    emitRegion(e) {
      this.region = e.target.textContent.trim();
      if (this.pathName !== ('Spots' || 'Hotels')) {
        this.pathName = `${this.pathName}s`;
      }
      this.$router.push({
        path: `/${this.pathName}`, query: { region: this.region, page: 1 },
      });
      emitter.emit('emit-region', this.region);
    },
  },
};
</script>
