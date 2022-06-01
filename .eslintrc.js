module.exports = {
	root: true,
	env: {
		browser: true,
		commonjs: true,
		es6: true,
		node: true,
	},
	extends: ['eslint:recommended', 'plugin:prettier/recommended'],
	parserOptions: {
		parser: '@babel/eslint-parser',
		sourceType: 'module',
		ecmaVersion: 2017,
	},
};
