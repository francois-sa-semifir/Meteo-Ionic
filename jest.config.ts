import type { Config } from 'jest';

const config: Config = {
    preset: 'jest-preset-angular',
    setupFilesAfterEnv: ['<rootDir>/src/setup-jest.ts'],
    testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/dist/', '<rootDir>/cypress/', '<rootDir>/src/test.ts'],
    transformIgnorePatterns: ['node_modules/(?!(@angular|@ionic|ionicons|@stencil|tslib)/)'],
    moduleNameMapper: {
        '^src/(.*)$': '<rootDir>/src/$1',
        '^ionicons/components/(.*)$': '<rootDir>/node_modules/ionicons/components/$1',
    },
};

export default config;
