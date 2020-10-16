// .storybook/main.js
const path = require('path')

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/preset-create-react-app',
  ],
  webpackFinal: async (config) => {
    config.resolve.alias['@devfest'] = path.resolve('src')
    return config
    // config.module.rules.push({
    //   test: /\.(ts|tsx)$/,
    //   include: path.resolve(__dirname, "../src"),
    //   use: [
    //     // There is also a second option in documentation to use babel instead of ts-loader which should also work
    //     {
    //       loader: require.resolve('ts-loader'),
    //     },
    //     {
    //       loader: require.resolve('react-docgen-typescript-loader'),
    //       options: {
    //         tsconfigPath: path.resolve(__dirname, "../tsconfig.json")
    //       }
    //     }
    //   ],
    // })
    // config.resolve.extensions.push('.ts', '.tsx');
  },
}
