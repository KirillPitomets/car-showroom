import cl from './ReviewForm.module.scss';
import { Textarea } from '../ui/Textarea/Textarea';
import { Input } from '../ui/Input/Input';
import { StarRatingInput } from '../StarRatingInput/StarRatingInput';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  reviewFormSchema,
  type ReviewForm as ReviewFormType,
} from '../../schemes/reviewForm.schema';
import { Button } from '../ui/Button/Button';

interface ReviewFormProps {
  onSubmit: (data: ReviewFormType) => void;
}

export const ReviewForm = ({ onSubmit }: ReviewFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm<ReviewFormType>({
    resolver: zodResolver(reviewFormSchema),
    defaultValues: {
      rating: 1,
    },
  });

  return (
    <form
      className={cl.form}
      onSubmit={handleSubmit((data) => {
        onSubmit(data);
        reset();
      })}
    >
      <div className={cl.flex}>
        <div className={cl.field}>
          <Input
            label="Name"
            type="text"
            placeholder="John Doe"
            error={errors.name && errors.name.message}
            {...register('name')}
          />
          <Input
            label="Email"
            type="email"
            placeholder="john@example.com"
            error={errors.email && errors.email.message}
            {...register('email')}
          />
        </div>

        <Controller
          control={control}
          name="rating"
          render={({ field: { value, onChange } }) => (
            <StarRatingInput
              minRating={value}
              maxRating={5}
              handleRating={onChange}
            />
          )}
        />

        <Textarea
          label="Comment"
          placeholder="Share your experience with this vehicle..."
          style={{ minHeight: '150px' }}
          rows={4}
          error={errors.comment && errors.comment.message}
          {...register('comment')}
        />

        <Button className={cl.btn} type="submit">
          Submit review
        </Button>
      </div>
    </form>
  );
};
