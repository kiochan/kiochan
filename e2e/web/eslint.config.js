// eslint.config.js
const playwright = require('eslint-plugin-playwright')
const baseConfig = require('../../eslint.config.base')

module.exports = [playwright.configs['flat/recommended'], ...baseConfig]
