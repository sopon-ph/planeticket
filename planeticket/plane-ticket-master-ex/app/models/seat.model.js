module.exports = mongoose => {

    const schema = mongoose.Schema({
        no: { type: Number},
        status: { type: Boolean},
        price:{ type : Number},
        f_id:{ type:Number}
   },{ timestamps: false });
   
    const Seat = mongoose.model("seat", schema);
    return Seat;
};