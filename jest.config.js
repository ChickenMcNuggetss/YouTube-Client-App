const { defaultTransformerOptions } = require('jest-preset-angular/presets');

module.exports = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/src/setup-jest.ts'],
  transformIgnorePatterns: ['node_modules/(?!@angular|@ngrx)'],
  transform: {
    '^.+\\.(ts|js|mjs|html|svg)$': [
        'jest-preset-angular',
        {
            ...defaultTransformerOptions,
            tsconfig: './tsconfig.spec.json',
            stringifyContentPathRegex: '\\.(html|svg)$',
            isolatedModules: true,
        },
    ],
},
};