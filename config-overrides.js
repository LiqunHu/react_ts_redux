const { override, fixBabelImports, addWebpackAlias } = require('customize-cra');
const path = require("path");

const pkg = override(
    addWebpackAlias({
        // add your alias
        ['@']: path.resolve(__dirname, './src')
    })
)
module.exports = pkg
