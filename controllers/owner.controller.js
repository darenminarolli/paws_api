const { request } = require('express');
const Owner = require('../models/owner.model.js');
const fs = require('fs');

const getOwners = async (req, res) => {
    try {
        const products = await Owner.find({})
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: ' Error message' })
    }
}

const getSingleOwner = async (req, res) => {
    try {
        const { slug } = req.params;
        const product = await Owner.findOne({ name: slug });
        res.status(200).json(product)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}
const postOwner = async (req, res) => {
    try {
      // Extract and process multiple uploaded images
      const images = req.files ? req.files?.map(file => ({
        data: file.buffer,
        contentType: file.mimetype
      })) : [];
  
      // Create the owner with the uploaded images
      const ownerData = req.body;
      ownerData.images = images;
      const owner = await Owner.create(ownerData);
  
      // Delete temporary files after processing
      if (req.files) {
        req.files.forEach(file => {
          // You can delete the file here if needed
        });
      }
  
      res.status(200).json(owner);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };


const updateOwner = async (req, res) => {
    try {
        // const { id } = req.params;

        // // Update the owner
        // const owner = await Owner.findByIdAndUpdate(id, req.body, { new: true });

        // if (!owner) {
        //     return res.status(404).json({ message: 'Owner not found' });
        // }

        // // Update the associated pets if present
        // if (req.body.pets) {
        //     const petUpdates = req.body.pets.map(async (petData) => {
        //         await Pet.findOneAndUpdate({ ownerId: owner.userId, petId: petData.petId }, petData);
        //     });
        //     await Promise.all(petUpdates);
        // }

        // Respond with the updated owner
        res.status(200).send(req.params);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteOwner = async (req, res) => {
    try {
        const { id } = req.params
        const product = await Owner.findByIdAndDelete(id)
        const allProducts = await Owner.find({});
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

module.exports = { getOwners, getSingleOwner, postOwner, updateOwner, deleteOwner }