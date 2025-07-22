process.env.BUILD_TYPE = "production";

module.exports = {
  testEnvironmentOptions: {
    mappingStrategy: "ui5",
    configPath: "./ui5-test.yaml",
    useDebugSources: true,
  },
  testEnvironment: "@sap-ux/jest-environment-ui5",
};
