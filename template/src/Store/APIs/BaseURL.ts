const BASE_URL = {
  production: "",
  development: "",
  test: "",
} as const;

export default BASE_URL[process.env.NODE_ENV];
