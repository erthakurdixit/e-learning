import React from 'react';
import styles from './AuthLayout.module.scss';
import Image from 'next/image';

const AuthLayout = ({ imageSrc, children }) => {

  return (
    <div className={styles.splitLayout}>
      <div className={styles.imageSide}>
        <Image src={imageSrc} alt="Authentication background" className={styles.bgImage} width={737} height={825} />
      </div>

      <div className={styles.formSide}>
        <div className={styles.formWrapper}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;