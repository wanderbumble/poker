module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "jest": true
    },
    "extends": ["eslint:recommended", "plugin:react/recommended"],
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaVersion": 8,
        "ecmaFeatures": {
            "globalReturn": true,
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module",
        "allowImportExportEverywhere": false,
        "codeFrame": false
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "strict": 0,
        "no-console":0,
        "indent": [
            "error",
            4
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "warn",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ]
    }
};
