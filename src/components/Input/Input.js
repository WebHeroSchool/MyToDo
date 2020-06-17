import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import './Input.css';

// style for input
const CssTextField = withStyles({
  root: {
    '& .MuiFormControl-root': {
      'width': '100%'
    },
    '& .MuiFormLabel-root': {
      'font-family': 'Ubuntu'
    },
    '& .MuiFormLabel-root.Mui-focused': {
      'color': '#2ECFC1'
    },
    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
      'border-color': '#2ECFC1'
    },
    '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline':{
      'border-color': '#2ECFC1'
    },
    '& .MuiInputLabel-animated':{
      'transition': 'color .4s cubic-bezier(0.0, 0, 0.2, 1) 0ms,transform .4s cubic-bezier(0.0, 0, 0.2, 1) 0ms'
    }
  },
})(TextField);


class Input extends React.Component{
  state ={
    InputValue: '',
    error: false,
    helperText: ''
  };

  onKeyDownAction = (e) => {
    if(e.key === 'Enter'){
      if(this.state.InputValue === ''){
        this.setState({error: true , helperText: 'введите новое дело'});
      }else{
        this.props.onKeyDownAdd(this.state.InputValue);
        this.setState({InputValue: '', error: false ,helperText:''});
      }
    }
  }

  render() {
    return (
      <CssTextField
        id="outlined-basic" 
        label="новое дело" 
        variant="outlined"
        value={this.state.InputValue}
        error={this.state.error} 
        helperText={this.state.helperText}
        onChange={event => this.setState({ InputValue: event.target.value })}
        onKeyDown={this.onKeyDownAction}
      />
    )
  }
}

export default Input;