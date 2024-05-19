<<<<<<< HEAD
import MiniCssExtractPlugin from "mini-css-extract-plugin";
=======
import MiniCssExtractPlugin, { loader } from "mini-css-extract-plugin";
>>>>>>> 04a2f6e002a10541698645d835b5044e5f544366
import webpack from "webpack";
import { BuildOptions } from "./types/config";

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
<<<<<<< HEAD
  const svgLoader = {
    test: /\.svg$/,
    use: ["@svgr/webpack"],
  };

  const babelLoader = {
    test: /\.(js|jsx|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
      options: {
        presets: ["@babel/preset-env"],
      },
    },
  };

=======
>>>>>>> 04a2f6e002a10541698645d835b5044e5f544366
  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      // Creates `style` nodes from js strings
      isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      // Translates CSS into CommonJS
      {
        loader: "css-loader",
        options: {
          modules: {
            auto: (resPath: string) => resPath.includes(".module."),
            localIdentName: isDev
              ? "[path][name]__[local]--[hash:base64:5]"
              : "[hash:base64:8]",
          },
        },
      },
      // Compiles Sass to CSS
      "sass-loader",
    ],
  };

<<<<<<< HEAD
  // Если не используем тайпскрипт - нужен babel-loader
=======
>>>>>>> 04a2f6e002a10541698645d835b5044e5f544366
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

<<<<<<< HEAD
  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff2|woff)$/i,
    use: [
      {
        loader: "file-loader",
      },
    ],
  };

  return [
    fileLoader, 
    svgLoader,
    babelLoader, 
    typescriptLoader, 
    cssLoader];
=======
  return [typescriptLoader, cssLoader];
>>>>>>> 04a2f6e002a10541698645d835b5044e5f544366
}
