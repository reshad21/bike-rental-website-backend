import { z } from 'zod';

const createBikeValidationSchema = z.object({
    body: z.object({
        name: z.string().min(1),
        description: z.string().min(1),
        pricePerHour: z.number().positive(),
        isAvailable: z.boolean().default(true),
        cc: z.number().positive(),
        year: z.number().int().min(1885),
        model: z.string().min(1),
        brand: z.string().min(1),
    }),
});

const updateBikeValidationSchema = z.object({
    body: z.object({
        name: z.string().min(1).optional(),
        description: z.string().min(1).optional(),
        pricePerHour: z.number().positive().optional(),
        isAvailable: z.boolean().default(true).optional(),
        cc: z.number().positive().optional(),
        year: z.number().int().min(1885).optional(),
        model: z.string().min(1).optional(),
        brand: z.string().min(1).optional(),
    }),
});

export const BikeValidation = {
    createBikeValidationSchema,
    updateBikeValidationSchema
};
