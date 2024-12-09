const BABEL_ENV = process.env.BABEL_ENV;
const isCommonJS = BABEL_ENV !== undefined && BABEL_ENV === 'cjs';
const isESM = BABEL_ENV !== undefined && BABEL_ENV === 'esm';

module.exports = () => ({
  presets: [
    ['@babel/preset-typescript'],
    [
      '@babel/env',
      {
        bugfixes: true,
        loose: true,
        modules: isCommonJS ? 'commonjs' : false,
        targets: {
          esmodules: isESM ? true : undefined,
          chrome: 70,
        },
      },
    ],
  ],
});








// module.exports = function (api) {
//   // Avoid configuring cache multiple times
//   api.cache(true);  // This will cache the result for better performance

//   const presets = [
//     [
//       "@babel/preset-env",
//       {
//         targets: {
//           node: "current",
//         },
//         modules: api.env("cjs") ? "commonjs" : false, // Use CommonJS for CJS builds, ESM otherwise
//       },
//     ],
//   ];

//   return { presets };
// };
