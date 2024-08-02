/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{css,js}', './*.html'],
	theme: {
		extend: {
			colors: {
				orange: '#EC6E4C',
				darkGray: '#48484A',
				ligthGray: '#7E7E7F',
				cream: '#F2F2FC',
			},
			fontFamily: {
				ntr: 'NTR, sans-serifs',
			},
			screens: {
				'2xl': '1320px',
			},
			container: {
				center: true,
			},
		},
	},
	plugins: [],
};
