const mongoose =require("mongoose");

const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        description: {
            type: String
        },
        price: {
            type: Number,
            required: true
        },
        maxretailprice: {
            type: Number
        },
        productImage: {
            type: String
        },
        stock: {
            type: Number
        }
    }
)
module.exports = mongoose.model("Product", productSchema)