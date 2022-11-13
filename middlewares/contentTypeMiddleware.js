module.exports = {
    applicationJson: (req, res, next) => {
        if (req.is('application/json')) {
            next();
        } else {
            res.status(404).json({
                status: false,
                message: 'Invalid content type'
            })
        }
    }
}