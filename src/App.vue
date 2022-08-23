<template>
  <div>
    <Modal></Modal>

    <div class="wrap">
      <Header :gnbdata="gnbData"></Header>
      <Visual></Visual>
      <WorkPart></WorkPart>
      <News :noticedata="noticeData" :newsdata="newsData"></News>
      <CS></CS>
      <About></About>
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
  import Modal from './components/ModalPop.vue';
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
      Modal,
      Header,
      Visual,
      WorkPart,
      News,
      CS,
      About,
      Footer
    },
    
    setup() {
      const gnbData = [
        {
          mainurl: '#', 
          maintxt: '회사소개',
          subData: [
            {
              suburl: '#',
              subtxt: '인사말'
            },
            {
              suburl: '#',
              subtxt: 'STX건설'
            },
            {
              suburl: '#',
              subtxt: '기업문화'
            },
            {
              suburl: '#',
              subtxt: 'STX건설연혁'
            },
            {
              suburl: '#',
              subtxt: '조직안내'
            },
            {
              suburl: '#',
              subtxt: '윤리경영'
            },
            {
              suburl: '#',
              subtxt: '안전·환경·품질경영'
            },
            {
              suburl: '#',
              subtxt: '찾아오시는길'
            }
          ]
        },
        {
          mainurl: '#', 
          maintxt: '사업분야',
          subData: [
            {
              suburl: '#',
              subtxt: '건축사업'
            },
            {
              suburl: '#',
              subtxt: '주택사업'
            },
            {
              suburl: '#',
              subtxt: '토목사업'
            },
            {
              suburl: '#',
              subtxt: '플랜트/공작기계사업'
            },
            {
              suburl: '#',
              subtxt: '해외사업'
            }
          ]
        },
        {
          mainurl: '#', 
          maintxt: '사회공헌',
          subData: [
            {
              suburl: '#',
              subtxt: '나눔의생각'
            },
            {
              suburl: '#',
              subtxt: '주요활동분야'
            },
            {
              suburl: '#',
              subtxt: '활동현황'
            }
          ]
        },
        {
          mainurl: '#', 
          maintxt: '홍보센터',
          subData: [
            {
              suburl: '#',
              subtxt: '홍보동영상'
            },
            {
              suburl: '#',
              subtxt: '홍보브로슈어'
            },
            {
              suburl: '#',
              subtxt: 'STX건설뉴스'
            }
          ]
        },
        {
          mainurl: '#', 
          maintxt: '고객지원',
          subData: [
            {
              suburl: '#',
              subtxt: '자주묻는질문'
            },
            {
              suburl: '#',
              subtxt: '고객문의'
            }
          ]
        },
        {
          mainurl: '#', 
          maintxt: '채용정보',
          subData: [
            {
              suburl: '#',
              subtxt: '채용안내'
            },
            {
              suburl: '#',
              subtxt: '채용공고'
            },
            {
              suburl: '#',
              subtxt: '채용FAQ'
            }
          ]
        }
      ];
      const noticeData = [
        {url: 'a.html', title:'에스티엑스건설자산관리 주식회사 해산결의에 따른 채권신고 안내 공고 (2차)'},
        {url: 'b.html', title:'에스티엑스건설자산관리 주식회사 해산결의에 따른 채권신고 안내 공고 (1차)'},
        {url: 'c.html', title:'2021년도 협력업체 모집공고'},
        {url: 'd.html', title:'STX건설 상호 사용 관련 안내'}
      ];
      const newsData = [
        {url: 'k.html', title:'STX건설, 춘천 레고랜드 테마파크 시공사 ‘선정’'},
        {url: 'i.html', title:'STX건설, 2018년 성장 청신호'}
      ];
      
      return {
        noticeData,
        newsData,
        gnbData
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
