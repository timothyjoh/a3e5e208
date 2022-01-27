const nextJest = require('next/jest')

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
})

// Add any custom config to be passed to Jest
const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  // if using TypeScript with a baseUrl set to the root directory then you need the below for alias' to work
  moduleDirectories: ['node_modules', '<rootDir>/'],
  moduleNameMapper: {
    "@graphql/(.*)": "<rootDir>/graphql/$1",
    "@styles/(.*)": "<rootDir>/styles/$1",
    "@src/(.*)": "<rootDir>/src/$1",
    "@pages/(.*)": "<rootDir>/pages/$1",
    "@public/(.*)": "<rootDir>/public/$1",
  },
  testEnvironment: 'jest-environment-jsdom',
  testMatch: [ "**/tests/jest/**/*.[jt]s?(x)", "**/src/?(*.)+(spec|test).[jt]s?(x)", "**/pages/?(*.)+(spec|test).[jt]s?(x)" ]
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig)
