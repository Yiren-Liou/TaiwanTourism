import { createStore } from 'vuex';
import axios from 'axios';
import JsSHA from 'jssha';

export default createStore({
  state: {
    spotsUrl: 'https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?$format=JSON',
    hotelsUrl: 'https://ptx.transportdata.tw/MOTC/v2/Tourism/Hotel?$format=JSON',
    headers: {
      headers: '',
    },
    spotsList: '',
    hotelsList: '',
    filterSpots: [],
    filterHotels: [],
    regions: '',
    detail: '',
    isLoading: false,
  },
  mutations: {
    HEADERS(state) {
      const AppID = 'eb494f782e3445619108689562c5645a';
      const AppKey = 'IO598D4UR8_4QmL-ifXsq7e3vCc';
      const GMTString = new Date().toGMTString();
      const ShaObj = new JsSHA('SHA-1', 'TEXT');
      ShaObj.setHMACKey(AppKey, 'TEXT');
      ShaObj.update(`x-date: ${GMTString}`);
      const HMAC = ShaObj.getHMAC('B64');
      const Authorization = `hmac username="${AppID}", algorithm="hmac-sha1", headers="x-date", signature="${HMAC}"`;
      state.headers.headers = { Authorization, 'X-Date': GMTString };
    },
    SPOTSLIST(state, payload) {
      state.spotsList = payload;
    },
    HOTELSLIST(state, payload) {
      state.hotelsList = payload;
    },
    MODIFY_DATA(state, dataList) {
      const temp = dataList.data.filter(
        (item) => item.Picture.PictureUrl1 && item.Picture.PictureUrl1.includes('.jpg'),
      );
      temp.forEach((item) => {
        let city = '';
        if (!item.City) {
          city = item.Address.substr(0, 3);
          item.City = city.trim();
        }
        switch (item.City) {
          case '宜蘭縣':
            item.Region = '北部';
            item.RegionSort = 1;
            item.CitySort = 1;
            break;
          case '基隆市':
            item.Region = '北部';
            item.RegionSort = 1;
            item.CitySort = 2;
            break;
          case '新北市':
            item.Region = '北部';
            item.RegionSort = 1;
            item.CitySort = 3;
            break;
          case '臺北市':
            item.Region = '北部';
            item.RegionSort = 1;
            item.CitySort = 4;
            break;
          case '桃園市':
            item.Region = '北部';
            item.RegionSort = 1;
            item.CitySort = 5;
            break;
          case '新竹市':
            item.Region = '北部';
            item.RegionSort = 1;
            item.CitySort = 6;
            break;
          case '新竹縣':
            item.Region = '北部';
            item.RegionSort = 1;
            item.CitySort = 7;
            break;
          case '苗栗縣':
            item.Region = '中部';
            item.RegionSort = 2;
            item.CitySort = 8;
            break;
          case '臺中市':
            item.Region = '中部';
            item.RegionSort = 2;
            item.CitySort = 9;
            break;
          case '彰化縣':
            item.Region = '中部';
            item.RegionSort = 2;
            item.CitySort = 10;
            break;
          case '南投縣':
            item.Region = '中部';
            item.RegionSort = 2;
            item.CitySort = 11;
            break;
          case '雲林縣':
            item.Region = '中部';
            item.RegionSort = 2;
            item.CitySort = 12;
            break;
          case '嘉義縣':
            item.Region = '南部';
            item.RegionSort = 3;
            item.CitySort = 13;
            break;
          case '嘉義市':
            item.Region = '南部';
            item.RegionSort = 3;
            item.CitySort = 14;
            break;
          case '臺南市':
            item.Region = '南部';
            item.RegionSort = 3;
            item.CitySort = 15;
            break;
          case '高雄市':
            item.Region = '南部';
            item.RegionSort = 3;
            item.CitySort = 16;
            break;
          case '屏東縣':
            item.Region = '南部';
            item.RegionSort = 3;
            item.CitySort = 17;
            break;
          case '花蓮縣':
            item.Region = '東部';
            item.RegionSort = 4;
            item.CitySort = 18;
            break;
          case '臺東縣':
            item.Region = '東部';
            item.RegionSort = 4;
            item.CitySort = 19;
            break;
          case '澎湖縣':
            item.Region = '離島';
            item.RegionSort = 5;
            item.CitySort = 20;
            break;
          case '金門縣':
            item.Region = '離島';
            item.RegionSort = 5;
            item.CitySort = 21;
            break;
          case '連江縣':
            item.Region = '離島';
            item.RegionSort = 5;
            item.CitySort = 22;
            break;
          default:
            break;
        }
      });
      if (dataList.category === 'spots') {
        state.spotsList = temp.sort((a, b) => a.CitySort - b.CitySort);
      } else if (dataList.category === 'hotels') {
        state.hotelsList = temp.sort((a, b) => a.CitySort - b.CitySort);
      }
    },
    REGIONS(state, dataList) {
      const regions = new Set();
      dataList.forEach((item) => {
        regions.add(item.Region);
      });
      state.regions = Array.from(regions);
    },
    ISLOADING(state) {
      state.isLoading = !state.isLoading;
      console.log(state.isLoading);
    },
    FILTER(state, dataList) {
      const temp = [];
      for (let i = 0; i < 6; i += 1) {
        const random = Math.floor(Math.random() * dataList.dataList.length);
        temp.push(random);
      }
      switch (dataList.category) {
        case 'spots':
          state.filterSpots = [];
          temp.forEach((item) => {
            state.filterSpots.push(dataList.dataList[item]);
          });
          state.filterSpots.sort((a, b) => a.CitySort - b.CitySort);
          break;
        case 'hotels':
          state.filterHotels = [];
          temp.forEach((item) => {
            state.filterHotels.push(dataList.dataList[item]);
          });
          state.filterHotels.sort((a, b) => a.CitySort - b.CitySort);
          break;
        default:
          break;
      }
    },
    DETAIL(state, dataList) {
      state.detail = dataList.list.filter((item) => item.ID === dataList.id);
    },
  },
  actions: {
    getSpots(context) {
      context.commit('HEADERS');
      axios
        .get(this.state.spotsUrl, this.state.headers)
        .then((res) => {
          if (res.status === 200) {
            context.commit('SPOTSLIST', res.data);
            context.commit('MODIFY_DATA', { category: 'spots', data: this.state.spotsList });
            context.commit('FILTER', { category: 'spots', dataList: this.state.spotsList });
            context.commit('REGIONS', this.state.spotsList);
          } else {
            console.log(res);
          }
        })
        .catch((err) => {
          console.error(err);
        });
    },
    getHotels(context) {
      context.commit('HEADERS');
      axios
        .get(this.state.hotelsUrl, this.state.headers)
        .then((res) => {
          if (res.status === 200) {
            context.commit('HOTELSLIST', res.data);
            context.commit('MODIFY_DATA', { category: 'hotels', data: this.state.hotelsList });
            context.commit('FILTER', { category: 'hotels', dataList: this.state.hotelsList });
          } else {
            console.log(res);
          }
        })
        .catch((err) => {
          console.error(err);
        });
    },
    init({ dispatch }) {
      dispatch('getSpots');
      dispatch('getHotels');
    },
    getDetail(context, { category, id }) {
      let temp = '';
      switch (category) {
        case 'Spot':
          temp = context.getters.spotsList;
          break;
        case 'Hotel':
          temp = context.getters.hotelsList;
          break;
        default:
          break;
      }
      context.commit('DETAIL', { category, id, list: temp });
    },
  },
  getters: {
    spotsList(state) {
      return state.spotsList;
    },
    hotelsList(state) {
      return state.hotelsList;
    },
    filterSpots(state) {
      return state.filterSpots;
    },
    filterHotels(state) {
      return state.filterHotels;
    },
    regions(state) {
      return state.regions;
    },
    detail(state) {
      return state.detail;
    },
  },
  modules: {
  },
});
