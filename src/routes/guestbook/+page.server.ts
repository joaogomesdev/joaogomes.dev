import { getAllSignatures, saveSignature } from '$lib/prisma';
import { fail } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ depends }) => {
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
