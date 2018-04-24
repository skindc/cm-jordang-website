// rollup.config.js
//const scss = require('rollup-plugin-scss')
//
//
import babel from 'rollup-plugin-babel';

export default {
  entry: 'src/js/index.js',
  dest: 'dist/js/app-amd.js',
  format: 'amd',
  //external: [ 'd3' ],
  plugins: [
    babel({
      exclude: 'node_modules/**',
    }),
  ],
};
