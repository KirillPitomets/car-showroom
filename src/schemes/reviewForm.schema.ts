import * as z from 'zod';

const HTML_TAG_REGEX = /<[^>]+>/;

export const reviewFormSchema = z.object({
  name: z
    .string('Name is required')
    .min(2, {
      error: 'Name must contain at least 2 characters',
    })
    .max(16, {
      error: 'Name cannot exceed 16 characters',
    })
    .refine((value) => !HTML_TAG_REGEX.test(value), {
      error: 'HTML tags are not allowed',
    }),
  email: z
    .string('Email is required')
    .email('Please enter a validd email address'),
  rating: z.number('Rating is required').min(1, {
    error: 'Please select a rating',
  }),
  comment: z
    .string('Comment is required')
    .min(8, {
      error: 'Comment must contain at least 8 characters',
    })
    .max(180, {
      error: 'Comment cannot exceed 180 characters',
    })
    .refine((value) => !HTML_TAG_REGEX.test(value), {
      error: 'HTML tags are not allowed',
    }),
});

export type ReviewForm = z.infer<typeof reviewFormSchema>;
