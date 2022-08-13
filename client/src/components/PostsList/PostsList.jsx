import {
  Grid, List, ListItem, ListItemText,
} from '@mui/material';
import React from 'react';
import PostItem from '../PostItem/PostItem';
import { usePostContext } from '../Contexts/PostContext';

export default function PostsList() {
  const { posts } = usePostContext();
  return (
    <Grid item xs={12}>
      <List>
        <Grid container>
          {posts?.map((el) => (
            <PostItem
              post={el}
              key={el.id}
              id={el.id}
            />
          ))}
        </Grid>
      </List>
    </Grid>
  );
}
