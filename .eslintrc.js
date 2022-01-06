module.exports = {
    env: {
        node: true,
        es2021: true,
        jasmine: true,
    },
    extends: [
        'plugin:@typescript-eslint/recommended',
        'airbnb-base',
        'eslint:recommended',
        'prettier',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 13,
    },
    plugins: ['@typescript-eslint', 'prettier'],
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.ts'],
            },
        },
    },
    rules: {
        camelcase: 'off',
        'prefer-const': 'warn',
        'no-console': 'warn',
        'prettier/prettier': [
            'warn',
            {
                endOfLine: 'auto',
            },
        ],

        'no-var': 'error',
        'import/extensions': [
            'error',
            'ignorePackages',
            {
                ts: 'never',
            },
        ],
        'import/no-extraneous-dependencies': [
            'error',
            {
                devDependencies: true,
            },
        ],
        'class-methods-use-this': 'off',
    },
};
