class HomeController {

    async oi(req, res) {
        res.status(200).json({msg: 'oi'});
    }
    
}

module.exports = new HomeController;