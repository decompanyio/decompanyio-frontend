# Guide

## Main Library and Pattern
- Next js : React SSR Framework 
- Hooks : Functions make hook into the React state and lifecycle features from function components.
- Express : Node js library
- Typescript : ES6 with static type-checking
- Redux : Flux implementation for React js
- GraphQL : Query language for APIs
- SCSS : SASS + CSS Compiler
- Eslint : Tool for identifying and reporting on patterns.

## Architecture
Full Architecture
> https://drive.google.com/file/d/1Q94ubwcRWHg7zRoyrFPLPckq-Y0NzQHV/view?usp=sharing

<br>

Client Architecture
> https://www.polarisoffice.com/d/2RQQv3Kt


## Quick start
1. Make sure that you have Node.js v8.10 and npm v5 or above installed.
2. Run <b>"npm install"</b>  in order to install dependencies.
3. At this point you can run <b>"npm start"</b> or <b>"npm run start"</b> to see the example app at http://localhost:3000.

## Main library
- react (https://reactjs.org/)
- redux (https://redux.js.org/basics/usage-with-react)
- axios (https://github.com/axios/axios)
- eslint (https://www.npmjs.com/package/eslint) 
- css-loader (https://www.npmjs.com/package/css-loader)
- style-loader (https://www.npmjs.com/package/style-loader)
- file-loader (https://www.npmjs.com/package/file-loader)

## Note
- This project is a reactive web production using the <b>Next js</b> Framework.
- Using <b>Functional component</b> + <b>React Hooks</b>
- Using <b>Typescript</b> + <b>ESLINT</b>
- Using <b>Redux</b> with Thunk(https://www.npmjs.com/package/redux-thunk) and StoreLogger middleware
<br> (Possible replacement of Hooks context, reducer or Apollo later.)
- Only create a container when you need to use <b>Redux</b>.
- Specifying the URL for each environment variable in <b>app.properties.js</b>
- <b>AXIOS</b> was used to communicate with the server.
<br>(Ref : https://github.com/decompanyio/decompanyio-front-end/tree/master/src/service)

- Communicate with all servers through <b>repos.ts</b>
<br>(Ref : https://github.com/decompanyio/decompanyio-front-end/blob/master/src/redux/MainRepository.js)

- Applied to <b>model</b> for all <b>GET response data</b> 
<br>(Ref : https://github.com/decompanyio/decompanyio-front-end/tree/master/src/redux/model)  

- <b>SCSS</b> was used. 
<br>(Ref : https://github.com/decompanyio/decompanyio-front-end/blob/master/src/assets/scss/index.scss)
- Using option <b>CSS modules</b> (easy to manage styles based component ) 
- Using <b>Graph QL</b> (Including queries in REST API request body until the introduction of Apollo))