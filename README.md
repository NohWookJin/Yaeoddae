<div align="center">
  <img src="https://github.com/Mini-Team-6/Mini-Team-6-Frontend/assets/87873821/cbf20a94-c3ea-4a0f-a88d-6f4d7fe25885">
  
  ### 미니 프로젝트 6조 : YA어때! 
  ### [배포 링크](https://mini-6-frontend.web.app/)

</div>

## 프로젝트 개요

- 개발 기간 : 2023.11.20 ~ 2023.12.01
- 주제 : Open API를 이용한 숙박 예약 사이트
- 시연 영상

  [<img src="https://img.youtube.com/vi/BANYKb6jIfQ/hqdefault.jpg" width="600" height="400"
  />](https://www.youtube.com/embed/BANYKb6jIfQ)

## :clap: Contributors

<table>
    <tr>
        <td align="center"><img alt="avatar" src="https://github.com/wowba.png" width="100"></td>
        <td align="center"><img alt="avatar" src="https://github.com/dbstjrals.png" width="100"></td>
        <td align="center"><img alt="avatar" src="https://github.com/KittelLee.png" width="100"></td>
        <td align="center"><img alt="avatar" src="https://github.com/NohWookJin.png" width="100"></td>
        <td align="center"><img alt="avatar" src="https://github.com/KSJT.png" width="100"></td>
    </tr>
    <tr>
        <td align="center"><a href="https://github.com/wowba">이영욱(리더)</a></td>
        <td align="center"><a href="https://github.com/dbstjrals">윤석민</a></td>
        <td align="center"><a href="https://github.com/KittelLee">이진욱</a></td>
        <td align="center"><a href="https://github.com/NohWookJin">노욱진</a></td>
        <td align="center"><a href="https://github.com/KSJT">김소정</a></td>
    </tr>
</table>

## 체험 계정

- id: test@test.net
- pw: test

## 개인별 작업 내역

### 공통 작업 내역

- 피그마 디자인

<details>
<summary>이영욱</summary>

### 이영욱 작업 내역

- 개발 환경 세팅
  - Vite 를 이용한 React 세팅을 통해 번들링 속도 향상
  - Github Action, Firebase web Hosting을 이용하여 CICD 환경 구성
  - 글로벌 CSS 스타일 작성
- 테스트 환경 추가
  - E2E 테스트를 위해 Playwright 라이브러리 설치 및 팀원에게 사용법 설명
  - github action과 연계하여 PR 혹은 Merge 시 테스트 동작 환경 설정
- 페이지 작업 내역
  - 헤더 공통 컴포넌트 제작
    - switch 문을 이용해 각 엔드포인트 별 헤더 제공
  - 사이드바 공통 컴포넌트 제작
    - 로그인 여부에 따라 보여지는 메뉴 변경
  - 검색 페이지 구현
    - queryString을 이용해 검색 페이지 내 키워드 및 카테고리 저장
      - 링크를 상대방에게 공유시 동일한 페이지 및 검색 결과 확인 가능
    - Intersection Observer API를 이용해 무한 스크롤 이벤트 구현
    - React query의 useInfiniteQuery를 백엔드 검색 결과 API와 연동하여 페이징 구현
      - 다음 페이지 이동 후 뒤로가기를 눌러도 캐싱을 통해 처음부터 데이터를 불러오지 않도록 구현
      - 로딩 시 isLoading, isFetching을 활용해 스켈레톤 컴포넌트 렌더링
      - 검색 결과가 없을 경우 전용 컴포넌트 렌더링

</details>

<details>
<summary>노욱진</summary>

### 노욱진 작업 내역

**상품(디테일) 페이지**

1. path parameter 사용해 실시간으로 사용자의 체크인, 체크아웃 날짜 그리고 인원을 저장했습니다. 저장한 값들은 장바구니 생성 API에서 파라미터로 넘겨주었고, 예약 페이지에서는 navigate state속성을 이용해 값들을 넘겨주었습니다.

(페이지 진입시 체크인, 체크아웃 날짜를 오늘 내일로 설정, 초기 인원은 2명으로 설정했습니다.)
![image](https://github.com/Mini-Team-6/Mini-Team-6-Frontend/assets/87873821/e0ff75be-7650-47f9-ac54-b15c2b23fcbc)

(이후 사용자가 체크인, 체크아웃 날짜 및 인원 변경시 실시간으로 변경되도록 구현했습니다.)
![image](https://github.com/Mini-Team-6/Mini-Team-6-Frontend/assets/87873821/a7bfea7b-73f5-473a-86c5-233b927e5156)

2. react-query를 사용해 로딩 상태에선 로딩 컴포넌트를, 에러 상태(API를 제공하나 객실 정보가 없는 숙박시설)에선 에러 컴포넌트를 렌더링 했습니다.

- 로딩 컴포넌트

  ![Loading](https://github.com/Mini-Team-6/Mini-Team-6-Frontend/assets/87873821/dac8c9c2-abe8-476b-babe-560d5536f424)

- 에러 컴포넌트

  ![Error](https://github.com/Mini-Team-6/Mini-Team-6-Frontend/assets/87873821/e7d9e0a8-ee99-420e-b1f0-54169fcd2ee6)

**장바구니 페이지**

1. 장바구니 상품 데이터를 패칭할 때 체크인, 체크아웃 날짜 그리고 1박 기준 가격을 따로 가져와서 실질적으로 머무는 날짜에 맞는 가격으로 수정해 패칭했습니다.

![image](https://github.com/Mini-Team-6/Mini-Team-6-Frontend/assets/87873821/9c52ee22-09bf-4d61-a873-acf2b7d05ebe)
![image](https://github.com/Mini-Team-6/Mini-Team-6-Frontend/assets/87873821/6fc33247-a66d-45db-9e5c-aa6b508c0d10)

2. zustand 전역 관리 라이브러리를 통해 사용자가 선택한(체크한) 아이템의 아이디값과 총 가격을 따로 관리했습니다.

![image](https://github.com/Mini-Team-6/Mini-Team-6-Frontend/assets/87873821/28208943-77c7-49cd-8dd9-ee50d6fdd239)

</details>

<details>
<summary>윤석민</summary>

### 윤석민 작업 내역

- 결제(예약 생성) 페이지
- 예약 내역 조회 페이지
</details>

<details>
<summary>이진욱</summary>

### 이진욱 작업 내역

- 회원가입 페이지와 모달창 구현
- 로그인 페이지 구현
- 나의 정보페이지 구현
</details>

<details>
<summary>김소정</summary>

### 김소정 작업 내역

- 메인 페이지
</details>

## 프로젝트 회고

<details>
<summary>이영욱</summary>

- 백엔드 분들과의 협업을 통해 FE-BE간 협업 규칙과 데일리 스크럼의 중요성을 알게 되었습니다.
- 리액트 쿼리를 처음 적용해 보았는데, 이를 이용한 캐싱 및 로딩 상태일 때 스켈레톤 디자인 등 유저 경험 및 UI에 대한 고민을 코드로 해결할 수 있었습니다.
- 다음 프로젝트에는 프론트 배포환경 및 전체적인 코드 컨벤션에 집중을 해 퀄리티를 올리고 싶습니다!
</details>

<details>
<summary>노욱진</summary>

- 새로운 라이브러리들 사용, 처음 해보는 기능 구현, 짧은 데드라인 등으로 인해 코드가 다소 산만해졌던 문제가 있었습니다. 멘토님이 리뷰해주신 것처럼 코드의 관심사 분리를 제대로 처리하지 못했고 불필요한 변수 생성 또는 의사소통을 야기하는 변수명 등 여러 문제를 초래했습니다. 리팩토링을 거치면서 메소드 체이닝으로 불필요한 변수들도 줄였고, 애매한 변수명도 많이 고쳤습니다. 이번 프로젝트를 통해서 멘토님과 팀원들 덕분에 한층 더 성장할 수 있었다고 생각합니다.
</details>

<details>
<summary>윤석민</summary>

- 느낀 점
  프로젝트의 기획서 분석, 디자인, 개발과 백엔드와의 협업을 2주안에 해야해서 다소 빠듯했던 것 같습니다. 그럼에도 팀원분들이 열심히 해주시고 많은 부분을 도와주셔서 기능 구현까지는 잘 완성한 것 같습니다.
- 아쉬운 점
  - 컨벤션을 지키기가 힘들다는 점
    - 대략적인 컨벤션은 개발을 시작하기 전에 논의했지만, 세부적으로는 정의되지 않은 컨벤션이 많아 함수 작성을 하거나 파일 구조에서 통일된 모습이 보이지 않았습니다.
    - 물론 개발전에 최대한 많은 부분을 논의하는 것도 도움이 되겠지만, 자주 코드 리뷰를 하면서 코딩 컨벤션을 맞춰나가는 과정이 개발 초기에 이루어져야 할 것 같습니다.
  - 공통 모듈을 누군가 만들어도 적용하기가 힘들다는 점
    - 컨벤션을 지키기 힘든 이유와 대동소이한 것 같습니다. 이 문제 역시 개발 초기에 많은 얘기를 나눠봐야 할 것 같습니다.
    - 예시로 axios를 이용해 네트워크 요청을 보냈는데, axios instance와 interceptors를 이용해서 공통 baseURL과 header를 설정하고 response의 공통적인 error를 처리하였으면 훨씬 좋았을 것 같습니다. 이 부분은 모든 코드에 대해서 고치지는 못했지만 제가 사용하는 파일에서 리팩토링했습니다.
  - 백엔드와의 협업
    - api 문서에 적힌 response dto와 다르게 오는 경우가 있었습니다. 종종 저녁에 작업을 하다보면 이런 문제를 바로 해결하지 못해 작업이 지연되는 경우가 있었습니다. 그리고 개발 전에 백엔드와 얘기를 할 때 특정 화면에서 필요한 데이터에 대해서 상호간 더 자세히 말하지 못해 아쉽습니다.
- 좋았던 점 - 프로젝트가 지날 수록 다양한 분들의 코드를 보며, 새로운 hook이나 library를 알게되며 양질의 학습이 된 것 같습니다. - 백엔드와의 협업을 하면서 어떤 부분을 미리 논의해야 할지 조금 더 알게 되어 파이널 프로젝트에 도움이 될 것 같습니다.
</details>

<details>
<summary>이진욱</summary>

- 프로젝트를 진행하면서 힘들었던 점은? 혹은 어려웠던 점은?
  백엔드팀원분들이 만든 API를 어떻게 가져다 쓰는지 몰라서 처음에 연결하는데 애를 많이 먹었습니다.
- 어떤 문제로 힘들었는지, 어려웠는지 확인
  백엔드와 협업이 별로 없던 상황에서 협업을 하려고 하니 문제가 생겼습니다.
- 문제가 생겼던 원인 파악
  fetch 혹은 axios를 써서 get등으로 받아오면 되는 문제였습니다!
- 문제에 대한 개선점
  const response = await fetch("https://travel-server.up.railway.app/members/mypage", {

      요부분을 멘토님이 다음과 같이 리뷰를 남겨주셔서

      “axios를 쓰면 instance를 쓸 수 있어, 반복되는 로직들을 한 곳에서 처리할 수 있는데, fetch를 사용하신 이유가 따로 있으신가요?”

      반복되는 로직을 한곳에서 처리할 수 있게되었습니다.

  </details>

<details>
<summary>김소정</summary>

- 느낀 점: 프로젝트에 필요하거나 적합한 기술 스택을 서치하고 공부해서 실제 개발에 임하는 팀원들의 자세에서 많은 것을 배울 수 있었습니다. 개발, 리팩토링 과정을 거치면서 react-query, playwright, Suspense, Error Boundary 등을 사용해 보았는데 이전에는 스킬이 부족해서 미처 고려해 보지 못 했던 사용자 경험 개선, 코드 개선 면에서 더욱 깊은 고민을 해 볼 수 있었습니다. 스스로 실력이 부족하다고 생각해 많은 부분 프로젝트에 기여하지는 못 했지만 어느 때보다 팀원들의 코드를 많이 읽어보며 개인적으로 코드 리뷰 부분에서 리터러시가 늘었다고 생각합니다. 고생해준 팀원들에게 감사합니다.
</details>

## UserFlow

![image](https://github.com/Mini-Team-6/Mini-Team-6-Frontend/assets/87873821/4c0951a0-428e-42dd-9cad-2686968f15bf)

## Design

![Frame 33694](https://github.com/Mini-Team-6/Mini-Team-6-Frontend/assets/87873821/9b0d8298-10f6-413b-901a-18a871856442)

## :hammer: Stack

|            | Stack                                                                                                                                                                                                                                                                                                                                       |
| :--------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|    언어    | <img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white">                                                                                                                                                                                                                              |
|   디자인   | <img src="https://img.shields.io/badge/figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white">                                                                                                                                                                                                                                        |
|    서버    | <img src="https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black"/>                                                                                                                                                                                                                                 |
| 라이브러리 | <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black"/> <img src="https://img.shields.io/badge/zustand-007AF4?style=for-the-badge&logo=react&logoColor=black"/> <img src="https://img.shields.io/badge/styled components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white"/> |
| 개발 환경  | <img src="https://img.shields.io/badge/Prettier-F7B93E?logo=prettier&logoColor=fff&style=for-the-badge"/> <img src="https://img.shields.io/badge/Eslint-4B32C3?logo=eslint&logoColor=fff&style=for-the-badge"/>                                                                                                                             |
|    협업    | <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">                                                                                                                                                                                                                                      |

## Git Branches

- main: 배포용 브랜치
- #\<issueNumber>: 개별 개발용 브랜치
  - 브랜치 생성 전 issue에 작업내역 생성 후 번호 할당

## :computer: Commit / PR 컨벤션

| 명칭     | 의미                               |
| -------- | ---------------------------------- |
| Feat     | 새로운 기능 추가                   |
| Fix      | 버그 수정                          |
| Docs     | 문서 수정                          |
| Design   | CSS 혹은 폰트, 이미지 파일 등 추가 |
| Refactor | 코드 리팩토링                      |
| Chore    | 빌드 업무 수정, 패키지 매니저 수정 |
