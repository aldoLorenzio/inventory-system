const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createOrderItem = {
  body: Joi.object().keys({
    orderId: Joi.string().required(),
    productId: Joi.string().required(),
    quantity: Joi.number().required(),
    unitPrice: Joi.number().required(),
  }),
};

const getOrderItem = {
  params: Joi.object().keys({
    orderItemId: Joi.string().custom(objectId),
  }),
};

const updateOrderItem = {
  params: Joi.object().keys({
    orderItemId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      orderId: Joi.string(),
      productId: Joi.string(),
      quantity: Joi.number(),
      unitPrice: Joi.number(),
    })
    .min(1),
};

const deleteOrderItem = {
  params: Joi.object().keys({
    orderItemId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createOrderItem,
  getOrderItem,
  updateOrderItem,
  deleteOrderItem,
};
