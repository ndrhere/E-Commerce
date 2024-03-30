const express = require('express');
const app = express();
const cartItem = require('./Schema/ProductSchema');
const connectToMongo = require('./Db');
var cors = require('cors');
app.use(cors());
app.use(express.json())
connectToMongo();
const PORT = 3000;

app.post('/savetocart', async (req, res) => {
    try{
        const newItem = new cartItem(req.body);
        await newItem.save();
        res.send(newItem)
    }catch(error){
      console.error("There is some error", error);
      res.status(500).send('Error')
    }
})


app.get('/cartitems', async (req, res) => {
    try{
        const cartItems = await cartItem.find();
        res.status(200).send(cartItems)
        console.log(cartItems)
    }catch(error){
        res.status(500).send('Error')
    }
  
})


app.delete(`/deletecartitems/:productId`, async (req, res) => {
  try {
    const productId = req.params.productId; 
    const deletedItem = await cartItem.findByIdAndDelete(productId);
    res.status(204).send(deletedItem);
  } catch (error) {
    console.error('There is some error', error);
    res.status(500).send('Error');
  }
});




app.listen(PORT, () => {
    console.log(`App is listening to port ${PORT}`)
})