import cl from './VehicleCard.module.scss';
import type { FC } from 'react';
import { NavLink } from 'react-router';
import type { Vehicle } from '../../api/vehicles/vehicle.type';
import { buildVehiclePath } from '../../app/routes/routes.constants';
import { Star } from 'lucide-react';
import clsx from 'clsx';

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
            <div className={cl.raiting}>
              <Star size={14} fill="yellow" color="yellow" />
              <span className={cl.raiting__number}>
                {vehicle.rating.toFixed(1)}
              </span>
            </div>
          </div>
          <p className={cl.card__des}>{vehicle.description}</p>
        </div>

        <img
          className={cl['card-img']}
          src={vehicle.images[1] ?? vehicle.thumbnail}
          alt={vehicle.title}
          onError={(e) => (e.currentTarget.src = 'imgs/placeholder-car.webp')}
        />

        <ul className={cl.tags}>
          {vehicle.tags.map((tag) => (
            <li key={tag} className={cl.tags__tag}>
              {tag}
            </li>
          ))}
        </ul>

        <div className={cl.footer}>
          <span className={cl.button}>See details</span>
          <span className={cl.price}>${vehicle.price}</span>
        </div>
      </NavLink>
    </article>
  );
};
