let MONGO_DB;
let BASEURL;

if (process.env.NODE_ENV == 'production') {
  MONGO_DB = process.env.MONGO_DB_PROD;
  BASEURL = process.env.BASEURL_PROD;
} else {
  MONGODB = process.env.MONGO_DB_DEV;
  BASEURL = process.env.BASEURL_DEV;
}

module.exports = {
  DATABASE: MONGO_DB,
  BASEURL: BASEURL,
  JWT_SECRET: process.env.JWT_SECRET
}
