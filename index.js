const imagemin = require('imagemin');
const imageminJpegtran = require('imagemin-jpegtran');
const imageminPngquant = require('imagemin-pngquant');

(async () => {
	const files = await imagemin(['src/images/*.{jpg,png}'], {
		destination: 'dist/images',
		plugins: [
			imageminJpegtran(),
			imageminPngquant({
				quality: [0, 0.05]
			})
		]
	});

	console.log(files);
	//=> [{data: <Buffer 89 50 4e …>, destinationPath: 'build/images/foo.jpg'}, …]
})();