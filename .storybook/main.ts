import type { StorybookConfig } from '@storybook/react-webpack5'

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-webpack5-compiler-swc',
    '@storybook/addon-onboarding',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  webpackFinal: async (config) => {
    // Encuentra la regla existente que maneja los archivos CSS y agrégale el loader de PostCSS
    const cssRule = config.module.rules.find((rule) =>
      'test.css'.match(rule.test)
    )
    if (cssRule) {
      cssRule.use.push({
        loader: require.resolve('postcss-loader'),
        options: {
          postcssOptions: {
            plugins: [require('tailwindcss'), require('autoprefixer')],
          },
        },
      })
    }

    return config
  },
}
export default config
