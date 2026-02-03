"use client"
import React, { useState } from 'react';
import styles from './Auth.module.scss';
import { FiEye, FiEyeOff } from 'react-icons/fi'; 

const InputGroup = ({ label, type, placeholder, id }) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === 'password';
  const inputType = isPassword ? (showPassword ? 'text' : 'password') : type;

  return (
    <div className={styles.inputGroup}>
      <label htmlFor={id}>{label}</label>
      <div className={styles.inputWrapper}>
        <input type={inputType} id={id} placeholder={placeholder} />
        {isPassword && (
          <button 
            type="button" 
            className={styles.eyeToggle}
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FiEyeOff /> : <FiEye />}
          </button>
        )}
      </div>
    </div>
  );
};

export default InputGroup;