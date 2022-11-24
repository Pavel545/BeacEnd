const router = require('express').Router();
const {
    getUsers,
    createUser,
    getUser,
    updateUser,
    deleteUser,
}=require('../controlles/user')
router.get('/users', getUsers);
router.post('/users', createUser);
router.get('/users/:id', getUser);
router.patch('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

module.exports = router;