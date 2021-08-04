module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    plugins: ['prettier', '@typescript-eslint', 'react-hooks'],
    extends: [
        'standard',
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module',
    },
    rules: {
        indent: 'off',
        semi: ['error', 'always'],
        'comma-dangle': 'off',
        quotes: ['error', 'single', { allowTemplateLiterals: true }],
        'space-before-function-paren': [
            'error',
            {
                anonymous: 'always',
                named: 'never',
                asyncArrow: 'always',
            },
        ],
    },
    overrides: [
        {
            files: ['*.js', '*.jsx'],
            rules: {
                '@typescript-eslint/no-var-requires': 'off',
            },
        },
    ],
};
