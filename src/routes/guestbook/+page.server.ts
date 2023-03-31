import { getAllSignatures, saveSignature } from '$lib/services/signatures';
import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';

export const load = async ({ depends, setHeaders }) => {
	setHeaders({
		'Cache-Control': `max-age=0, s-maxage=${60 * 60}`
	});

	const signatures = await getAllSignatures();

	depends('app:signatures');

	return { signatures };
};

export const actions: Actions = {
	submitSignature: async ({ request }) => {
		const formData = await request.formData();
		const username = String(formData.get('username'));
		const message = String(formData.get('message'));

		console.log(username);
		console.log(message);

		if (!username) {
			return fail(400, {
				message,
				missing: true
			});
		}

		if (!message) {
			return fail(400, {
				message,
				missing: true
			});
		}

		await saveSignature(username, message);

		return { success: true };
	}
};
