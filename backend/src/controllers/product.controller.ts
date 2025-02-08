import { RequestHandler } from 'express';
import { Product } from '../models/product.model';

export const getProducts: RequestHandler = async (req, res) =>{
    try {
        const products = await Product.find();
        if(products.length === 0){
            res.status(404).json({message: "Productos no encontrados"});
            return;
        }
        res.json(products);
    } catch (error) {
        console.log(error);
    }; 
};

export const createProduct: RequestHandler = async (req, res) =>{
    try {
        const productFound = await Product.findOne({name:req.body.name});
        if(productFound){
            res.status(301).json({message: "Ya existe el producto"});
            return;
        }
        const product = new Product(req.body);
        const savedProduct = await product.save();
        res.json(savedProduct);
    } catch (error) {
        console.log(error);
    }; 
};

export const getProduct: RequestHandler = async (req, res) =>{
    try {
        const productFound = await Product.findById(req.params.id);
        if (!productFound){
            res.status(404).json({message: "Producto no encontrado"});
            return;
        }
        res.json(productFound);
    } catch (error) {
        console.log(error);
    }; 
}; 

export const updateProduct: RequestHandler = async(req, res) =>{
    try {
        const productUpdate = await Product.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new: true}
        );
        if (!productUpdate){
            res.status(404).json({message: "Producto no encontrado"});
            return;
        }
        res.json(productUpdate);
    } catch (error) {
        console.log(error);
    }; 
};

export const deleteProduct: RequestHandler = async (req, res) =>{
    try {
        const productDelete = await Product.findByIdAndDelete(req.params.id);
        if (!productDelete){
            res.status(404).json({message: "Producto no encontrado"});
            return;
        }
        res.json(productDelete);
    } catch (error) {
        console.log(error);
    }; 
}; 
