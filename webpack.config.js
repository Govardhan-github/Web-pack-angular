const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm


module.exports = {
    entry: "./src/main.ts",

    module: {
        rules: [
            {
                test: /\.svg$/,
                use: 'svg-inline-loader'
            },
            {
                test: /\.html$/i,
                loader: "html-loader",
              },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test:/\.(js)$/,
                use:"babel-loader"
            },
            
             // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
                { test: /\.tsx?$/, loader: "ts-loader" }
        
        ]
    },
    output : {

        path:path.resolve(__dirname,'dist'),
        filename : "bundle.js"
    },
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: [".ts", ".tsx", ".js"]
      },
    plugins: [new HtmlWebpackPlugin()],
    mode : process.env.NODE_ENV=== "production" ? "production" : "development"
};
 

