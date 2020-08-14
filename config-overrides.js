const { override, fixBabelImports, addWebpackAlias } = require('customize-cra');
const path = require("path");

const pkg = override(
    fixBabelImports('import', {
        libraryName: 'antd',
        style: 'css',
    }),
    addWebpackAlias({
        // add your alias
        ['@']: path.resolve(__dirname, './src')
    })
)
module.exports = pkg
