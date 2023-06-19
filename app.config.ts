import { version } from './package.json'

module.exports = {
  expo: {
    updates: {
      url: 'https://u.expo.dev/e490c515-a5f2-487e-82a4-aaa7efb8bf4b',
    },
    runtimeVersion: {
      policy: 'sdkVersion',
    },
    extra: {
      eas: {
        projectId: 'e490c515-a5f2-487e-82a4-aaa7efb8bf4b',
      },
    },
    name: 'track solar',
    slug: 'track-solar',
    version: version,
    orientation: 'portrait',
    icon: './assets/icon.png',
    userInterfaceStyle: 'light',
    splash: {
      image: './assets/splash.png',
      resizeMode: 'contain',
      backgroundColor: '#14B8A6',
    },
    assetBundlePatterns: ['**/*'],
    ios: {
      supportsTablet: true,
    },
    android: {
      package: 'track.solar.app',
      adaptiveIcon: {
        foregroundImage: './assets/adaptive-icon.png',
        backgroundColor: '#14B8A6',
      },
    },
  },
}
