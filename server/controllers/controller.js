const axios = require('axios');
const bodyParser = require('body-parser')

let cards = [{
    name: 'Totoru',
    image: 'https://i.redd.it/ko8rxxqv1yty.jpg',
    random: 'input joke here',
    id: 0
  }]
let id = 1;

module.exports = {
    getCards: (req, res) => {
        res.status(200).send(cards)
    },
    createCard: (req, res) => {
        let {name, image} = req.body;
        cards.push({
            name: name,
            image: image,
            id: id
        })
        id++
        res.status(200).send(cards)
    },
    edit: (req,res) => {
        let {id} = req.params;
        let {name} = req.body;

        for(let i = 0; i < cards.length; i++){
            if(cards[i].id == id){
                cards[i].image = name
            }
        }
        res.status(200).send(cards)
    },
    delete: (req,res) => {
        let {id} = req.params;
        for(let i = 0; i < cards.length; i++){
            if(cards[i].id == id){
                cards.splice(i ,1)
            }
        }
        res.status(200).send(cards)
    }
}