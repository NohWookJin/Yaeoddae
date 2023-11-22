# YA어때!

[사이트 링크](https://mini-6-frontend.web.app/)

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
        <td align="center"><a href="https://github.com/wowba">이영욱</a></td>
        <td align="center"><a href="https://github.com/dbstjrals">윤석민</a></td>
        <td align="center"><a href="https://github.com/KittelLee">이진욱</a></td>
        <td align="center"><a href="https://github.com/NohWookJin">노욱진</a></td>
        <td align="center"><a href="https://github.com/KSJT">김소정</a></td>
    </tr>
</table>

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

## React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
