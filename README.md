# cra-template-dongkyuuuu

[![npm version](https://badge.fury.io/js/cra-template-dongkyuuuu.svg)](https://badge.fury.io/js/cra-template-dongkyuuuu)

_cra-template-redux-typescript(v1.0.1)_ 를 기반으로 작성하였습니다.

이 템플릿은 *react-app-rewired*을 사용해 **실행, 빌드** 합니다.

<br/>

## Create

Using **npx**:

```sh
npx create-react-app my-app --template dongkyuuuu
```

Using **npm**:

```sh
npm init react-app my-app --template dongkyuuuu
```

Using **Yarn**:

```sh
yarn create react-app my-app --template dongkyuuuu
```

<br/>

## Usage

Path alias:

```javascript
//  @는 src 폴더를 의미합니다.

import "@/Components/App";
```

Axios Interceptor:

```javascript
// src/Helpers/AxiosInterceptor.ts

import axios from "axios"

axios.interceptors.request.use(
    function(config){
        // before request success
    }
    function(error){
        // before request error
    }
)

axios.interceptors.response.use(
  function (response) {
    // http status === 200, .then()
    return response;
  },
  function (error) {
    //   http status !== 200, .catch()
    return Promise.reject(error);
  }
);
```

<br/>

## Dependencies

| Name                       | Version |
| -------------------------- | :-----: |
| `@reduxjs/toolkit`         | ^1.5.0  |
| `react-redux`              | ^7.2.2  |
| `redux-logger`             | ^3.0.6  |
| `react-router-dom`         | ^5.2.0  |
| `react-app-rewired`        | ^2.1.8  |
| `react-app-rewire-alias`   | ^1.0.1  |
| `styled-components`        | ^5.2.1  |
| `normalize.css`            | ^8.0.1  |
| `axios`                    | ^0.21.1 |
| `@types/react-redux`       | ^7.1.16 |
| `@types/redux-logger`      | ^3.0.8  |
| `@types/react-router-dom`  | ^5.1.7  |
| `@types/styled-components` | ^5.1.7  |
