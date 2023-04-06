let gulp = require('gulp');
let pug = require ('gulp-pug');
const sass = require('gulp-sass')(require('sass'));

gulp.task ('pug', function(){
    return gulp.src ('telegram/template/*.pug')
    .pipe (pug({
        pretty: true
    }))
    .pipe (gulp.dest('telegram/html'))
})

gulp.task('sass', function() {
    return gulp.src('telegram/scss/*.sass')
    .pipe(sass({
        pretty: true
    }))
    .pipe(gulp.dest('telegram/css'))
  });

gulp.task('watch', function (){
    gulp.watch('telegram/template/*.pug', gulp.parallel('pug'));
    gulp.watch('telegram/scss/*.sass', gulp.parallel('sass'));
});

gulp.task('default', gulp.parallel('watch'));