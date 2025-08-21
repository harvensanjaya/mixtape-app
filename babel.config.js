module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      // Uncomment baris berikut jika kamu pakai react-native-reanimated
      // 'react-native-reanimated/plugin',
    ],
  };
};