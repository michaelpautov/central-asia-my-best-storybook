// .storybook/main.js
const path = require("path")

module.exports = {
  stories: ['../src/**/*.stories.@(ts|tsx|js|jsx)'],
  webpackFinal: async config => {
    config.resolve.alias['@asia'] = path.resolve('src')
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      include: path.resolve(__dirname, "../src"),
      use: [
        // There is also a second option in documentation to use babel instead of ts-loader which should also work
        {
          loader: require.resolve('ts-loader'),
        },
        {
          loader: require.resolve('react-docgen-typescript-loader'),
          options: {
            tsconfigPath: path.resolve(__dirname, "../tsconfig.json")
          }
        }
      ],
    })
    config.resolve.extensions.push('.ts', '.tsx');
    return config
  },
  addons: [
    '@storybook/addon-docs'
  ]
}
