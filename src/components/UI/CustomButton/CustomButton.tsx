'use client';
import React from 'react';
import styles from './CustomButton.module.css';
import { Button, styled } from '@mui/material';
import { PrimaryVariant, SecondaryVariant } from './CustomButton.variants';
export type CustomButtonProps = {
  text?: string;
  handleClick?: () => void;
  variant: 'primary' | 'secondary';
};

const CustomButton: React.FC<CustomButtonProps> = ({
  text = 'Button',
  handleClick,
  variant,
}) => {
  return (
    <div className={styles.button}>
      {variant === 'primary' ? (
        <PrimaryVariant fullWidth onClick={handleClick}>
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
