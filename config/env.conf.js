const ENV_BUILD_TYPE = process.env.ENV_BUILD_TYPE || 'dev'

const PROD_ASSETS_PATH_MAP = {
  dev: 'http://192.168.45.191/dyWeb/',
  test: 'http://192.168.100.142/dyWeb/',
  online:'https://www.49capital.cn/dyWeb/'
}

const PROD_API_PATH_MAP = {
  dev: "http://192.168.45.191/api/dayan/dyWeb/",
  test: "http://192.168.100.142/api/dayan/dyWeb/",
  online: "https://www.49capital.cn/api/dayan/dyWeb/"
}

module.exports = {
  PROD_ASSETS_PATH: PROD_ASSETS_PATH_MAP[ENV_BUILD_TYPE],
  PROD_API_PATH: PROD_API_PATH_MAP[ENV_BUILD_TYPE]
}
