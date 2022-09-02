<template>
  <section class="news">
    <div class="inner clearfix">
      <div class="news-box clearfix">
        <h3>공지사항</h3>
        <ul class="news-list">
          <!-- item 이라는 함수에 각각의 배열(url, title...)값을 담아 전달 -->
          <!-- 이 부분 암기 ▼ -->
          <li v-for="(item, index) in noticeData" v-bind:key="index">
            <a :href="item.url"><span>{{item.title}}</span></a>
          </li>
        </ul>
      </div>
      <div class="news-box">
        <h3>보도자료</h3>
        <ul class="news-list">
          <li v-for="(item, index) in newsData" :key="index">
            <a :href="item.url"><span>{{item.title}}</span></a>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
  import { computed } from 'vue';
  import { useStore } from 'vuex';

  export default {
    setup(){
      const store = useStore();
      const noticeData = computed(() => store.getters.getNoticeData);
      const newsData = computed(() => store.getters.getNewsData);

      // vuex 의 actions 를 요청
      store.dispatch('fetchNotice');
      store.dispatch('fetchNews');

      return{
        noticeData,
        newsData
      }
    }
  }
</script>

<style>
/* news */
.news {
  position: relative;
}

.news::before {
  content: '';
  position: absolute;
  right: 0;
  top: 0;
  width: 50%;
  height: 100%;
  background: #58595b;
}

.news::after {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 50%;
  height: 100%;
  background: #ed1c24;
}

.news .inner {
  z-index: 9;
}

.news-box {
  width: 50%;
  float: left;
  padding: 55px 0;
}

.news-box:first-child {
  padding-right: 110px;
}

.news-box:last-child {
  padding-left: 110px;
}

.news-box h3 {
  font-size: 32px;
  color: #fff;
  font-weight: 300;
  margin-bottom: 45px;
}

.news-list {}

.news-list li {
  padding: 25px 0;
  border-top: 1px solid rgba(255, 255, 255, 0.4);
}

.news-list li:last-child {
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
}

.news-list li a {
  position: relative;
  display: block;
}

.news-list li a::after {
  content: '';
  position: absolute;
  right: 0;
  transform: translateX(-50%);
  top: 0;
  width: 48px;
  height: 23px;
  background: url('../assets/images/bg_common.png') no-repeat;
  background-position: 0px -49px;

}

.news-list li a span {
  display: inline-block;
  width: 80%;
  color: #fff;
  font-weight: 300;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
</style>