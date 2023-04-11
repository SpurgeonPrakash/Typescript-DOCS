const gulp = require("gulp");
const ts = require("gulp-typescript");

const tsProject = ts.createProject("tsconfig.json");

gulp.task("watch", function () {
  gulp.watch("*.ts", gulp.series("compile"));
});

gulp.task("compile", function () {
  return tsProject.src().pipe(tsProject()).js.pipe();
});
