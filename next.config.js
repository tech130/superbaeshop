// next.config.js
const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");

module.exports = withPlugins([
    [
        optimizedImages,
        {
            // these are the default values so you don't have to provide them if they are good enough for your use-case.
            // but you can overwrite them here with any valid value you want.
            inlineImageLimit: 8192,
            imagesFolder: "optimized-images",
            imagesName: "[name]-[hash].[ext]",
            handleImages: ["jpeg", "png", "svg", "webp"],
            removeOriginalExtension: false,
            optimizeImages: true,
            optimizeImagesInDev: false,
            mozjpeg: {
                quality: 80,
            },
            optipng: {
                optimizationLevel: 3,
            },
            pngquant: false,
            webp: {
                preset: "default",
                quality: 75,
            },
            responsive: {
                sizes: [175, 350, 700, 1050, 1080],
                placeholder: true,
                placeholderSize: 35,
            },
        },
    ],
]);
