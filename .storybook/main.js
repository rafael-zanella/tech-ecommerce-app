const path = require("path");


module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],

  /* https://github.com/storybookjs/storybook/issues/11989#issuecomment-715524391 */
  webpackFinal: (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname, '../src/')
    return config;
  },
}