const mix = require('laravel-mix');
const glob = require('glob')
const path = require('path')

/*
 |--------------------------------------------------------------------------
 | Configure Webpack
 |--------------------------------------------------------------------------
 */

mix.webpackConfig({
    output: {
        libraryTarget: 'window'
    },
    module: {
        rules: [{
            test: /\.js$/,
            include: [
                path.join(__dirname, 'node_modules/bootstrap/'),
                path.join(__dirname, 'node_modules/bootstrap-slider/'),
                path.join(__dirname, 'node_modules/popper.js/'),
                path.join(__dirname, 'node_modules/bootstrap-table/'),
                path.join(__dirname, 'node_modules/shepherd.js/'),
                path.join(__dirname, 'node_modules/flot/')
            ],
            loader: 'babel-loader',
            options: {
                presets: [['@babel/preset-env', { targets: 'last 2 versions, ie >= 10' }]],
                plugins: ['@babel/plugin-transform-destructuring', '@babel/plugin-proposal-object-rest-spread', '@babel/plugin-transform-template-literals'],
                babelrc: false
            }
        }]
    },
    externals: {
        'jquery': 'jQuery',
        'moment': 'moment',
        'datatables.net': '$.fn.dataTable',
        'spin.js': 'Spinner',
        'jsdom': 'jsdom',
        'd3': 'd3',
        'eve': 'eve',
        'velocity': 'Velocity',
        'hammer': 'Hammer',
        'raphael': 'Raphael',
        'jquery-mapael': 'Mapael',
        'pace': '"pace-progress"',
        'popper.js': 'Popper',
        'jquery-validation': 'jQuery',

        // blueimp-file-upload plugin
        'canvas-to-blob': 'blueimpDataURLtoBlob',
        'blueimp-tmpl': 'blueimpTmpl',
        'load-image': 'blueimpLoadImage',
        'load-image-meta': 'null',
        'load-image-scale': 'null',
        'load-image-exif': 'null',
        'jquery-ui/ui/widget': 'null',
        './jquery.fileupload': 'null',
        './jquery.fileupload-process': 'null',
        './jquery.fileupload-image': 'null',
        './jquery.fileupload-video': 'null',
        './jquery.fileupload-validate': 'null',

        // blueimp-gallery plugin
        './blueimp-helper': 'jQuery',
        './blueimp-gallery': 'blueimpGallery',
        './blueimp-gallery-video': 'blueimpGallery'
    }
})

/*
 |--------------------------------------------------------------------------
 | Vendor assets
 |--------------------------------------------------------------------------
 */

function mixAssetsDir(query, cb) {
    (glob.sync('resources/assets/' + query) || []).forEach(f => {
        f = f.replace(/[\\\/]+/g, '/');
        cb(f, f.replace('resources/assets', 'public'));
    });
}

const sassOptions = {
    implementation: () => require('node-sass')
};

// Core stylesheets
mix.sass('resources/assets/vendor/sass/bootstrap.scss', 'public/vendor/css', sassOptions)
   .sass('resources/assets/vendor/sass/appwork.scss', 'public/vendor/css', sassOptions)
   .sass('resources/assets/vendor/sass/theme-corporate.scss', 'public/vendor/css', sassOptions)
   .sass('resources/assets/vendor/sass/colors.scss', 'public/vendor/css', sassOptions)
   .sass('resources/assets/vendor/sass/uikit.scss', 'public/vendor/css', sassOptions);

// Core javascripts
mixAssetsDir('vendor/js/**/*.js', (src, dest) => mix.js(src, dest));
mixAssetsDir('vendor/css/**/*.css', (src, dest) => mix.postCss(src, dest));

// Libs
mixAssetsDir('vendor/libs/**/*.js', (src, dest) => mix.js(src, dest));
mixAssetsDir('vendor/libs/**/*.css', (src, dest) => mix.postCss(src, dest));
mixAssetsDir('vendor/libs/**/!(_)*.scss', (src, dest) => mix.sass(src, dest.replace(/\.scss$/, '.css'), sassOptions));

// Pages
mixAssetsDir('vendor/sass/pages/**/!(_)*.scss', (src, dest) => mix.sass(src, dest.replace(/(\\|\/)sass(\\|\/)/, '$1css$2').replace(/\.scss$/, '.css'), sassOptions));

// Fonts
mixAssetsDir('vendor/fonts/*.css', (src, dest) => mix.copy(src, dest));
mixAssetsDir('vendor/fonts/*/*', (src, dest) => mix.copy(src, dest));

/*
 |--------------------------------------------------------------------------
 | Application assets
 |--------------------------------------------------------------------------
 */

mix.js('resources/assets/js/application.js', 'public/js/application.js')
    .js([
            'resources/assets/js/material-ripple.js',
            'resources/assets/js/layout-helpers.js',
            'resources/assets/js/theme-settings.js',
        ],  'public/js/common.js')
    .js([
            'resources/assets/libs/popper/popper.js',
            'resources/assets/libs/bootstrap.js',
            'resources/assets/js/sidenav.js',
        ],  'public/js/core.js')
    .js([
            'resources/assets/libs/datatables/datatables.js',
            'resources/assets/libs/swiper/swiper.js',
            'resources/assets/libs/sweetalert2/sweetalert2.js',
            'resources/assets/libs/growl/growl.js',
            'resources/assets/libs/bootstrap-select/bootstrap-select.js',
            'resources/assets/libs/select2/select2.js',
            'resources/assets/libs/bootstrap-tagsinput/bootstrap-tagsinput.js',
            'resources/assets/libs/summernote-bs4/summernote-bs4.min.js',
        ],  'public/js/libs.js')
 
    .postCss('resources/assets/css/application.css', 'public/css/application.css')
    .styles([
        'resources/assets/css/bootstrap.css',
        'resources/assets/css/appwork.css',
        'resources/assets/css/theme-corporate.css',
        'resources/assets/css/colors.css',
        'resources/assets/css/uikit.css',
        'resources/assets/css/contacts.css',
        'resources/assets/css/authentication.css',
    ],  'public/css/common.css')
    .styles([
        'resources/assets/libs/datatables/datatables.css',
        'resources/assets/libs/swiper/swiper.css',
        'resources/assets/libs/sweetalert2/sweetalert2.css',
        'resources/assets/libs/growl/growl.css',
        'resources/assets/libs/bootstrap-select/bootstrap-select.css',
        'resources/assets/libs/select2/select2.css',
        'resources/assets/libs/bootstrap-tagsinput/bootstrap-tagsinput.css',
        'resources/assets/libs/summernote-bs4/summernote-bs4.css',
    ],  'public/css/libs.css')
   .sass('resources/assets/sass/application.scss', 'public/css');

mix.version();
