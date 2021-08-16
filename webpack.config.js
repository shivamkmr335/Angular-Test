module.exports = {
    module: {
        rules: [
            {
                test: /\.scss$/,
                loader: 'postcss-loader',
                options: {
                    postcssOptions: {
                        indent: 'postcss',
                        syntax: 'postcss-scss',
                        plugins: [
                            require('postcss-import'),
                            require('tailwindcss'),
                            require('autoprefixer'),
                        ]
                    }
                }
            }
        ]
    }
}