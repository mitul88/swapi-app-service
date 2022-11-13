const router = require('express').Router()
const {getCharacter, getAllCharacters, searchCharacter, getSpecies, getHomeworld, getFilmNames} = require('../controllers/apiControllers')
const {applicationJson} = require('../middlewares/contentTypeMiddleware')

router.route('/').get(getAllCharacters)
router.route('/view/:id').get(getCharacter)
router.route('/getSpecies/:id').get(getSpecies)
router.route('/getHomeworld/:id').get(getHomeworld)
router.route('/getFilmNames/:id').get(getFilmNames)

router.route('/search').post(applicationJson, searchCharacter)

module.exports = router