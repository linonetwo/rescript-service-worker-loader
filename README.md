# rescript-service-worker-loader

Enable web worker-loader for your create-react-app project.

## Usage

```shell
npm i -D rescript-service-worker-loader
```

Set up rescript [as how its document said](https://github.com/harrysolovay/rescripts#2-define-a-rescripts-field-and-specify-which-to-use), then add `'service-worker-loader'` to the list, for example:

```json
  "rescripts": [
    [
      "use-babel-config",
      ".babelrc.js"
    ],
    [
      "service-worker-loader",
      {
        entry: path.join(__dirname, "src/IPFSServiceWorkerGateway/index.js"),
        publicPath: process.env.NODE_ENV === "development" ? "/" : "/ipfs-browser-gateway/",
      },
    ]
  ],
```
