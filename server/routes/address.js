const router = require("express").Router();
const Address = require("../models/address")

router.post("/addAddress", async(request, response) => {
  const add = request.body;
   console.log(add)

  const newAddress = new Address(add)

  try {
    await newAddress.save();
    response.status(201).json(newAddress);
    
  } catch (error) {
    response.status(400).json({ message: error.message });
  }
});

router.get("/getAddress", async (request, response) => {
 
  try {
    const address = await Address.find({});
    
    response.status(200).json(address);
  } catch (error) {
    response.status(404).json({ message: error.message });
  }
});

router.delete("/removeAddress/:id", async (request, response) => {
  try {
    await Address.deleteOne({ _id: request.params.id });
    response.status(200).json({ message: "item deleted successfully" });
  } catch (error) {
    response.status(404).json({ message: error.message });
  }
});

module.exports = router;