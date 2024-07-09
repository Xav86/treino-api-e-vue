/* HomeController.js */

class HomeController {

    async home(req, res) {
        res.send('oi');
    }

}

module.exports = new HomeController;