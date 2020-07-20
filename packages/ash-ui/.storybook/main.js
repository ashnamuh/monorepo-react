const path = require('path')

module.exports = {
  stories: ['../stories/*.stories.[tj]s[x]'],
  addons: [
    {
      name: '@storybook/preset-typescript',
      options: {
        tsLoaderOptions: {
          configFile: path.resolve(__dirname, '../tsconfig.json'),
        },
      }
    },
    '@storybook/addon-knobs/register',
    '@storybook/addon-storysource',
  ],
};