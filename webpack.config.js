const {share, withModuleFederationPlugin} = require('@angular-architects/module-federation/webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const config = withModuleFederationPlugin({
  name: 'mfe',
  filename: 'private/remoteEntry.js',
  exposes: {
    './Module': './src/app/main/main.module.ts',
  },
  shared: share({
    "@ionic/angular": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
    "@ionic/core": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
    "@angular/core": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
    "@angular/common": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
    "@angular/router": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
    "@angular/common/http": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
    "@ngrx/store": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
    "@ngrx/effects": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
    "@ngrx/store-devtools": { singleton: true, strictVersion: true, requiredVersion: 'auto' }
  })
});
config.plugins.push(
    new MiniCssExtractPlugin({
        filename: (pathData) => {
            if (pathData.chunk && pathData.chunk.name === 'styles') {
                return 'styles.css';
            }
            return '[name].[contenthash].css';
        },
        chunkFilename: '[id].[contenthash].css',
    })
);

config.resolve.alias = {
    styles: path.join(__dirname, 'src/styles.scss'),
};

module.exports = config;
module.exports = config;
