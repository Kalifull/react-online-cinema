import cn from 'classnames';

import { TButton } from './form.interface';

import styles from './Form.module.scss';

const Button: React.FC<TButton> = ({ children, className, ...rest }) => {
  return (
    <button type="button" className={cn(styles.button, className)} {...rest}>
      {children}
    </button>
  );
};

export default Button;
