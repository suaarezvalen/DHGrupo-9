const userControllers =  
{
    login: (req, res) => {
        res.render('user/login')
    },
    registro: (req, res) => {
        res.render('user/registro')
    }
}   
module.exports = userControllers;                                   