var gulp,
    sass,
    minifycss,
    del;

gulp = require('gulp');
sass = require('gulp-sass');
minifycss = require('gulp-minify-css');
del = require('del');

gulp.task('styles', ['clean-styles'], function() {
    return gulp.src('style.scss')
        .pipe(sass())
        .pipe(minifycss())
        .pipe(gulp.dest('css'));
});

gulp.task('clean-styles', function() {
    return del('css');
});

gulp.task('default', ['styles']);
