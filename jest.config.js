module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    "./controllers/**/**/*.js",
    "!**/__tests__/**",
    "!node_modules/**",
    "!**/index.js",
  ],
  testMatch: [
    "**/__tests__/**",
    "!node_modules/**",
  ],
  reporters: [
    "default",
    [
      "jest-stare",
      {
        resultDir: "report/jest-stare",
        reportTitle: "jest-stare!",
        additionalResultsProcessors: ["jest-junit"],
        coverageLink: "../../coverage/lcov-report/index.html",
        jestStareConfigJson: "jest-stare.json",
        jestGlobalConfigJson: "globalStuff.json",
      },
    ],
  ],
};
