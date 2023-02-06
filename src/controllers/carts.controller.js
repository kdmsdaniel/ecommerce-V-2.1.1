const CartsServices = require('../services/carts.service')
const { Products, ProductInCar } = require('../models');
const { getUsersCartId, cartTotalPrice } = require('../middlewares');

const getCartByIdUser = async (req, res, next)=> {
  try {
    const { idUser } = require.body;
    const cart = await CartsServices.getByUserId(idUser);
    res.status(201).json(cart);
  } catch (error) {
    next(error);
  }
};

const addProductToCart = async (req, res, next)=> {
  try {
    const { idProduct, quantity } = req.body;
    const usersToCart = await getUsersCartId(req);

    const matchedProduct = await ProductInCar.findOne({where: {idCar: usersToCart.id, idProduct} });
    if(quantity < 1) {
      res.status(400).json("You can't add to cart");
    }else if (matchedProduct) {
      res.status(400).json("You can't add the same product");
    } else {
      const infoProduct = await Products.findOne({ where: {id: {idProduct}} });
      if(infoProduct.availableQty < quantity) {
        res.status(400).json("They aren't not enough product in stock");
      } else {
        const productInCart = {
          idCar: usersToCart.id,
          idProduct: infoProduct.id,
          quantity: quantity,
          price: quantity * infoProduct.price
        };
        const addProduct = await CartsServices.addToCart(productInCart);
        await cartTotalPrice(usersToCart.id);

        res.status(201).json(addProduct);
      }
    }

  } catch (error) {
    next(error);
  }
};

module.exports = { getCartByIdUser, addProductToCart };
