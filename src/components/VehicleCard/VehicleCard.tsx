import cl from './VehicleCard.module.scss';
import type { FC } from 'react';
import { NavLink } from 'react-router';
import type { Vehicle } from '../../api/vehicles/type/vehicle.type';
import { buildVehiclePath } from '../../app/routes/routes.constants';
import clsx from 'clsx';
import { StarRating } from '../ui/StarRating/StarRating';
import { TagsList } from '../ui/TagsList/TagsList';
import { Button } from '../ui/Button/Button';

interface Props {
  vehicle: Vehicle;
}

export const VehicleCard: FC<Props> = ({ vehicle }) => {
  return (
    <article className={cl.card}>
      <NavLink
        to={buildVehiclePath(vehicle.id.toString())}
        className={cl.card__link}
      >
        <div className={cl.card__header}>
          <div className={cl.title}>
            <h3 className={clsx([cl.title__title, 'hover-underline'])}>
              {vehicle.title}
            </h3>

            <StarRating rating={vehicle.rating} />
          </div>
          <p className={cl.card__des}>{vehicle.description}</p>
        </div>

        <img
          className={cl['card-img']}
          src={vehicle.images[1] ?? vehicle.thumbnail}
          alt={vehicle.title}
          onError={(e) => (e.currentTarget.src = 'imgs/placeholder-car.webp')}
        />

        <TagsList tags={vehicle.tags} />

        <div className={cl.footer}>
          <Button>See details</Button>
          <span className={cl.price}>${vehicle.price}</span>
        </div>
      </NavLink>
    </article>
  );
};
