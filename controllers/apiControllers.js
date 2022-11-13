const swapi = require('swapi-node');

module.exports.getCharacter = (req, res) => {
    
    const id = req.params['id']
     
    // page 1-8
    swapi.people({ id }).then((result) => {
            res.status(200).send(result)
        }).catch((err) => {
            console.error(err);
        });
}
module.exports.getSpecies = (req, res) => {
    
    const id = req.params['id']
     
    // page 1-8
    swapi.species({ id }).then((result) => {
            res.status(200).send(result)
        }).catch((err) => {
            console.error(err);
        });
}

module.exports.getHomeworld = (req, res) => {
    
    const id = req.params['id']
     
    // page 1-8
    swapi.get(`https://swapi.dev/api/planets/${id}`).then((result) => {
            res.status(200).send(result)
        }).catch((err) => {
            console.error(err);
        });
}

module.exports.getFilmNames = (req, res) => {
    
    const id = req.params['id']
     
    // page 1-8
    swapi.get(`https://swapi.dev/api/films/${id}`).then((result) => {
            res.status(200).send(result.title)
        }).catch((err) => {
            console.error(err);
        });
}

module.exports.getAllCharacters = (req, res) => {
    let page = ''
    if(req.query['page']) page = req.query['page']
     
    // page 1-8
    swapi.get(`https://swapi.dev/api/people/?page=${page}`).then((result) => {
            return result.nextPage();
        }).then((result) => {
            return result.previousPage();
        }).then((result) => {
            res.status(200).send(result.results)
        }).catch((err) => {
            console.error(err);
        });
}

module.exports.searchCharacter = (req, res) => {
    const searchItem = req.body['search']
    swapi.get(`https://swapi.dev/api/people/?search=${searchItem}`)
        .then((result) => {
            res.status(200).send(result)
        })
        .catch((err) => {
            console.error(err)
        })
}

