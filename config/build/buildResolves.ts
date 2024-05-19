import webpack from "webpack";
<<<<<<< HEAD
import { BuildOptions } from "./types/config";

export function buildResolves(options: BuildOptions): webpack.ResolveOptions {
  return {
    extensions: [".tsx", ".ts", ".js"],
    preferAbsolute: true,
    modules: [options.paths.src, 'node_modules'],
    mainFiles: ['index'],
    alias: {},
=======

export function buildResolves(): webpack.ResolveOptions {
  return {
    extensions: [".tsx", ".ts", ".js"],
>>>>>>> 04a2f6e002a10541698645d835b5044e5f544366
  };
}
