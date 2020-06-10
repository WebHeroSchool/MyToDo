import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import './Input.css';

const CssTextField = withStyles({
  root: {
    '& .MuiFormControl-root': {
      'width': '100%'
    },
    '& .MuiFormLabel-root': {
      'font-family': 'Ubuntu'
    },
    '& .MuiFormLabel-root.Mui-focused': {
      color: '#2ECFC1'
    },
    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
      'border-color': '#2ECFC1',
    },
    '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline':{
      'border-color': '#2ECFC1'
    }
  },
})(TextField);

const Input = () => (<CssTextField id="outlined-basic" label="новое дело" variant="outlined" />);

export default Input;