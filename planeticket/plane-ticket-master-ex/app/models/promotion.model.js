module.exports = mongoose => {

    const schema = mongoose.Schema({
        id: {type:Number,unique:true},
        code : { type: String},
        discount:{ type : Number}
   },{ timestamps: false });
   
    const Pro = mongoose.model("promotion", schema);
    return Pro;
};