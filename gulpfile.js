var gulp = require("gulp");
var babel = require("gulp-babel");

gulp.task("default",["views"], function () {
    return gulp.src("src/app.es6")
        .pipe(babel())
        .pipe(gulp.dest("dist"));
});

gulp.task("views", function () {
	return gulp.src("src/views/**")
			   .pipe(gulp.dest("dist/views"))
})