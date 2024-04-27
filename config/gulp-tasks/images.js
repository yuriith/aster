import webp from "gulp-webp";
import imagemin from "gulp-imagemin";

export const images = () => {
  return app.gulp.src(app.path.src.images, { since: app.gulp.lastRun(images) }) // Only process modified images
    .pipe(app.plugins.plumber(
      app.plugins.notify.onError({
        title: "IMAGES",
        message: "Error: <%= error.message %>"
      })
    ))
    .pipe(webp({
      quality: 75, // Adjust quality for desired balance between file size and visual fidelity
      preset: 'default', // Use a suitable WebP preset for your images (consider 'photo' or 'balanced')
      lossless: true, // Optionally enable lossless conversion for specific images (e.g., screenshots)
    }))
    .pipe(app.gulp.dest(app.path.build.images))
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [{ removeViewBox: false }],
      interlaced: true,
      optimizationLevel: 3 // 0 to 7
    }))
    .pipe(app.gulp.dest(app.path.build.images))
    .pipe(app.gulp.src(app.path.src.svg))
    .pipe(app.gulp.dest(app.path.build.images));
};