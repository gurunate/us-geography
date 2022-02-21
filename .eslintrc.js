module.exports = {
    parser: 'babel-eslint',
    plugins: ['prettier'],
    extends: [
        'airbnb',
        'plugin:prettier/recommended',
        'plugin:react-hooks/recommended'
    ],
    globals: {
        expect: true,
        window: true,
        document: true,
        it: true,
        describe: true,
        afterEach: true,
        after: true,
        before: true,
        beforeEach: true,
        jest: true,
        React: true,
        BigInt: true,
        Event: true
    },
    rules: {
        indent: 0,
        'no-underscore-dangle': 0,
        'react/jsx-indent': 0,
        'react/jsx-indent-props': 0,
        'no-restricted-syntax': 0,
        'import/prefer-default-export': 0,
        'react/jsx-filename-extension': 0,
        'react/jsx-props-no-spreading': 0,
        'react/jsx-curly-newline': 0,
        'import/no-named-as-default-member': 0,
        'import/no-named-as-default': 0,
        'react/destructuring-assignment': 0,
        'react/jsx-one-expression-per-line': 'off',
        'prettier/prettier': 'error',
        'react/jsx-wrap-multilines': 0,
        'no-irregular-whitespace': 0,
        'no-use-before-define': 1,
        'jsx-a11y/anchor-is-valid': 1,
        'react/no-array-index-key': 1,
        'react/forbid-prop-types': 0,
        'react/prop-types': 1,
        'react-hooks/exhaustive-deps': 0,
        'react-hooks/rules-of-hooks': 'error',
        'class-methods-use-this': 0,
        'import/no-extraneous-dependencies': [
            'error',
            { devDependencies: ['.storybook/**', 'stories/**'] }
        ]
    }
};
