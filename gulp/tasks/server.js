module.exports = function () {
    $.gulp.task('server', () => {
        $.bs.init({
            server: {
                baseDir: "./build" // здесь будем собирать все файлы, поэтому отслеживаю эту папку
            },
            notify: false, // уведомления отключены
            port: 3000
        });
        $.gulp.watch('./app/**/*.html', $.gulp.parallel('html')); // отслеживаем изменения, pug конвертирует, затем минифицируем и перебрасываем в dist
        $.gulp.watch('./app/sass/**/*.scss', $.gulp.parallel('styles')); // стилевые изменения не релоадим, а стримим
        $.gulp.watch([
            './app/scripts/**/*.js',
            './app/data/*.json'
        ], $.gulp.parallel('scripts'));
        $.gulp.watch([
            './build/**/*.html',
            './build/scripts/**/*.js'
        ]).on('change', $.bs.reload);
    });
};