const state = {
  gnbData: [
    {mainurl: '#', maintxt: '회사소개', subData: [
      {suburl: '#', subtxt: '인사말'},
      {suburl: '#', subtxt: 'STX건설'},
      {suburl: '#', subtxt: '기업문화'},
      {suburl: '#', subtxt: 'STX건설연혁'},
      {suburl: '#', subtxt: '조직안내'},
      {suburl: '#', subtxt: '윤리경영'},
      {suburl: '#', subtxt: '안전·환경·품질경영'},
      {suburl: '#', subtxt: '찾아오시는길'}
    ]},
    {mainurl: '#', maintxt: '사업분야', subData: [
      {suburl: '#', subtxt: '건축사업'},
      {suburl: '#', subtxt: '주택사업'},
      {suburl: '#', subtxt: '토목사업'},
      {suburl: '#', subtxt: '플랜트/공작기계사업'},
      {suburl: '#', subtxt: '해외사업'}
    ]},
    {mainurl: '#', maintxt: '사회공헌', subData: [
      {suburl: '#', subtxt: '나눔의생각'},
      {suburl: '#', subtxt: '주요활동분야'},
      {suburl: '#', subtxt: '활동현황'}
    ]},
    {mainurl: '#', maintxt: '홍보센터', subData: [
      {suburl: '#', subtxt: '홍보동영상'},
      {suburl: '#', subtxt: '홍보브로슈어'},
      {suburl: '#', subtxt: 'STX건설뉴스'}
    ]},
    {mainurl: '#', maintxt: '고객지원', subData: [
      {suburl: '#', subtxt: '자주묻는질문'},
      {suburl: '#', subtxt: '고객문의'}
    ]},
    {mainurl: '#', maintxt: '채용정보', subData: [
      {suburl: '#', subtxt: '채용안내'},
      {suburl: '#', subtxt: '채용공고'},
      {suburl: '#', subtxt: '채용FAQ'}
    ]}
  ],
  noticeData: [
    {url: 'a.html', title:'에스티엑스건설자산관리 주식회사 해산결의에 따른 채권신고 안내 공고 (2차)'},
    {url: 'b.html', title:'에스티엑스건설자산관리 주식회사 해산결의에 따른 채권신고 안내 공고 (1차)'},
    {url: 'c.html', title:'2021년도 협력업체 모집공고'},
    {url: 'd.html', title:'STX건설 상호 사용 관련 안내'}
  ],
  newsData: [
    {url: 'k.html', title:'STX건설, 춘천 레고랜드 테마파크 시공사 ‘선정’'},
    {url: 'i.html', title:'STX건설, 2018년 성장 청신호'}
  ]
};

const actions = {};

const mutations = {};

const getters = {
  getGnbData(state){
    return state.gnbData;
  },
  getNoticeData(state){
    return state.noticeData;
  },
  getNewsData(state){
    return state.newsData;
  }
};

export default { state, actions, mutations, getters }