module.exports = {
    "extends": "airbnb",
    "parser": "babel-eslint",
    "rules": {
			"comma-dangle": ["error", "never"],
			"react/no-unused-state": 0,
			"react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
			"react/prefer-stateless-function": "off",
			"global-require": 0,
			"no-underscore-dangle": 0,
			"no-console": 0,
			"no-class-assign": 0,
			"react/no-unused-prop-types": 0,
			"no-unused-vars": 0,
			"class-methods-use-this": 0
		},
		"env": {
			"browser": "true",
		}
};