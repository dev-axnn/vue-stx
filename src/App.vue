<template>
  <div>
    <ModalV></ModalV>

    <div class="wrap">
      <Header></Header>
      <Visual></Visual>
      <WorkPart></WorkPart>
      <News></News>
      <CS></CS>
      <About></About>
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
  import ModalV from './components/ModalView.vue';
  import Header from './components/HeaderView.vue';
  import Visual from './components/VisualView.vue';
  import WorkPart from './components/WorkPartView.vue';
  import News from './components/NewsView.vue';
  import CS from './components/CSView.vue';
  import About from './components/AboutView.vue';
  import Footer from './components/FooterView.vue';

  export default {
    name: "App",
    components: {
      ModalV,
      Header,
      Visual,
      WorkPart,
      News,
      CS,
      About,
      Footer
    },
    
    setup() {
      return {

      };
    }
  }
</script>

<style>
  @charset "utf-8";
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ul, li {
    list-style: none;
  }

  a {
    color: #333;
    text-decoration: none;
  }

  img {
    vertical-align: middle;
    border: 0;
  }

  html {
    font-size: 16px;
  }

  body {
    font-family: 'Noto Sans KR', Helvetica, '맑은 고딕', 'malgun gothic', 'Apple SD Gothic Neo', sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.4;
    letter-spacing: -0.64px;
    color: #444;
  }

  /* === 공통요소 === */
  .clearfix::after {
    content: '';
    position: relative;
    display: block;
    width: 100%;
    clear: both;
  }

  .inner {
    position: relative;
    display: block;
    max-width: 1200px;
    margin: 0 auto;
  }

  .wrap {
    padding-top: 80px;
  }
</style>
