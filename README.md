# rescript-service-worker-loader

Enable serviceworker-webpack-plugin for your create-react-app project.

## Usage

```shell
npm i -D rescript-service-worker-loader
```

Set up rescript [as how its document said](https://github.com/harrysolovay/rescripts#2-define-a-rescripts-field-and-specify-which-to-use), then add `'service-worker-loader'` to the list, for example in [my](https://github.com/linonetwo/ipfs-browser-gateway/blob/master/.rescriptsrc.js) `.rescriptsrc.js`:

```js
const path = require('path');

module.exports = [
  ['use-babel-config', '.babelrc'],
  ['use-eslint-config', '.eslintrc'],
  'disable-eslint',
  [
    'service-worker-loader',
    {
      entry: path.join(__dirname, 'src/IPFSServiceWorkerGateway/index.js'),
      publicPath: process.env.NODE_ENV === 'development' ? '/' : '/ipfs-browser-gateway/',
    },
  ],
];

```
