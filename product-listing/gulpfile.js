const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const babel = require('babelify');
const browserify = require('browserify')
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const minify = require('gulp-minifier');

gulp.task('scss', () => {
  return gulp.src('src/scss/main.scss')
  .pipe(sass().on('error', sass.logError))
  .on('error', swallowError)
  .pipe(gulp.dest('src/css'))
  .pipe(browserSync.stream())

});

gulp.task('es6', () => {
  browserify('src/js/main.js')
    .transform('babelify', {
      presets: ['es2015']
    })
    .bundle()
    .on('error', swallowError)
    .pipe(source('main.js'))
    .pipe(buffer())
    .pipe(gulp.dest('src/js/build'));
});

gulp.task('serve', () => {
    browserSync.init({
        server: "./src"
    });
    gulp.watch("src/scss/**", ['scss']);
    gulp.watch("src/js/**", ['es6']);
    gulp.watch("src/js/build/**", ['es6']).on('change', browserSync.reload);
    gulp.watch("src/*.html").on('change', browserSync.reload);

});

gulp.task('build', function() {
  return gulp.src(['src/**/*', '!src/js/core/', '!src/js/main.js']).pipe(minify({
    minify: true,
    collapseWhitespace: true,
    conservativeCollapse: true,
    minifyJS: true,
    minifyCSS: true,
    getKeptComment: function (content, filePath) {
        var m = content.match(/\/\*![\s\S]*?\*\//img);
        return m && m.join('\n') + '\n' || '';
    }
  })).pipe(gulp.dest('../docs'));
});

function swallowError (error) {
  console.log(error.toString())
  this.emit('end')
}

gulp.task('default', ['serve'], () => {

});
