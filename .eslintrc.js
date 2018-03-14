module.exports = {
		"extends": "airbnb",
		"parser": "babel-eslint",
    "rules": {
			"comma-dangle": ["error", "never"],
			"react/no-unused-state": 0,
			"react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
			"react/prefer-stateless-function": "off",
			"global-require": 0,
		},
		"env": {
			"browser": "true",
		}

};