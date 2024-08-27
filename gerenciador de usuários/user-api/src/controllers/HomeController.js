class HomeController {

    async oi(req, res) {
        res.status(200).json({msg: 'oi'});
    }

    async validate(req, res) {
        res.status(200).json({status: 'ok'});
    }
    
}

module.exports = new HomeController;