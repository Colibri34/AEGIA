import { ReactNode } from 'react';

interface TableProps {
  headers: string[];
  children: ReactNode;
}

export function Table({ headers, children }: TableProps) {
  return (
    <div className="responsive-table">
      <div className="rt-scroll">
        <table>
          <thead>
            <tr>
              {headers.map((header) => (
                <th key={header}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>{children}</tbody>
        </table>
      </div>
    </div>
  );
}

interface TableRowProps {
  children: ReactNode;
}

export function TableRow({ children }: TableRowProps) {
  return <tr>{children}</tr>;
}

interface TableCellProps {
  children: ReactNode;
  label: string;
  primary?: boolean;
}

export function TableCell({ children, label, primary = false }: TableCellProps) {
  return (
    <td
      data-label={label}
      className={primary ? 'rt-primary' : ''}
    >
      {children}
    </td>
  );
}
