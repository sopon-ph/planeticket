module.exports = mongoose => {

    var schema = mongoose.Schema({
        id: { type: Number, unique: true },
        start: { type: String, required: true },
        finish: { type: String, required: true},
    }, { timestamps: false });

    const Flight = mongoose.model("flight", schema);
    return Flight;
};