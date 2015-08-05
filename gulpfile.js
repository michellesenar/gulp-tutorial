// make sure you require gulp
var gulp = require('gulp'),
	// and then make sure you require all the other things gulp is gonna use
	minifyCSS = require('gulp-minify-css');

gulp.task('hello_gulp', function() { // 'gulp hello_gulp' on CL to run
	console.log('Hello gulp!')

})

gulp.task('style', function() {
	return gulp
		.src('css/style.css') // source/input for the function
		.pipe(minifyCSS()) // define the task
		.pipe(gulp.dest('statics')); // destination
})