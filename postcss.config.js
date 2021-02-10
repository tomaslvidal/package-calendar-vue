module.exports = {
    plugins: [
        require('precss'),
        require("tailwindcss")("./tailwind.config.js"),
        require('autoprefixer')
    ]
};