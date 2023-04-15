import { getAllSignatures, saveSignature } from '$lib/services/signatures';
import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';
import type { PageLoad } from '../$types';

export const load: PageLoad = async ({ depends }) => {
	const signatures = await getAllSignatures();

	depends('app:signatures');

	return { signatures };
};

export const actions: Actions = {
	submitSignature: async ({ request }) => {
		const formData = await request.formData();
		const username = String(formData.get('username'));
		const message = String(formData.get('message'));

		if (!username || typeof username !== 'string') {
			return fail(400, { username, missing: true });
		}

		if (!message || typeof message !== 'string') {
			return fail(400, { message, missing: true });
		}

		try {
			await saveSignature(username, message);
			return { success: true };
		} catch (err: any) {
			return fail(400, { error: true, message: err.message });
		}
	}
};
