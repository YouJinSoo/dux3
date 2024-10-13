const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('home', { title: 'Home' });
});

// 다른 라우트를 추가할 수 있습니다.
// router.get('/another-route', (req, res) => { ... });

module.exports = router;