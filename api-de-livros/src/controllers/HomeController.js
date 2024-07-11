/* HomeController.js */

class HomeController {

    async index(req, res) {
        res.json({msg: 'Oi, api funcionando'});
    }
    
}

module.exports = new HomeController;