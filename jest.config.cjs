// jest.config.cjs
module.exports = {
  runner: 'jest-runner',
  testEnvironment: 'node',
  transform: {
    "^.+\\.[t|j]sx?$": "babel-jest"
  }
};

