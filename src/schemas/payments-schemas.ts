import Joi from "joi";

export const paymentSchema = Joi.object({
  ticketId: Joi.number().required(),
  cardData: {
    issuer: Joi.string().required(),
    number: Joi.string().required(),
    name: Joi.string().required(),
    expirationDate: Date,
    cvv: Joi.string().required()
  }
});
