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
