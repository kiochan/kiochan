// @ts-check
// TODO: "require('@kiochan/next-ui-portal')" didn't work
const { generateTailwindConfig } = require('../../lib/next-ui-portal');

/** @type {import('tailwindcss').Config} */
module.exports = generateTailwindConfig(__dirname);
