# 🧰 webpack 5 Boilerplate

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

A starter webpack 5 boilerplate using Babel, Sass, PostCSS and Pug with a hot development server and optimized production build.

## Table of Contents
1. [Get Started](#get-started)
2. [Usage](#usage)
3. [Dependencies and Features](#dependencies-and-features)
4. [License](#license)

## Get Started
#### Check node and npm installation
```bash
node -v
npm -v
```
#### Clone the project
```shell
git clone https://github.com/whatthei/webpack-5-boilerplate
cd webpack-5-boilerplate/
```
#### Install the dependencies
```shell
npm i
```

## Usage
#### Run production build
```shell
npm run build
```
#### Run development build
```shell
npm run dev
```
#### Run development server
```shell
npm run serve
```

## Dependencies and Features
#### [`webpack`](https://webpack.js.org/)
- [`webpack`](https://github.com/webpack/webpack) - Module and asset bundler.
- [`webpack-cli`](https://github.com/webpack/webpack-cli) - Command line interface for webpack
- [`webpack-merge`](https://github.com/survivejs/webpack-merge) - Simplify development/production configuration
- [`webpack-dev-server`](https://github.com/webpack/webpack-dev-server) - Development server for webpack
- [`copy-webpack-plugin`](https://github.com/webpack-contrib/copy-webpack-plugin) - Copies individual files or entire directories, which already exist, to the build directory
- [`terser-webpack-plugin`](https://github.com/webpack-contrib/terser-webpack-plugin) - This plugin uses [`terser`](https://github.com/terser/terser) to minify your JavaScript.
- [`clean-webpack-plugin`](https://github.com/johnagan/clean-webpack-plugin) - Remove/clean build folders
- [`progress-bar-webpack-plugin`](https://github.com/clessg/progress-bar-webpack-plugin) - Displaying compilation progress
#### [`Babel`](https://babeljs.io/)
- [`babel-loader`](https://github.com/babel/babel-loader) - Transpile files with Babel and webpack
- [`@babel/core`](https://www.npmjs.com/package/@babel/core) - Transpile ES6+ to backwards compatible JavaScript
- [`@babel/preset-env`](https://www.npmjs.com/package/@babel/preset-env) - Smart defaults for Babel
#### [`Sass`](https://sass-lang.com/) and [`PostCSS`](https://postcss.org/)
- [`sass-loader`](https://github.com/webpack-contrib/sass-loader) - Load SCSS and compile to CSS
  - [`sass`](https://github.com/sass/dart-sass) - A command-line sass executable and a Node.js API
- [`postcss-loader`](https://github.com/webpack-contrib/postcss-loader) - Process CSS with PostCSS
  - [`postcss`](https://github.com/postcss/postcss) - A tool for transforming CSS
  - [`postcss-preset-env`](https://github.com/csstools/postcss-preset-env) - Sensible defaults for PostCSS
- [`css-loader`](https://github.com/webpack-contrib/css-loader) - Resolve CSS imports
- [`style-loader`](https://github.com/webpack-contrib/style-loader) - Inject CSS into the DOM
- [`mini-css-extract-plugin`](https://github.com/webpack-contrib/mini-css-extract-plugin) - Extract CSS into separate files
- [`css-minimizer-webpack-plugin`](https://github.com/webpack-contrib/css-minimizer-webpack-plugin/) - This plugin uses [`cssnano`](https://github.com/cssnano/cssnano) to optimize and minify your CSS
#### [`Pug`](https://pugjs.org/) and [`HTML`](https://www.w3.org/) 
- [`pug-loader`](https://github.com/pugjs/pug-loader) - Loads Pug templates and returns a function
  - [`pug`](https://github.com/pugjs/pug) - High-performance template
- [`html-loader`](https://github.com/pugjs/pug-loader) - Exports HTML as string, requires references to static resources
- [`html-webpack-plugin`](https://github.com/jantimon/html-webpack-plugin) - Generate HTML files from template
#### For example
- [`bootstrap 5`](https://github.com/twbs/bootstrap) - Front-end framework

## License
This project is open source and available under the [MIT License](https://opensource.org/licenses/MIT).