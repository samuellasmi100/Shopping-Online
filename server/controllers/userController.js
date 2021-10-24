const router = require('express').Router();
const userLogic = require('../logic/userLogic');
const cacheModule = require('../logic/cache-module')

//Register Route
router.post('/validate', async (req, res, next) => {
    const userRegistaionDetails = req.body;
    try {
        const response = await userLogic.checkIfUserExistBeforRegister(userRegistaionDetails);
        res.json(response)
        
    } catch (error) {
        return next(error);
    }
});

router.post('/register', async (req, res, next) => {
    const userRegistaionDetails = req.body;
    try {
        await userLogic.register(userRegistaionDetails);
        res.json('Registration Was successful');
    } catch (error) {
        return next(error);
    }
});

//Login Route
router.post('/login', async (req, res, next) => {
    const userLoggedDetails = req.body;
    try {
        const user = await userLogic.login(userLoggedDetails);
        res.json(user);
    } catch (error) {
        return next(error);
    }
});

//Get One User Route
router.get('/:id', async (req, res, next) => {
    const getUserId = cacheModule.extractUserDataFromCache(req).id;
    try {
        const user = await userLogic.getOneUser(getUserId);
        res.json(user);
    } catch (error) {
        return next(error);
    }
});

module.exports = router;