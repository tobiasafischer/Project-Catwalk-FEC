import { join } from 'path';
import autoprefixer from 'autoprefixer';

const SRC_DIR = join(__dirname, '/client/src');
const DIST_DIR = join(__dirname, '/client/dist');
export const devtool = 'source-map';
export const entry = `${SRC_DIR}/index.jsx`;
export const output = {
  filename: 'bundle.js',
  path: DIST_DIR,
};
export const resolve = {
  extensions: ['*', '.js', '.jsx', '.scss'],
};
export const module = {
  rules: [
    {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      options: {
        presets: [
          '@babel/preset-react',
        ],
      },
    },
    {
      test: /\.(jpe?g|png|gif|svg)$/i,
      loader: 'file-loader',
      options: {
        name: '[path][name].[ext]',
      },
    },
    {
      test: /\.(sass|css|scss)$/,
      use: [
        'style-loader',
        'css-loader',
        {
          loader: 'postcss-loader',
          options: {
            plugins: () => [
              autoprefixer(),
            ],
          },
        },
        'sass-loader',
      ],
    },
  ],
};
