const AuthServices = require('../services/auth.service');
const transporter = require('../utils/mailer')

const register = async ( req, res)=> {
  try {

    const user = req.body;
    const result = await AuthServices.register(user);
    if( result ) {
      res.status(201).json({message: 'user created'});
      await transporter.sendMail({
        to: result.emai,
        from: 'hnrazogue@gmail.com',
        subjetc: 'Wellcome a ecommerce',
        html: "<h1>Thanks for trusting us</h1>",
      });
    } else {
      res.status(400).json({message: 'something wrong'});
    }
  } catch (error) {
    res.status(400).json({message: error.message});
  }
}

const login = async ( req, res )=> {
  try {
    const { email, password } = req.body;
    if (!email) {
      return res.statust(400).json({
        error: 'Missing data',
        message: 'Not email provided'
      })
      }
    if (!password) {
      return res.statust(400).json({
        error: 'Missing data',
        message: 'Not password provided'
      })
    }
    const result = await AuthServices.login({email, password});
    if(result.isValid){
      const { username, id, email } = result.user;
      const userData = { username, id, email };
      const token = AuthServices.genToken(userData);
      result.user.token = token;
      console.log(result.user);
      res.json(result.user);
    } else{
      res.status('400').json('User not fund');
    }
  } catch (error) {
         res.status(400).json({ message: 'Something wrong'});
  } 
}

module.exports = {
  register,
  login
}