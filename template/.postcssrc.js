// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": {
    "postcss-import": {},
    "postcss-url": {},
    // to edit target browsers: use "browserslist" field in package.json
    'postcss-pxtorem': {
      rootValue: 37.5,  //375
      propList: ['*']
    }
  }
}
