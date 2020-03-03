const { override, fixBabelImports,addWebpackPlugin,addLessLoader   } = require('customize-cra');
const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin');
module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    // style: 'css',
    style: true,
  }),
  addWebpackPlugin(new AntdDayjsWebpackPlugin()),
  addLessLoader({
    javascriptEnabled: true,
  }),
);