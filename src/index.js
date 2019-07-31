const { appendWebpackPlugin } = require('@rescripts/utilities');
const ServiceWorkerWebpackPlugin = require('serviceworker-webpack-plugin');

export default function rescriptSWPlugin(swPluginOptions = {}) {
  return config => {
    const nextConfig = appendWebpackPlugin(new ServiceWorkerWebpackPlugin(swPluginOptions), config);
    return nextConfig;
  };
}
