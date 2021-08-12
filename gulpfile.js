const gulp = require("gulp");
const plumber = require("gulp-plumber");
const sourcemap = require("gulp-sourcemaps");
const less = require("gulp-less");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const serversync = require("browser-sync").create();

// style

const style = () => {
  return gulp.src("source/less/style.less")
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(less())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(sourcemap.write("."))
    .pipe(gulp.dest("source/css"))
    .pipe(serversync.stream());
}

exports.style = style;

//server

const server = (done) => {
  serversync.init({
    server: {
      baseDir: 'source'
    },
    cors: true,
    notify: false,
    ui: false,
  })
  done();
}

exports.server = server;

// watcher

const watcher = () => {
  gulp.watch("source/less/**/*.less", gulp.series("style"));
  gulp.watch("source/*.html").on("change", serversync.reload);
}

// default

exports.default = gulp.series(
  style, server, watcher
)
