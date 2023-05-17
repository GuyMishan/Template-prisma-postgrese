const express = require('express');
const router = express.Router()

const { createpost, deletepost, postbyid, posts } = require('./post.controller');

router.get(`/posts`,posts)

router.get(`/post/:id`, postbyid)

router.delete(`/post/:id`, deletepost)

router.post(`/post`, createpost)

module.exports = router;