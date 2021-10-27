<template>
  <nav aria-label="Page navigation">
    <ul class="pagination">
      <li class="page-item"
          :class="{ disabled: page.current_page === 1, 'd-none': windowSmallWidth }">
        <a
          class="page-link"
          href="#"
          @click.prevent="emitPage(1)">
          最前頁
        </a>
      </li>
      <li class="page-item" :class="{ disabled: page.current_page < 10}">
        <a
          class="page-link"
          href="#"
          @click.prevent="emitPage(page.current_page - 9)">
          <i class="fas fa-angle-double-left"></i>
        </a>
      </li>
      <li class="page-item" :class="{ disabled: !page.has_pre }">
        <a
          class="page-link"
          href="#"
          @click.prevent="emitPage(page.current_page - 1)">
          <i class="fas fa-angle-left"></i>
        </a>
      </li>
      <li
        class="page-item"
        v-for="item in showPages"
        :key="'page' + item"
        :class="{ active: item === page.current_page }"
      >
        <a class="page-link" href="#" @click.prevent="emitPage(item)">
          {{ item }}
        </a>
      </li>
      <li class="page-item" :class="{ disabled: !page.has_next }">
        <a
          class="page-link"
          href="#"
          @click.prevent="emitPage(page.current_page + 1)">
          <i class="fas fa-angle-right"></i>
        </a>
      </li>
      <li class="page-item"
      :class="{ disabled: !page.has_next || page.total_pages - page.current_page < 10 }">
        <a
          class="page-link"
          href="#"
          @click.prevent="emitPage(page.current_page + 9)">
          <i class="fas fa-angle-double-right"></i>
        </a>
      </li>
      <li class="page-item"
          :class="{ disabled: page.current_page === page.total_pages, 'd-none': windowSmallWidth }">
        <a
          class="page-link"
          href="#"
          @click.prevent="emitPage(page.total_pages)">
          最尾頁
        </a>
      </li>
    </ul>
  </nav>
  <span>總共 {{ page.total_pages }} 頁</span>
</template>

<script>
import emitter from '@/methods/Emitter';

export default {
  data() {
    return {
      docWidth: '',
    };
  },
  props: ['page'],
  watch: {
    docWidth() {
      this.docWidth = document.documentElement.scrollWidth;
    },
  },
  computed: {
    showPages() {
      let pagination = [];
      if (this.page.total_pages < 6) {
        for (let i = 1; i < this.page.total_pages + 1; i += 1) {
          pagination.push(i);
        }
      } else if (this.page.current_page < 4) {
        pagination = [1, 2, 3, 4, 5];
      } else if (this.page.total_pages < 6) {
        for (let i = 0; i < this.page.total_pages; i += 1) {
          pagination.push(i);
        }
      } else if (this.page.total_pages - this.page.current_page < 3) {
        for (let i = this.page.total_pages - 4; i < this.page.total_pages + 1; i += 1) {
          pagination.push(i);
        }
      } else {
        for (let i = this.page.current_page - 2; i < this.page.current_page + 3; i += 1) {
          pagination.push(i);
        }
      }
      return pagination;
    },
    windowSmallWidth() {
      if (this.docWidth < 576) {
        return true;
      }
      return false;
    },
  },
  methods: {
    emitPage(item) {
      emitter.emit('emit-page', item);
    },
  },
  mounted() {
    window.addEventListener('resize', () => {
      this.docWidth = document.documentElement.scrollWidth;
    });
  },
  unmounted() {
    window.removeEventListener('resize', () => {
      this.docWidth = document.documentElement.scrollWidth;
    });
  },
};
</script>
