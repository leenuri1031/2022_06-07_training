to do : npm install -g typescript 
(컴퓨터에 설치하기)

2022_06_09

  # 디지털 개발
   => 폭포수 모델
    계획 <-> 요구분석 <-> 설계 <-> 구현 <-> 테스트 <-> 운영 및 유지보수
      * 설계 꼼꼼하게 -> 완성시간 단축
      * 비용 -> 피그마, 기본 마크업 (스크롤, 클릭 이벤트 확인 먼저)
   => 애자일 모델 
     소비자 + 제작자
     
      * 설계가 탄탄하면 제어작업이 적어짐
      * 가장 빠른 방법으로 완성 가능
      * 필요한 기능, 연출론 - 기술적 사항
  # 피드백 요점 
   => 원하고자 했던 '연출'과 부합하는지
     * 부합하지 않았다면 타협하지 않고 작업하는 정신 필요(프로정신)
   => 기술적으로 어필할 포인트
     * 실무자들이 본다는 전제 
   => 비교자료 취합 
     * 본인 작품과 비슷한 계열의 자료
  # 포트폴리오 
   => 완성하기 까지 볼륨이 큼
   => 슬기롭게 관리 해야 함
  # 기술적 문제 (짧게 코딩하는 법, 유려하게 판단 하는 법)
   => 기반사항이 필요함 : 어휘력, 이론적 공부 
   => 배열메서드의 연습 (많은 오류를 겪어봐야 함)
  # JavaScript
   => <a> / react(단일 페이지 처리)
      * 작업에 페이지 이동이 많을 경우 사용
      * html을 javascript에서 만들 수 있음 (css -> scss 따로 해결)
      * if()을 사용에 필요하지 않은 항목을 빼거나 보이지 않게 할 수 있음
  # function
  function sectionLoop(){
    let arr = [];

    for(let i = 0; i<10; i++){
      arr.push(sectionElement());
    }
    return arr.join('');
  } 
  # schedule
   => UI디자인 : 피그마 - 최종 모습 제출용 완성하기
   => next week : 취업특강 및 상담일정 - 일정에 맞춰 작업 스케줄 정하기
   => 작업 완료 시점 : 기술적 연습, 내 작업


2022_06_10
  # today
   => 효율적인 작업하기
   => 기획 작업 확인하기(기획이 좋지 않으면 디자인이 산으로)
   => 기술적인 부분 - 조목조목 옆에 적어 두기

  # react 
   <!DOCTYPE html>
   <html lang="en">
     <head>
       <meta charset="UTF-8">
       <meta http-equiv="X-UA-Compatible" content="IE=edge">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>Document</title>
       <script crossorigin src="https://unpkg.com/react@17/umd/react.development.js"></script>
       <script crossorigin src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
       <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
     </head>
     <body>
       <div id="root"></div>
       <script type="text/babel" data-type="module"></script>
     </body>
     </html>

  # CDN
   => 배달 느낌
   => 함수 / this
   => 콜백함수 addEventlistener()
   => html에서 자유로워지는 것 
