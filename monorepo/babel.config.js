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
            '@mobile/shared': ['./apps/mobile/src/shared'],
            '@mobile/redux': ['./apps/mobile/src/state'],
            '@mobile/cp/atoms': ['./apps/mobile/src/components/atoms'],
            '@mobile/cp/molecules': ['./apps/mobile/src/components/molecules'],
            '@mobile/cp/organisms': ['./apps/mobile/src/components/organisms'],
          },
        },
      ],
      'react-native-reanimated/plugin',
    ],
  }
}
