import axios from "axios";

export default function setup() {
  // 요청 인터셉터 추가
  axios.interceptors.request.use(
    function (config) {
      // 요청 성공 직전 호출
      return config;
    },
    function (error) {
      // 요청 에러 직전 호출
      return Promise.reject(error);
    }
  );

  // 응답 인터셉터 추가
  axios.interceptors.response.use(
    function (response) {
      // http status === 200, .then()으로 연결
      return response;
    },
    function (error) {
      //   http status !== 200, .catch()로 연결
      return Promise.reject(error);
    }
  );
}
