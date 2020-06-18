const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const db = require("../models");
const Flight = db.flight
const Seat = db.seat
const Pro = db.promo

const flightPlane = [
    {id:1,start:"bkk",finish:"yala",price:1999,fdate:"19/6/2563 10:30"},
    {id:2,start:"bkk",finish:"chiangmai",price:1999,fdate:"20/6/2563 11:00"},
    {id:3,start:"bkk",finish:"udontani",price:1999,fdate:"21/6/2563 11:30"},
    {id:4,start:"yala",finish:"bkk",price:1999,fdate:"22/6/2563 12:00"},
    {id:5,start:"yala",finish:"chiangmai",price:1999,fdate:"23/6/2563 12:30"},
    {id:6,start:"yala",finish:"udontani",price:1999,fdate:"24/6/2563 13:00"},
    {id:7,start:"udontani",finish:"yala",price:1999,fdate:"25/6/2563 13:30"},
    {id:8,start:"udontani",finish:"chiangmai",price:1999,fdate:"26/6/2563 14:00"},
    {id:9,start:"udontani",finish:"bkk",price:1999,fdate:"27/6/2563 14:30"},
    {id:10,start:"chiangmai",finish:"yala",price:1999,fdate:"28/6/2563 15:00"},
    {id:11,start:"chiangmai",finish:"udontani",price:1999,fdate:"29/6/2563 15:23"},
    {id:12,start:"chiangmai",finish:"bkk",price:1999,fdate:"30/6/2563 16:00"},
    {id:13,start:"bkk",finish:"yala",price:1999,fdate:"19/6/2563 10:30"},
    {id:14,start:"bkk",finish:"chiangmai",price:1999,fdate:"20/6/2563 12:00"},
    {id:15,start:"bkk",finish:"udontani",price:1999,fdate:"21/6/2563 12:30"},
    {id:16,start:"bkk",finish:"yala",price:1999,fdate:"19/6/2563 11:30"},
    {id:17,start:"bkk",finish:"chiangmai",price:1999,fdate:"20/6/2563 13:00"},
    {id:18,start:"bkk",finish:"udontani",price:1999,fdate:"21/6/2563 13:30"},
    {id:19,start:"yala",finish:"chiangmai",price:1999,fdate:"23/6/2563 13:30"},
    {id:20,start:"yala",finish:"udontani",price:1999,fdate:"24/6/2563 14:00"},
    {id:21,start:"udontani",finish:"yala",price:1999,fdate:"25/6/2563 15:30"},
    {id:21,start:"udontani",finish:"chiangmai",price:1999,fdate:"26/6/2563 16:00"},
    {id:22,start:"chiangmai",finish:"yala",price:1999,fdate:"28/6/2563 14:00"},
    {id:23,start:"chiangmai",finish:"udontani",price:1999,fdate:"29/6/2563 16:23"},
    {id:24,start:"chiangmai",finish:"bkk",price:1999,fdate:"30/6/2563 12:00"},
    
    
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
const pro = [
    {code:"rich01",discount:200},
    {code:"rich02",discount:300},
    {code:"rich03",discount:400},
    {code:"rich04",discount:500},
    {code:"rich05",discount:600},
    {code:"rich06",discount:700},
    {code:"rich07",discount:800},
]
exports.create = (status) => {
    let s_id = 1;
    for (let i = 0; i < flightPlane.length; i++) {
        const new_flight = new Flight({
            id : flightPlane[i].id,
            start : flightPlane[i].start,
            finish : flightPlane[i].finish,
            fdate : flightPlane[i].fdate
        });
        new_flight.save(new_flight).catch(err =>{
            console.log(err)
        });

        for(let x = 0 ; x < seat.length ; x++){
            const newSeat = new Seat({
                id: s_id,
                no : seat[x].no,
                status:seat[x].status,
                price:seat[x].price,
                f_id: flightPlane[i].id
            });
            newSeat.save(newSeat).catch(err =>{
                console.log(err)
            })
            s_id ++
        }
    }
    for (let i=0;i<pro.length;i++){
        const newPro = new Pro({
            id:i,
            code:pro[i].code,
            discount:pro[i].discount
        });
        newPro.save(newPro).catch(err =>{
            console.log(err)
        })
    }

    return ({ status: "ready" });

};

exports.deleteAll = () => {
    Flight.deleteMany({})
        .then(data => {})
        .catch(err => {}),
    Seat.deleteMany({})
    .then(data => {})
    .catch(err => {}),
    Pro.deleteMany({})
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
        }).sort({id:1})
    });
} 
const getSeat =(id) => {
    return new Promise ((resolve, reject) =>{
    console.log(id)
       Seat.find({f_id:Number(id)}, (err, data) => {
            if(err){
                reject(new Error('Cannont get products!'));
            }else{
                if(data){
                    resolve(data)
                }else{
                    reject(new Error('Cannont get products!'));
                }
            } 
        }).sort({no:1})
    });
}
const findFlight =(start,finish) => {
    return new Promise ((resolve, reject) =>{
    console.log('find '+start+' to '+finish)
       Flight.find({start:start,finish:finish}, (err, data) => {
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
const buySeat =(id) => {
    return new Promise ((resolve, reject) =>{
    console.log('seat no'+id)
       Seat.updateOne({id:Number(id)}, { $set: {status:true} }, function(err, res) {
        if (err) throw err;
        console.log("1 document updated");
        Seat.find({id:Number(id)}, (err, data) => {
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

    });
}
const getPro = (scode) => {
    return new Promise ((resolve, reject) =>{
    console.log('find code '+scode)
       Pro.find({code:scode}, (err, data) => {
            if(err){
                reject(new Error('Cannont get products!'));
            }else{
                if(data){
                    resolve(data)
                }else{
                    reject(new Error('Cannont get products!'));
                }
            } 
        }).sort({no:1})
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
exports.findSeat = ( (req, res) => {
    console.log('getSeat');
    getSeat(req.params.id)
        .then(result => {
            console.log(result);
            res.status(200).json(result);
        })
        .catch(err => {
            console.log(err);
        })
});
exports.buySeat = ( (req, res) => {
    console.log('changeStatusSeat');
    buySeat(req.params.id)
    .then(result => {
        console.log(result);
        res.status(200).json(result);
    })
    .catch(err => {
        console.log(err);
    })
});
exports.checkPro = ( (req, res) => {
    console.log('checkPromotion');
    getPro(req.params.code)
        .then(result => {
            console.log(result);
            res.status(200).json(result);
        })
        .catch(err => {
            console.log(err);
        })
});
exports.getOneFlight = ( (req, res) => {
    console.log('findFlight');
    findFlight(req.params.start,req.params.finish)
    .then(result => {
        console.log(result);
        res.status(200).json(result);
    })
    .catch(err => {
        console.log(err);
    })
});
