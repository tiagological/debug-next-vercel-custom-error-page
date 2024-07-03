module.exports = {
    root: true,
    parserOptions: {
        ecmaVersion: 2020,
        project: ['tsconfig.json'],
        sourceType: 'module',
    },
    extends: ['next/core-web-vitals'],
    rules: {
        'import/extensions': [
            'error',
            'ignorePackages',
            {
                js: 'never',
                jsx: 'never',
                ts: 'never',
                tsx: 'never',
            },
        ],
    },
    env: {
        jest: true,
        browser: true,
    },
};
