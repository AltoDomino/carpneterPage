const path = require("path")
module.exports = {
    mode: 'development',
    entry: './changePage.ts',
    output: {
        path:path.resolve(__dirname,'dist'),
        filename: 'changePage.bundle.js',
    },
    module: {
        rules:[
            {
            test:/\.ts/,
            use: 'ts-loader',
            exclude: /node-modules/
            },
            {
            test:/\.css/,
            use: ['style-loader','css-loader'],
            exclude: /node-modules/
            }
        
        ],
    },
    resolve: {
        extensions : ['.ts', '.js'] ,
    }
}
