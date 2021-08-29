import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  verbose: true,
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/src/jest-setup.ts"],
  transform: {
    "^.+\\.[t|j]sx?$": "babel-jest",
  },
};

export default config;
