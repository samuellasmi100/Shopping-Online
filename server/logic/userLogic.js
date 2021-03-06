const userDb = require('../dao/user-db');
const ErrorType = require('../errors/error-type');
const ServerError = require('../errors/server-error')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cacheModule = require('../logic/cache-module');
const config = require('../config.json');
const validate = require('../validation/validateUser');

//Get All Users
const allUsers = async () => {
    return await userDb.allUsers()
};

//Register
const register = async (userRegistaionDetails) => {
     //Validate User Registration Inputs
    await validate.validateRegisterStepTwo(userRegistaionDetails)
    // If Not Crypt Is Password
    let salt = await bcrypt.genSalt(10);

    userRegistaionDetails.password = await bcrypt.hash(userRegistaionDetails.password, salt);

    return await userDb.register(userRegistaionDetails)

};


const checkIfUserExistBeforRegister = async (userRegistaionDetails) => {
      //Validate first step User Registration Inputs
    await validate.validateRegisterStepOne(userRegistaionDetails);

    const response = await userDb.isUserExistByEmailOrId(userRegistaionDetails.email,userRegistaionDetails.userId)
    return response
};

//Login
const login = async (userLoggedDetails) => {
 
     //Validate User Login Inputs
     await validate.validateLogin(userLoggedDetails);

    // Get The Roll , And The Id
    const [userData] = await userDb.login(userLoggedDetails.email);
    // Check If User Does Not Exist 
     await validateLogin(userData,userLoggedDetails);
    //Create The Token
    const token = await generateToken(userData.email);
   
    //Store The Id And Roll Inside The Cache
     cacheModule.set(token, userData);
     
    // The Objact Information That We Send Back
    let sucssefuleLogin = { 
        token:token,
        admin:userData.admin,
        userInfo:{
            firstName:userData.firstName,
            lastName:userData.lastName,
            city:userData.city,
            street:userData.street
        }
        
    }

    return sucssefuleLogin;
};
// validate If User Exsist
const validateLogin = async (userData,userLoggedDetails) => {
    if(!userData){
        throw new ServerError(ErrorType.USER_NAME_NOT_EXIST);
     }
     await validateUserPassword(userData,userLoggedDetails.password)
}

//Valide The Password
const validateUserPassword = async (userData,password) => { 
    // Check If The Passwords Is Match
    const comparePassword = await bcrypt.compare(password,userData.password)

    if (!comparePassword) {

        throw new ServerError(ErrorType.UNAUTHORIZED)
    }
};

//Creat The Token
const generateToken = (email) => {
 
    const userEmailData = {email };

    const token = jwt.sign({ userEmailData }, config.secret);

    return token
}

//Get One User
const getOneUser = async (user) => {
    return await userDb.getOneUser(user)
};



module.exports = {
    register,
    login,
    getOneUser,
    allUsers,
    checkIfUserExistBeforRegister
}