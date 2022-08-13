import {
  Button,
  FormControl, FormHelperText, Grid, Input, InputLabel,
} from '@mui/material';
import React, { useContext } from 'react';
import { usePostContext } from '../Contexts/PostContext';

export default function MyForm() {
  const { input, inputHandler, submitHandler } = usePostContext();
  return (
    <Grid item xs={12}>
      <FormControl>
        <InputLabel htmlFor="my-input">Write your post</InputLabel>
        <Input
          onChange={inputHandler}
          value={input}
          id="my-input"
          aria-describedby="my-helper-text"
          name="post"
          type="text"
        />
        <FormHelperText id="my-helper-text">Please, be respectful</FormHelperText>
        <Button onClick={submitHandler} type="submit" variant="contained">Submit</Button>
      </FormControl>
    </Grid>
  );
}
