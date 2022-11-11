import { merge } from 'webpack-merge';
import baseConfig from './webpack.common';

export default merge(baseConfig, {
  mode: 'production',
  devtool: 'inline-source-map'
});
