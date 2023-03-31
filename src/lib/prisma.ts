import { PrismaClient } from '@prisma/client';

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

export const prisma =
	globalForPrisma.prisma ||
	new PrismaClient({
		log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error']
	});

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

export async function saveSignature(username: string, message: string) {
	await prisma.signature.create({
		data: {
			username,
			body: message
		}
	});
}

export async function getAllSignatures() {
	return await prisma.signature.findMany();
}
