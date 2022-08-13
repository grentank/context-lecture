const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();
const { Post } = require('./db/models');

const PORT = process.env.PORT || 3001;

const server = express();

server.use(morgan('dev'));
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(cors());

server.get('/api/posts', async (req, res) => {
  const posts = await Post.findAll();
  res.json(posts);
});

server.post('/api/posts', async (req, res) => {
  const { input } = req.body;
  const newPost = await Post.create({ title: input });
  res.json(newPost);
});

server.listen(PORT, () => console.log(`Server has started on PORT ${PORT}`));
