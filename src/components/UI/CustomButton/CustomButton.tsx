'use client';
import React from 'react';
import styles from './CustomButton.module.css';
import { Button, CircularProgress, styled } from '@mui/material';
import { PrimaryVariant, SecondaryVariant } from './CustomButton.variants';
export type CustomButtonProps = {
  text?: string;
  handleClick?: () => void;
  variant: 'primary' | 'secondary';
  type?: 'button' | 'submit';
  loading?: boolean;
};

const CustomButton: React.FC<CustomButtonProps> = ({
  text = 'Button',
  handleClick,
  variant,
  loading = false,
  type,
}) => {
  return (
    <div className={styles.button}>
      {variant === 'primary' ? (
        <PrimaryVariant fullWidth type={type} onClick={handleClick}>
          {loading ? <CircularProgress size={24} color="success" /> : text}
        </PrimaryVariant>
      ) : (
        <SecondaryVariant fullWidth onClick={handleClick}>
          {loading ? <CircularProgress size={24} color="success" /> : text}
        </SecondaryVariant>
      )}
    </div>
  );
};

export default CustomButton;
