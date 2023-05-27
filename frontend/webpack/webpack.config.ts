import { merge } from "webpack-merge";
import commonConfig from "./webpack.common";
import { Configuration } from "webpack";

export default function webpackConfig(envVars: { env: string }): Configuration {
  const { env } = envVars;
  const { envConfig } = require(`./webpack.${env}.ts`);
  const config = merge(commonConfig, envConfig);
  return config;
}
