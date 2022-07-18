/** @type {import('next').NextConfig} */
module.exports = {
	reactStrictMode: true,

	images: {
		loader: 'custom',
	},

	experimental: {
		externalDir: true,
	},
};
