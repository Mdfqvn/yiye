'use strict';

var path = require('path'),
  rootPath = path.normalize(__dirname + '/../..');

var year = 3600000 * 24 * 365;

module.exports = {
  root: rootPath,
  port: process.env.PORT || 3000,
  hostname: process.env.HOST || process.env.HOSTNAME,
  db: process.env.MONGOHQ_URL,
  templateEngine: 'swig',

  // The secret should be set to a non-guessable string that
  // is used to compute a session hash
  sessionSecret: 'MEAN',

  // The name of the MongoDB collection to store sessions in
  sessionCollection: 'sessions',

  // The session cookie settings
  sessionCookie: {
    path: '/',
    httpOnly: true,
    // If secure is set to true then it will cause the cookie to be set
    // only when SSL-enabled (HTTPS) is used, and otherwise it won't
    // set a cookie. 'true' is recommended yet it requires the above
    // mentioned pre-requisite.
    secure: false,
    // Only set the maxAge to null if the cookie shouldn't be expired
    // at all. The cookie will expunge when the browser is closed.
    maxAge: year
  },

  // The session cookie name
  sessionName: 'connect.sid',

  qiniu:{
      'ACCESS_KEY': 'am7vuItIuMzgttsMSlp7JjmE2DUUprpMDbwyE9I1',
      'SECRET_KEY': 'IYB9sMkirvxduK4TviDHREIiPNrzVyXUL9GiI_Q8',
      'Bucket_Name': 'yiye',
      'Uptoken_Url': '/uptoken',
      'Domain': 'http://yiye.qiniudn.com/'
  }
};
