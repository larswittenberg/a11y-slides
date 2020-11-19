// Example theme.js
export default {
	space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
	fonts: {
		body: 'Roboto, sans-serif',
		monospace: '"Roboto Mono", monospace',
	},
	colors: {
		text: 'white',
		background: 'black',
		primary: 'blue',
	},
	styles: {
		h1: {
			margin: '20px 0',
		},
		a: {
			color: 'white',
		},
		ul: {
			margin: '1em',
		},
		li: {
			marginBottom: '25px',
		},
		blockquote: {
			fontStyle: 'italic',
			p: {
				margin: '0',
			},
		},
		Slide: {
			maxWidth: '90%',
			margin: '0 auto',
		},
		small: {
			fontSize: '70%',
		},
		Header: {},
		Footer: {},
	}
}
