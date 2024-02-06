const gulp = require('gulp');
const babel = require('gulp-babel');
const eslint = require('gulp-eslint');

function transpileNode() {
	return gulp.src('es6/**/*.js')
			.pipe(eslint())
			.pipe(eslint.format())
			.pipe(babel())
			.pipe(gulp.dest('dist'));
}

function transpileBrowser() {
	return gulp.src('public/es6/**/*.js')
			.pipe(eslint())
			.pipe(eslint.format())
			.pipe(babel())
			.pipe(gulp.dest('public/dist'));
}

// Runs transpileNode and transpileBrowser in series
gulp.task('default', gulp.series(transpileNode, transpileBrowser));
