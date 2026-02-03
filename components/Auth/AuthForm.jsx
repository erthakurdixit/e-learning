"use client"
import React, { useState } from 'react';
import InputGroup from './InputGroup';
import styles from './Auth.module.scss';
import Link from 'next/link';

const AuthForm = ({ initialView = 'login' }) => {
  const [view, setView] = useState(initialView);
  const isRegister = view === 'register';

  return (
    <div className={styles.authContainer}>
      <div className={styles.headerSection}>
      <h2 className={styles.title}>Welcome to lorem..!</h2>
      <div className={styles.toggleContainer}>
        <button 
          className={`${styles.toggleBtn} ${!isRegister ? styles.active : ''}`}
          onClick={() => setView('login')}
        >
          Login
        </button>
        <button 
          className={`${styles.toggleBtn} ${isRegister ? styles.active : ''}`}
          onClick={() => setView('register')}
        >
          Register
        </button>
      </div>
      </div>

      <p className={styles.description}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </p>

      <form className={styles.form}>
        {isRegister && (
           <InputGroup label="Email Address" type="email" placeholder="Enter your Email Address" id="email" />
        )}

        <InputGroup label="User name" type="text" placeholder="Enter your User name" id="username" />
        <InputGroup label="Password" type="password" placeholder="Enter your Password" id="password" />

        {!isRegister && (
          <div className={styles.loginOptions}>
            <label className={styles.checkboxLabel}>
              <input type="checkbox" /> Rememebr me
            </label>
            <Link href="#" className={styles.forgotPass}>Forgot Password ?</Link >
          </div>
        )}

        <button type="submit" className={styles.submitBtn}>
          {isRegister ? 'Register' : 'Login'}
        </button>
      </form>
    </div>
  );
};

export default AuthForm;