# 📦 webpack Boilerplate

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Get Started
### Check node and npm installation
```bash
node -v
npm -v
```
### Clone the project
```shell
git clone https://github.com/whatthei/webpack-5-static-boilerplate
cd webpack-5-static-boilerplate/
```
### Install the dependencies
```shell
npm i
```

## Usage

### Run production build
```shell
npm run build
```

### Run development build
```shell
npm run dev
```

### Run development server
```shell
npm run serve
```
## Dependencies and Features
#### webpack
- [`webpack`](https://github.com/webpack/webpack) - Module and asset bundler.
- [`webpack-cli`](https://github.com/webpack/webpack-cli) - Command line interface for webpack
- [`webpack-dev-server`](https://github.com/webpack/webpack-dev-server) - Development server for webpack
- [`webpack-merge`](https://github.com/survivejs/webpack-merge) - Simplify development/production configuration
- [`clean-webpack-plugin`](https://github.com/johnagan/clean-webpack-plugin) - Remove/clean build folders
- [`progress-bar-webpack-plugin`](https://github.com/clessg/progress-bar-webpack-plugin) - Displaying compilation progress
#### Babel
- [`@babel/core`](https://www.npmjs.com/package/@babel/core) - Transpile ES6+ to backwards compatible JavaScript
- [`babel-loader`](https://webpack.js.org/loaders/babel-loader/) - Transpile files with Babel and webpack
- [`@babel/preset-env`](https://babeljs.io/docs/en/babel-preset-env) - Smart defaults for Babel
#### SASS and PostCSS
- [`Sass`](https://sass-lang.com/) - Sass
  - [`sass-loader`](https://webpack.js.org/loaders/sass-loader/) - Load SCSS and compile to CSS
- [`PostCSS`](https://postcss.org/)
  - [`postcss-loader`](https://webpack.js.org/loaders/postcss-loader/) - Process CSS with PostCSS
  - [`postcss-preset-env`](https://www.npmjs.com/package/postcss-preset-env) - Sensible defaults for PostCSS
- [`css-loader`](https://webpack.js.org/loaders/css-loader/) - Resolve CSS imports
- [`style-loader`](https://webpack.js.org/loaders/style-loader/) - Inject CSS into the DOM
- [`mini-css-extract-plugin`](https://github.com/webpack-contrib/mini-css-extract-plugin) - Extract CSS into separate files
#### Pug and HTML
- [`Pug`](https://pugjs.org/api/getting-started.html) - Pug
- [`pug-loader`](https://github.com/pugjs/pug-loader) - Load Pug and compile to HTML
- [`html-webpack-plugin`](https://github.com/jantimon/html-webpack-plugin) - Generate HTML files from template
## License

This project is open source and available under the [MIT License](LICENSE).