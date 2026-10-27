import { defineEnvVars } from '@sveltejs/kit/env';

export const variables = defineEnvVars({
	/** Contact form endpoint (e.g. Formspree). Optional — unset falls back to mailto. */
	PUBLIC_FORM_ENDPOINT: {
		public: true,
		static: true,
		schema: (value) => value,
	},
});
