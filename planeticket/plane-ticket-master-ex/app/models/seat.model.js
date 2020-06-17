module.exports = mongoose => {

    const schema = mongoose.Schema({
        id: {type:Number,unique:true},
        no: { type: Number},
        status: { type: Boolean},
        price:{ type : Number},
        f_id:{ type:Number}
   },{ timestamps: false });
   
    const Seat = mongoose.model("seat", schema);
    return Seat;
};