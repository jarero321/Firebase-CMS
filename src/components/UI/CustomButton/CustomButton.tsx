'use client';
import React from 'react';
import styles from './CustomButton.module.css';
import { Button, styled } from '@mui/material';
export type CustomButtonProps = {
  text?: string;
  handleClick?: () => void;
  variant: 'primary' | 'secondary';
};

const PrimaryVariant = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 14,
  color: '#092B3E',
  padding: '12px 12px',
  border: '1px solid',
  lineHeight: 1.5,
  borderRadius: 0,
  backgroundColor: '#FFFD27',
  borderColor: '#FFFD27',
  '&:hover': {
    backgroundColor: 'rgba(255,255,255,0)',
    borderColor: '#FFFD27',
    boxShadow: 'none',
    color: '#FFFD27',
  },
});

const SecondaryVariant = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 14,
  padding: '12px 12px',
  border: '1px solid',
  lineHeight: 1.5,
  borderRadius: 0,
  backgroundColor: 'rgba(255,255,255,0)',
  borderColor: '#FFFD27',
  color: '#FFFD27',
  '&:hover': {
    color: '#092B3E',
    backgroundColor: '#FFFD27',
    borderColor: '#FFFD27',
    boxShadow: 'none',
  },
});

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
