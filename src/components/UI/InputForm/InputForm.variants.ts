import { TextField, styled } from '@mui/material';

const PrimaryTextField = styled(TextField)({
  '& input': {
    color: '#BCBC00',
  },
  '& label': {
    color: '#BCBC00',
  },
  '& label.Mui-focused': {
    color: '#BCBC00',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#BCBC00',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#BCBC00',
    },
    '&:hover fieldset': {
      borderColor: '#BCBC00',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#BCBC00',
    },
  },
});

export { PrimaryTextField };
