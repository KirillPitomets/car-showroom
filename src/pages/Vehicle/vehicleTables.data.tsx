import type { Vehicle } from '../../api/vehicles/type/vehicle.type';
import { StarRating } from '../../components/ui/StarRating.module.scss/StarRating';

export const getVehicleTables = (vehicle: Vehicle) => [
  {
    title: 'Vehicle Summary',
    rows: [
      { label: 'Brand', value: vehicle.brand },
      { label: 'Category', value: vehicle.category },
      { label: 'Price', value: `$ ${vehicle.price}` },
      { label: 'Rating', value: <StarRating rating={vehicle.rating} /> },
      {
        label: 'Availability',
        value: vehicle.availabilityStatus,
        valueClassName:
          vehicle.availabilityStatus === 'In Stock'
            ? 'color-green'
            : 'color-red',
      },
    ],
  },
  {
    title: 'Vehicle Specifications',
    rows: [
      { label: 'Sku', value: vehicle.sku },
      { label: 'Weight', value: vehicle.weight },
    ],
  },
  {
    title: 'Vehicle Dimensions',
    rows: [
      { label: 'Width', value: vehicle.dimensions.width },
      { label: 'Height', value: vehicle.dimensions.height },
      { label: 'Depth', value: vehicle.dimensions.depth },
    ],
  },
  {
    title: 'Pricing & Availability',
    rows: [
      { label: 'Price', value: `$ ${vehicle.price}` },
      { label: 'Discount', value: `${vehicle.discountPercentage}%` },
      { label: 'Stock', value: vehicle.stock },
      {
        label: 'Availability',
        value: vehicle.availabilityStatus,
        valueClassName:
          vehicle.availabilityStatus === 'In Stock'
            ? 'color-green'
            : 'color-red',
      },
      { label: 'Minimum Order Quantity', value: vehicle.minimumOrderQuantity },
    ],
  },
  {
    title: 'Shipping & Warranty',
    rows: [
      { label: 'Shipping Information', value: vehicle.shippingInformation },
      { label: 'Warranty Information', value: vehicle.warrantyInformation },
      { label: 'Return Policy', value: vehicle.returnPolicy },
    ],
  },
];
