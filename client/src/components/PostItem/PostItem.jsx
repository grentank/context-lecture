import {
  Grid, IconButton, ListItem, ListItemButton, ListItemText, Typography,
} from '@mui/material';
import React, { memo, useContext } from 'react';
import { Delete } from '@mui/icons-material';
import { usePostContext } from '../Contexts/PostContext';

function PostItem({ id, post }) {
  const { deleteHandler } = usePostContext();
  return (
    <Grid item xs={12}>
      <ListItem
        secondaryAction={(
          <IconButton onClick={deleteHandler} edge="end" aria-label="delete">
            <Delete />
          </IconButton>
      )}
        disablePadding
      >
        <ListItemButton>
          <Typography>
            {post.title}
          </Typography>
        </ListItemButton>
      </ListItem>
    </Grid>
  );
}

export default memo(PostItem);
