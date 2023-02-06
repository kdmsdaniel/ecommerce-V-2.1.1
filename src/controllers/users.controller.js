const UsersServices = require('../services/users.service');

const getAllUsers = async (req, res, next)=> {
  try {
    const users = await UsersServices.getAll();
    res.json(users);
  } catch (error) {
    next(error);
  }
};

const getUserById = async (req, res, next)=> {
  try {
    const id = req.params;
    const user = await UsersServices.getById(id);
    res.json(user);
  } catch (error) {
    next(error);
  }
};

const createUser = async (req, res, next)=> {
  try {
    //const {username, email, password} = req.body;
    const  newUser = req.body;
    console.log(newUser);
    const user = await UsersServices.create(newUser);
    res.status(201).json(user);
  } catch (error) {
    next(error);
  }
};

const deleteUser = async (req, res, next)=> {
  try {
    const id = req.params;
    const user = await UsersServices.delete(id);
    res.status(201).json(user);
  } catch (error) {
    next(error);
  }
};

module.exports = { getAllUsers, getUserById, createUser, deleteUser };