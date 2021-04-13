const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
    entry: "./src/index.tsx",
    devtool: "inline-source-map",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {        
                test: /\.css$/,        
                use: ["style-loader", "css-loader"]      
            },            
        ]
    },
    watch: true,
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },
    plugins: [new Dotenv()],
}