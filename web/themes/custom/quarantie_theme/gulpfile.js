const {src, dest, parallel, watch} = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');


let path = {
  build: {
    css: "css/",
  },
  src: {
    css: "scss/style.scss",
  },
  watch: {
    css: "scss/**/*.scss",
  }
}

function styles() {
  return src([path.src.css])
    .pipe(sass())
    .pipe(autoprefixer({ overrideBrowserslist: ['last 10 versions'], grid: true }))
    .pipe(dest(path.build.css))
}


function startwatch() {
  watch(path.watch.css, styles);

}

exports.styles = styles;
exports.default = parallel(styles, startwatch);
