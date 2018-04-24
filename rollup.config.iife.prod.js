import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import strip from 'rollup-plugin-strip';
import json from 'rollup-plugin-json';
import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';


export default {
  entry: 'src/js/index.js',
  dest: 'dist/js/app-iife.js',
  format: 'iife',
  external: [ 'd3', 'jQuery' ],
  //globals: { 'd3': 'd3' },
  plugins: [
    resolve({
      // use "module" field for ES6 module if possible
      module: true, // Default: true

      // use "jsnext:main" if possible
      // – see https://github.com/rollup/rollup/wiki/jsnext:main
      jsnext: true,  // Default: false

      // use "main" field or index.js, even if it's not an ES6 module
      // (needs to be converted from CommonJS to ES6
      // – see https://github.com/rollup/rollup-plugin-commonjs
      main: true,  // Default: true

      // some package.json files have a `browser` field which
      // specifies alternative files to load for people bundling
      // for the browser. If that's you, use this option, otherwise
      // pkg.browser will be ignored
      browser: true,  // Default: false

      // not all files you want to resolve are .js files
      extensions: [ '.js', '.json' ],  // Default: ['.js']

      // whether to prefer built-in modules (e.g. `fs`, `path`) or
      // local ones with the same names
      preferBuiltins: false,  // Default: true

      // Lock the module search in this path (like a chroot). Module defined
      // outside this path will be marked as external
      jail: '/my/jail/path', // Default: '/'

      // Set to an array of strings and/or regexps to lock the module search
      // to modules that match at least one entry. Modules not matching any
      // entry will be marked as external
      only: [ 'some_module', /^@some_scope\/.*$/ ], // Default: null

      // If true, inspect resolved files to check that they are
      // ES2015 modules
      modulesOnly: true, // Default: false

      // Any additional options that should be passed through
      // to node-resolve
      customResolveOptions: {
        moduleDirectory: 'js_modules'
      }
    }),
    commonjs(),
    strip({
      // set this to `false` if you don't want to
      // remove debugger statements
      //debugger: true,

      // defaults to `[ 'console.*', 'assert.*' ]`
      //functions: [ 'console.log', 'assert.*', 'debug', 'alert' ],

      // set this to `false` if you're not using sourcemaps –
      // defaults to `true`
      sourceMap: false
    }),

    //Json plugin does not work and can not parse keys as strings
    json({
      // All JSON files will be parsed by default,
      // but you can also specifically include/exclude files
      //include: 'node_modules/**',
      //exclude: [ 'node_modules/foo/**', 'node_modules/bar/**' ],
      exclude: [ 'node_modules/**'],

      // for tree-shaking, properties will be declared as
      // variables, using either `var` or `const`
      preferConst: true, // Default: false

      // specify indentation for the generated default export —
      // defaults to '\t'
      indent: '  '
    }),
    babel({
      exclude: 'node_modules/**',
    }),
    uglify()
  ],
};
