# 가이드

## 주요 라이브러리 및 기술
- Next js : React SSR Framework 
- Hooks : Functions make hook into the React state and lifecycle features from function components.
- Express : Node js library
- Typescript : ES6 with static type-checking
- Redux : Flux implementation for React js
- GraphQL : Query language for APIs
- SCSS : SASS + CSS Compiler
- ESLINT : Tool for identifying and reporting on patterns.

## 아키텍쳐
전체 아키텍쳐
> https://drive.google.com/file/d/1Q94ubwcRWHg7zRoyrFPLPckq-Y0NzQHV/view?usp=sharing

<br>

클라이언트 아키텍쳐
> https://www.polarisoffice.com/d/2RQQv3Kt

## 빠른 시작
1. Node.js v8.10,  npm v5 이상 버전으로 설치
2. 터미널에 <b>"npm install"</b> 입력하여 의존 라이브러리 설치
3. <b>"npm start"</b> 또는 <b>"npm run start"</b> 입력하여 로컬환경 앱 실행 (http://localhost:3000)

## 주요 라이브러리
- react (https://reactjs.org/)
- redux (https://redux.js.org/basics/usage-with-react)
- axios (https://github.com/axios/axios)
- eslint (https://www.npmjs.com/package/eslint) 
- css-loader (https://www.npmjs.com/package/css-loader)
- style-loader (https://www.npmjs.com/package/style-loader)
- file-loader (https://www.npmjs.com/package/file-loader)

## 참고사항
- Next js 기반 반응형 웹
- 함수형 컴포넌트 + Hooks 사용
- 타입스크립트 + ESLINT 사용
- <b>Redux</b> 사용하며, <b>Thunk</b> (https://www.npmjs.com/package/redux-thunk) 와 StoreLogger 미들웨어 사용 
<br>(추후 Hooks context, reducer 또는 Apollo 대체 가능성 존재) 
- <b>app.config.ts</b> 에 환경변수 별 URL 명시
- 서버와의 통신은 <b>AXIOS</b> 사용 
<br>(참고 : https://github.com/decompanyio/decompanyio-front-end/tree/master/src/service)
- 모든 서버와의 통신은 <b>repos.ts</b> 통하여 수행 
<br>(참고 : https://github.com/decompanyio/decompanyio-front-end/blob/master/src/redux/MainRepository.js)
- 모든 <b>GET response Data</b> 에 대하여 <b>model</b> 적용 
<br>(참고 : https://github.com/decompanyio/decompanyio-front-end/tree/master/src/redux/model)  
- <b>SCSS</b> 전처리기 사용 
<br>(참고 : https://github.com/decompanyio/decompanyio-front-end/blob/master/src/assets/scss/index.scss)
- Css module 옵션 사용 (컴포넌트 기반 스타일 관리 용이)
- GraphQL 사용 (Apollo 도입 전까지 REST API request body에 쿼리문 포함)

