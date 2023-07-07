'use client';
import React from 'react';
import styles from './CustomButton.module.css';
import { Button, styled } from '@mui/material';
import { PrimaryVariant, SecondaryVariant } from './CustomButton.variants';
export type CustomButtonProps = {
  text?: string;
  handleClick?: () => void;
  variant: 'primary' | 'secondary';
  type?: 'button' | 'submit';
};

const CustomButton: React.FC<CustomButtonProps> = ({
  text = 'Button',
  handleClick,
  variant,
  type,
}) => {
  return (
    <div className={styles.button}>
      {variant === 'primary' ? (
        <PrimaryVariant fullWidth type={type} onClick={handleClick}>
          {text}
        </PrimaryVariant>
      ) : (
        <SecondaryVariant fullWidth onClick={handleClick}>
          {text}
        </SecondaryVariant>
      )}
    </div>
  );
};

export default CustomButton;
