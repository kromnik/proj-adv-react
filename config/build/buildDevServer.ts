import { BuildOptions } from "./types/config";
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
  return {
    port: options.port,
    open: true,
    historyApiFallback: true,
<<<<<<< HEAD
    hot: true,
=======
>>>>>>> 04a2f6e002a10541698645d835b5044e5f544366
  }
}