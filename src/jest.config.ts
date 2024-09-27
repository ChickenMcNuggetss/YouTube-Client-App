import type { Config } from 'jest';

const { defaultTransformerOptions } = require('jest-preset-angular/presets');

const jestConfig: Config = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  transformIgnorePatterns: ['node_modules/(?!@angular|@ngrx)'],
  transform: {
    '^.+\\.(ts|js|mjs|html|svg)$': [
        'jest-preset-angular',
        {
            ...defaultTransformerOptions,
            tsconfig: '<rootDir>/tsconfig.spec.json',
            stringifyContentPathRegex: '\\.(html|svg)$',
            isolatedModules: true,
        },
    ],
},
};

export default jestConfig;