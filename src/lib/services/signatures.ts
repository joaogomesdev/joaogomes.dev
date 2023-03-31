import { prisma } from '$lib/server/prisma';

export async function saveSignature(username: string, message: string) {
	await prisma.signature.create({
		data: {
			username,
			body: message
		}
	});
}

export async function getAllSignatures() {
	return await prisma.signature.findMany({
		orderBy: {
			createdAt: 'desc'
		}
	});
}
