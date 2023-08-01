import { defineConfig } from "@pandacss/dev";

export default defineConfig({
	// Whether to use css reset
	preflight: true,

	// Where to look for your css declarations
	include: ["./src/**/*.{js,jsx,ts,tsx}"],

	// Files to exclude
	exclude: [],

	// Useful for theme customization
	theme: {
		extend: {},
		tokens: {
			colors: {
				accent: {
					value: "#EF6C57",
				},
				bg01: {
					value: "#28293E",
				},
				bg02: {
					value: "#FDF0E9",
				},
				textDark: {
					value: "#391400",
				},
				textDarkAccent: {
					value: "#EF6D58",
				},
				textDarkGray: {
					value: "#391400A3",
				},
				textLight: {
					value: "#FFFFFF",
				},
				textLightAccent: {
					value: "#EF6D58",
				},
				textLightGray: {
					value: "#FFFFFFA3",
				},
			},
		},
	},

	// The output directory for your css system
	outdir: "styled-system",
});
