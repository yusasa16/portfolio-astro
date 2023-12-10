import dotenv from 'dotenv';
import { createClient } from 'microcms-js-sdk';
dotenv.config();

export default async function getMicrocms(
	endpoint: string,
	contentId: string | undefined = undefined
) {
	const client = createClient({
		serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
		apiKey: process.env.MICROCMS_API_KEY,
	});

	if (contentId) {
		return client
			.get({
				endpoint,
				contentId,
			})
			.then(res => res)
			.catch(err => console.log(err));
	} else {
		return client
			.get({
				endpoint,
			})
			.then(res => res)
			.catch(err => console.log(err));
	}
}
