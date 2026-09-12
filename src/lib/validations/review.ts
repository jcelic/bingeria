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

    comment: z.string().trim(),

    spoilers: z.boolean(),
  })
  .superRefine((data, ctx) => {
    const minimumLength = data.spoilers ? 50 : 20;

    if (data.comment.length < minimumLength) {
      ctx.addIssue({
        code: 'custom',
        path: ['comment'],
        message: data.spoilers
          ? 'Reviews with spoilers must have at least 50 characters'
          : 'Write at least 20 characters',
      });
    }
  });

export type ReviewFormData = z.infer<typeof reviewSchema>;
