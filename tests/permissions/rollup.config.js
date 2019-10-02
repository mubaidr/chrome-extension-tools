/* eslint-env node */

import { join } from 'path'
import pkg from './package.json'
import htmlInputs from '../../src/html-inputs/index'
import manifestInput from '../../src/manifest-input/index'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import emptyDir from 'rollup-plugin-empty-dir'

const fixture = (name) => join(__dirname, 'fixtures', name)

export default {
  input: fixture('src/manifest.json'),
  output: {
    dir: fixture('dest'),
    format: 'esm',
  },
  plugins: [
    manifestInput({ pkg }),
    htmlInputs(),
    resolve(),
    commonjs(),
    emptyDir(),
  ],
}
