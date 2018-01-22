const gulp = require('gulp');
const stylus = require('gulp-stylus');
const browserSync = require('browser-sync').create();
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const minify = require('gulp-minifier');

gulp.task('pre-processor', () => {
  return gulp.src('src/stylus/main.styl')
  .pipe(stylus())
  .on('error', swallowError)
  .pipe(gulp.dest('src/css'))
  .pipe(browserSync.stream())

});

gulp.task('serve', () => {
    browserSync.init({
        server: "./src"
    });
    gulp.watch("src/stylus/**", ['pre-processor']);
    gulp.watch("src/*.html").on('change', browserSync.reload);
});

gulp.task('build', function() {
  return gulp.src(['src/**/*']).pipe(minify({
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

gulp.task('default', ['serve']);
