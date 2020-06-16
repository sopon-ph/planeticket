const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const db = require("../models");
const Flight = db.flight
const Seat = db.seat

const flightPlane = [
    {id:1,start:"กทม",finish:"เชียงใหม่",price:1999},
    {id:2,start:"กทม",finish:"เชียงใหม่",price:1999},
    {id:3,start:"กทม",finish:"เชียงใหม่",price:1999},
    {id:4,start:"กทม",finish:"เชียงใหม่",price:1999},
    {id:5,start:"กทม",finish:"เชียงใหม่",price:1999},
  ]
const seat = [
    {no:1,status:false,price:1500},
    {no:2,status:false,price:1500},
    {no:3,status:false,price:1500},
    {no:4,status:false,price:1500},
    {no:5,status:false,price:1500},
    {no:6,status:false,price:1500},
    {no:7,status:false,price:1500},
    {no:8,status:false,price:1500},
    {no:9,status:false,price:1500},
    {no:10,status:false,price:1500}
]
exports.create = (status) => {
    for (let i = 0; i < flightPlane.length; i++) {
        const new_flight = new Flight({
            id : flightPlane[i].id,
            start : flightPlane[i].start,
            finish : flightPlane[i].finish,
            //seat : flightPlane[i].seat
        }
        );
        new_flight.save(new_flight).catch(err =>{
            console.log(err)
        });
        for(let x = 0;x<seat.length;x++){
            const newSeat = new Seat({
                no : seat[x].no,
                status:seat[x].status,
                price:seat[x].price,
                f_id: flightPlane[i].id
            });
            newSeat.save(newSeat).catch(err =>{
                console.log(err)
            })
        }
    }

    return ({ status: "ready" });

};

exports.deleteAll = () => {
    Flight.deleteMany({})
        .then(data => {})
        .catch(err => {});
    return true;
};
const getFlight =() => {
    return new Promise ((resolve, reject) =>{
        Flight.find({}, (err, data) => {
            if(err){
                reject(new Error('Cannont get products!'));
            }else{
                if(data){
                    resolve(data)
                }else{
                    reject(new Error('Cannont get products!'));
                }
            }
        })
    });
}
exports.findAll = ( (req, res) => {
    console.log('get');
    getFlight()
        .then(result => {
            console.log(result);
            res.status(200).json(result);
        })
        .catch(err => {
            console.log(err);
        })
});