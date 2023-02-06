const Users = require('../models/users.model');

class UsersServices {
  static async getAll(){
    try {
      const result = await Users.findAll();
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async getById(id){
    try {
      const result = await Users.findByPk(id);
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async create(newUser){
    try {
      const result = await Users.create(newUser);
      console.log(result);
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async delete(id){
    try {
      const result = await Users.destroy({where: {id}});
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = UsersServices;