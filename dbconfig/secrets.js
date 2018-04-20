require('dotenv').load()


let MONGO_DB;
let BASEURL;

if (process.env.NODE_ENV == 'production') {
  MONGO_DB = process.env.MONGODB_PROD;
  BASEURL = process.env.BASEURL_PROD;
} else {
  MONGO_DB = process.env.MONGODB_DEV;
  BASEURL = process.env.BASEURL_DEV;
}

module.exports = {
  DATABASE: MONGO_DB,
  BASEURL: BASEURL,
  JWT_SECRET: process.env.JWT_SECRET
}
