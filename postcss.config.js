module.exports = {
	plugins: [
		require('postcss-sort-media-queries')({
			sort: 'desktop-first',
		}),
		require('postcss-preset-env'),
		require('autoprefixer')({ grid: 'autoplace', cascade: true }),
		require('postcss-merge-longhand'),
	],
};
