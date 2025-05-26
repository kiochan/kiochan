/* eslint-disable @nx/enforce-module-boundaries */
// eslint.config.js
import playwright from 'eslint-plugin-playwright'
import baseConfig from '../../eslint.config.base.js'

export default [playwright.configs['flat/recommended'], ...baseConfig]
