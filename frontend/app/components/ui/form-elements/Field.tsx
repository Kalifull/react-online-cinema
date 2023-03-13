import cn from 'classnames';
import { forwardRef } from 'react';

import { TField } from './form.interface';

import styles from './Form.module.scss';

const Field: React.FC<TField> = forwardRef<HTMLInputElement, TField>(
  ({ placeholder, error, type = 'text', style, ...rest }, ref) => {
    return (
      <div className={cn(styles.common, styles.field)} style={style}>
        <label htmlFor="field">
          <span className={styles.placeholder}>{placeholder}</span>
          <input ref={ref} type={type} {...rest} />
        </label>
        {error && <div className={styles.error}>{error.message}</div>}
      </div>
    );
  }
);

export default Field;
