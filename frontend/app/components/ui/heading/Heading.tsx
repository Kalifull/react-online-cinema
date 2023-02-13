import cn from 'classnames';

import { IHeading } from './heading.interface';

const Heading: React.FC<IHeading> = ({ title, className }) => {
  const headingClasses = cn(`text-white text-opacity-80 font-semibold ${className}`, {
    'text-3xl': !className?.includes('xl'),
  });

  return <h1 className={headingClasses}>{title}</h1>;
};
export default Heading;
