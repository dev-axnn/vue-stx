import axios from 'axios';

const state = {
  gnbData: [],
  noticeData: [],
  newsData: []
};

const actions = {
  // gnb.json 데이터를 axios로 받아온다.
  // mutation: 즉, state 를 업데이트 할 때 필요한 method(commit)
  fetchGnb({commit}){
    axios.get('./data/gnb.json')
    .then(response => {
      console.log("axios", response);
      // commit('mutation method name', 전달할 값)
      commit('UPDATE_GNB', response.data);
    })
    .catch(err => console.log(err))
  },
  fetchNotice({commit}){
    axios.get('./data/notice.json')
    .then(response => {
      console.log(response);
      commit('UPDATE_NOTICE', response.data);
    })
    .catch(err => console.log(err))
  },
  fetchNews({commit}){
    // news.json 을 axios로 호출
    axios.get('./data/news.json')
    .then(response => {
      console.log(response)
      // mutation 으로 자료를 전송한다. (commit이 필요)
      // axios 는 받아온 자료를 .data 에 보관
      commit('UPDATE_NEWS', response.data)
    })
    .catch(err => console.log(err))
  }
};

// state의 값을 업데이트 하기 위한 연동
const mutations = {
  // method_name(state(고정값), 전달할 재료){}
  UPDATE_GNB(state, payload){
    console.log(payload)
    // 최종적으로 store 데이터 state.gnbData 업데이트
    state.gnbData = payload;
  },

  UPDATE_NEWS(state, payload){
    state.newsData = payload;
  },

  UPDATE_NOTICE(state, payload){
    state.noticeData = payload;
  }

};

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