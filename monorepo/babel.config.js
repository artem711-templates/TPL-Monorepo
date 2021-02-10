module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            // Libraries
            '@lib/config': ['./libs/config/src'],
            '@lib/translator': ['./libs/translator/src'],
            // Mobile
            // '~/mobile/*': ['./apps/mobile/src/*'],
          },
        },
      ],
      [
        'babel-plugin-root-import',
        {
          rootPathPrefix: '~/mobile',
          rootPathSuffix: './apps/mobile/src',
        },
      ],
      'react-native-reanimated/plugin',
    ],
  }
}
