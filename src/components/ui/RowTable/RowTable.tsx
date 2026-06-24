import type { FC } from 'react';
import cl from './RowTable.module.scss';

type Row = {
  label: string;
  labelClassName?: string;
  value: string | React.ReactNode;
  valueClassName?: string;
};

interface Props {
  rows: Row[];
  title: string;
}

export const RowTable: FC<Props> = ({ rows, title }) => {
  return (
    <div className={cl.table}>
      <h3 className={cl.table__title}>{title}</h3>

      <table className={cl.table__table}>
        <tbody>
          {rows.map((row, indx) => (
            <tr key={`${row.label} - ${indx}`}>
              <th className={row.labelClassName ? row.labelClassName : ''}>
                {row.label}
              </th>
              <td className={row.valueClassName ? row.valueClassName : ''}>
                {row.value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
