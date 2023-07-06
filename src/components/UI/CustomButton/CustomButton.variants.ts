import styled from '@emotion/styled';
import { Button } from '@mui/material';

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
    backgroundColor: '#092B3E',
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
  backgroundColor: '#092B3E',
  borderColor: '#FFFD27',
  color: '#FFFD27',
  '&:hover': {
    color: '#092B3E',
    backgroundColor: '#FFFD27',
    borderColor: '#FFFD27',
    boxShadow: 'none',
  },
});

export { PrimaryVariant, SecondaryVariant };
