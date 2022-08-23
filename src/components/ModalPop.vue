<template>
  <!-- modal -->
  <div class="modal-wrap">
    <div class="modal-main">
      <h1>STX건설 클론코딩</h1>
      <p>
        : 이 사이트는 <b>스터디용</b>으로 제작되었으며 리소스는 <strong>원저작자</strong>에게 있습니다. <br>
        : 해당 사이트 관련 문제 사항이 있으시면 연락해주시면 삭제하겠습니다. <br>
        : 본 사이트는 Chrome 에 최적화되어 있습니다.
      </p>
      <button class="modal-close" v-on:click.stop="closeModal" v-on:click.prevent>
        <i class="far fa-times-circle"></i>
      </button>
    </div>
  </div>
</template>

<script>
  import $ from 'jquery';
  import { onMounted } from 'vue';

  export default {

    setup() {

      onMounted( () => {
        // 추가 기능 : 스크롤바 없애기
        $('html').css('overflow', 'hidden');
        // 모달창 기능
        let modalWrap = $('.modal-wrap');
        console.log(modalWrap)
        let modalClose = $('.modal-close')
        modalClose.click(function(){
          modalWrap.stop().fadeOut(200);
          // 추가 기능 : 스크롤바 살리기
          $('html').css('overflow', 'auto');
        });
        let modalMain = $('.modal-main');
        // 내용 배경 클릭하면 창 닫기
        modalMain.click(function(event){
          // 모달창 클릭했을때 창닫히지 않게 막기
          event.stopPropagation();
        });
        modalWrap.click(function(){
          modalWrap.stop().fadeOut(200);
          $('html').css('overflow', 'auto');
        });

      });

      return {

      }
    }
  }
</script>

<style>
  /* modal */
  .modal-wrap {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    z-index: 99999;
  }

  .modal-main {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 550px;
    height: 400px;
    background: #fff;
    border-radius: 8px;
    padding: 10px;
    box-shadow: 0 0 15px 0 rgba(0, 0, 0, 60%);
    border: 3px solid blueviolet;
  }

  .modal-main h1 {
    font-size: 20px;
    font-weight: 500;
    text-align: center;
    color: #000;
    padding: 30px 0;
  }
  .modal-main p {
    text-align: center;
    font-size: 12px;
    font-weight: 300;
    color: #111;
    line-height: 1.8;
  }
  .modal-main p b {
    font-weight: 600;
    text-decoration: underline;
    color: #ed1c24;
  }

  .modal-main p strong {
    font-weight: 600;
    text-decoration: underline;
    color: #ed1c24;
  }

  .modal-close {
    border: 0;
    cursor: pointer;
    font-size: 60px;
    color: #999;
    background: transparent;
  }

  .modal-close i {
    position: absolute;
    left: 50%;
    bottom: 10px;
    transform: translate(-50%, -50%);
    transition: transform 0.3s;
  }

  .modal-close i:hover {
    transform:  translate(-50%, -50%) rotate(90deg);
  }
</style>