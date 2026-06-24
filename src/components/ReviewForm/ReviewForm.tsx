import { useState } from 'react';
import cl from './ReviewForm.module.scss';
import { Textarea } from '../ui/Textarea/Textarea';
import { Input } from '../ui/Input/Input';
import { ButtonBase } from '../ui/ButtonBase/ButtonBase';
import { StarRatingInput } from '../StarRatingInput/StarRatingInput';

interface ReviewFormData {
  name: string;
  email: string;
  rating: number;
  comment: string;
}

interface ReviewFormProps {
  onSubmit: (data: ReviewFormData) => void;
}

export const ReviewForm = ({ onSubmit }: ReviewFormProps) => {
  const [form, setForm] = useState<ReviewFormData>({
    name: '',
    email: '',
    rating: 0,
    comment: '',
  });

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.rating || !form.comment) return;
    onSubmit(form);
  };

  return (
    <div className={cl.form}>
      <div className={cl.flex}>
        <div className={cl.field}>
          <Input
            label="Name"
            type="text"
            placeholder="John Doe"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />

          <Input
            label="Email"
            type="email"
            placeholder="john@example.com"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
        </div>

        <StarRatingInput
          minRating={form.rating}
          maxRating={5}
          handleRating={(rating) => setForm((prev) => ({ ...prev, rating }))}
        />

        <Textarea
          label="Comment"
          placeholder="Share your experience with this vehicle..."
          style={{ minHeight: '150px' }}
          rows={4}
          value={form.comment}
          onChange={(e) => setForm({ ...form, comment: e.target.value })}
        />

        <ButtonBase>
          <button className={cl.btn} onClick={handleSubmit}>
            Submit review
          </button>
        </ButtonBase>
      </div>
    </div>
  );
};
