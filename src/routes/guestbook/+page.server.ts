import { fail } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const signatures: unknown[] = [];
	return { signatures };
};

export const actions: Actions = {
	submitSignature: async ({ request }) => {
		const formData = await request.formData();
		const message = String(formData.get('message'));

    console.log(message);

		if (!message) {
			return fail(400, {
				message,
				missing: true
			});
		}

    // save signature

		return { success: true };
	}
};