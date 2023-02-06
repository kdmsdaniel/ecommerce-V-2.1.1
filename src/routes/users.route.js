const { Router } = require('express');
const authenticate = require('../middlewares/auth.middleware');
const { getAllUsers,
        getUserById,
        createUser,
        deleteUser
      } = require('../controllers/users.controller');

const router = Router();

router.get('/users', getAllUsers);
router.get('/users/:id', authenticate, getUserById);
router.post('/users', createUser);
router.delete('/users', authenticate, deleteUser);

module.exports = router;