// rollup.config.js
import typescript from "rollup-plugin-typescript2"

export default {
  input: 'src/index.ts',
  output: {
    file: 'dist/preact-nativescript-components.js',
    format: 'cjs'
  },
  plugins: [
    typescript()
  ],
  external: ["preact-to-nativescript"]
};