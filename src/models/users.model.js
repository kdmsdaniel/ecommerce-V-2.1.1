const db            = require('../utils/database');
const { DataTypes } = require('sequelize');
const bcrypt        = require('bcrypt');

/**
 * @openapi
 * components:
 *   schemas:
 *     register:
 *       type: object
 *       properties:
 *         username:
 *           type: string
 *           example: Henry
 *         email:
 *           type: string
 *           example: hnrazo@gmil.com
 *         password:
 *           type: string
 *           example: hnrq12345
 *     login:
 *       type: object
 *       properties:
 *         email:
 *           type: string
 *           example: hnrazo@gmail.com
 *         password:
 *           type: string
 *           example: hnrq12345
 *     loginResponse:
 *       type: object
 *       properties:
 *         firstname:
 *           type: string
 *           example: Henry
 *         lastname:
 *           type: string
 *           example: Azogue
 *         id:
 *           type: int
 *           example: 2
 *         email:
 *           type: string
 *           example: hnrazogue@gmail.com
 *         token:
 *           type: string
 *           example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: FWT
 */


const Users = db.define('users', {
  id: {
    type:          DataTypes.INTEGER,
    primaryKey:    true,
    autoIncrement: true,
    allowNull:     false
  },
  username: {
    type:      DataTypes.STRING(20),
    allowNull: false
  },
  email: {
    type:      DataTypes.STRING(30),
    unique:    true,
    allowNull: false,
    validate: {
      isEmail: true
    }
  },
  password: {
    type:      DataTypes.STRING,
    allowNull: false
  },
  isConfirmed: {
   type:         DataTypes.BOOLEAN,
   field:        'is_confirmed',
   defaultValue: false
  }
},{
  timestamps: false
},{
  hooks: {
    beforeCreate: ( user, options )=> { 
      const { password } = user;
      const hash = bcrypt.hashSync(password, 10);
      user.password = hash;
    }
  }
})

module.exports = Users; 