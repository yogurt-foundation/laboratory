const autoPrefixer = require('autoprefixer')
const gulp = require('gulp')
const gutil = require('gulp-util')
const postCss = require('gulp-postcss')
const rename = require('gulp-rename')
const sass = require('gulp-sass')
const sassGlob = require('gulp-sass-glob')
const version = require('gulp-version-number')
const gulpLoadPlugins = require('gulp-load-plugins')
const inject = gulpLoadPlugins()

// ...minify/preprocess scss

// outputStyle: `expanded` for debugging,
// `compressed` for production.

const versionConfig = {
  'value': '%MDS%', // using MDS hash
  'append': { 'key': 'v', 'to': ['css', 'js'] }
}
gulp.task('html', () => {
  return gulp.src('testing.html')
    // inject versioning to (css,js) static assets
    .pipe(inject.versionNumber(versionConfig))
    .pipe(gulp.dest('./'))
})


const srcScssPath = 'src/laboratory.scss'
const distCssPath = 'dist'
gulp.task('sass-min', () => {
  return gulp.src(srcScssPath)
    .pipe(sassGlob())
    .pipe(sass({ outputStyle: 'compressed' })
      .on('error', sass.logError))
    .pipe(postCss([autoPrefixer()]))
    .pipe(rename('yogurt-laboratory.min.css'))
    .pipe(gulp.dest(distCssPath))
})


gulp.task('sass-raw', () => {
  return gulp.src(srcScssPath)
    .pipe(sassGlob())
    .pipe(sass({ outputStyle: 'expanded' })
      .on('error', sass.logError))
    .pipe(rename('yogurt-laboratory.css'))
    .pipe(gulp.dest(distCssPath))
})


// ...watch
const watchSrcScssPath = 'src/**/**/**/**/*.scss'
gulp.task('watch', gulp.series([

    'sass-raw',
    'sass-min',
    'html'

  ], () => {

    gulp.watch(watchSrcScssPath,
      gulp.series([
        'sass-raw',
        'sass-min',
        'html'
      ])
    )

  })
)
