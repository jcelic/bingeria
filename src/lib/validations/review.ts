import { z } from 'zod';

export const reviewSchema = z
  .object({
    rating: z
      .number({ error: 'Rating is required' })
      .min(1, 'Minimum rating is 1')
      .max(10, 'Maximum rating is 10'),

    episode: z
      .number({ error: 'Episode is required' })
      .int('Episode must be a whole number')
      .min(0, 'Episode cannot be negative'),

    comment: z
      .string()
      .trim()
      .min(20, 'Comment must be at least 20 characters'),

    spoilers: z.boolean(),
  })
  .superRefine((data, ctx) => {
    if (data.spoilers && data.comment.length < 50) {
      ctx.addIssue({
        code: 'custom',
        path: ['comment'],
        message: 'Comment must be at least 50 characters with spoilers',
      });
    }
  });

export type ReviewFormData = z.infer<typeof reviewSchema>;
