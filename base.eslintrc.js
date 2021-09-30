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
        'plugin:react/recommended',
        'react-hooks',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    settings: {
        react: {
            createClass: 'createReactClass',
            pragma: 'React',
            fragment: 'Fragment',
            version: 'detect',
        },
    },
    rules: {
        indent: 'off',
        semi: ['error', 'always'],
        'comma-dangle': 'off',
        quotes: ['error', 'single', { allowTemplateLiterals: true, avoidEscape: true }],
        'space-before-function-paren': [
            'error',
            {
                anonymous: 'always',
                named: 'never',
                asyncArrow: 'always',
            },
        ],
        'no-use-before-define': 'off',
        'no-unused-expressions': 'off',
        'no-empty-pattern': 'off',
        camelcase: 'warn',
        'spaced-comment': 'off',

        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/no-inferrable-types': 'off',
        '@typescript-eslint/consistent-type-assertions': 'error',
        '@typescript-eslint/no-unused-vars': [2, { vars: 'all', args: 'after-used' }],
        '@typescript-eslint/no-unused-expressions': ['error'],
        '@typescript-eslint/ban-types': 'off',
        '@typescript-eslint/no-empty-interface': 'warn',

        'react/forbid-component-props': 'off',
        'react/display-name': 'off',
        'react/prop-types': 'off',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
    },
    overrides: [
        {
            files: ['*.tsx', '*.ts'],
            rules: {},
        },
        {
            files: ['*.js', '*.jsx'],
            rules: {
                '@typescript-eslint/no-var-requires': 'off',
            },
        },
    ],
};
