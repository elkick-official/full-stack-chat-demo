import { Configuration, DefinePlugin } from "webpack";
interface IDevServerConfiguration {
  port: number;
  hot?: boolean;
  historyApiFallback?: boolean;
  open?: boolean;
}
export const envConfig: Configuration & {
  devServer?: IDevServerConfiguration;
} = {
  mode: "development",
  devtool: "source-map",
  devServer: {
    port: 3000,
    hot: true,
    historyApiFallback: true,
    open: true,
  },
  plugins: [
    new DefinePlugin({
      "process.env.REACT_APP_NAME": JSON.stringify("Private Chat Application"),
      "process.env.REACT_APP_MODE": JSON.stringify("development"),
      "process.env.REACT_APP_API_URL": JSON.stringify(
        "http://192.168.1.176:1999/api"
      ),
      "process.env.REACT_APP_API_IMAGE_URL": JSON.stringify(
        "http://192.168.1.176:1999/public/"
      ),
      "process.env.REACT_APP_SOCKET_URL": JSON.stringify(
        "http://192.168.1.176:1999"
      ),
    }),
  ],
};
