/* export default function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
  };
};



export const presets = ['module:metro-react-native-babel-preset'];
export const plugins = [
  [
    'module-resolver',
    {
      root: ['./'],
      alias: {
        '@': './src',
      },
    },
  ],
  'react-native-reanimated/plugin',
]; */



module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
  };
};



module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '@': './src',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
}
