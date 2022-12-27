import '@testing-library/jest-dom/extend-expect'

const nextJest = require('next/jest')
const createJestConfig = nextJest({ dir: './' })
const customJestConfig = {
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleDirectories: ['node_modules', '<rootDir>/src'],
  testEnvironment: 'jsdom',
}

module.esports = createJestConfig(customJestConfig)