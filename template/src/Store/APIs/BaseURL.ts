const BASE_URL = {
  production: "",
  devleopment: "",
  test: "",
} as const;

export default BASE_URL[process.env.NODE_ENV];
