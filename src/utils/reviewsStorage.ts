import type { Review } from '../api/vehicles/type/vehicle.type';

const STORAGE_KEY = 'reviews';

const generateStorageKeyWithId = (id: string) => {
  return `${STORAGE_KEY}-${id}`;
};

export const reviewsStorage = {
  getAll(productId: string): Review[] {
    const storageKey = generateStorageKeyWithId(productId);
    const reviews = localStorage.getItem(storageKey);

    return reviews ? JSON.parse(reviews) : [];
  },
  createReview(productId: string, review: Review) {
    const reviews = this.getAll(productId);
    const storageKey = generateStorageKeyWithId(productId);

    reviews.push(review);
    localStorage.setItem(storageKey, JSON.stringify(reviews));
  },
};
