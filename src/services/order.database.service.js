exports.findOrderById = (id) => {
  return Order.find()
    .exec()
    .then((foundOrder) => {
      return res.status(200).json({
        success: "Order found!!!",
      });
    })
    .catch((err) => {
      return res.status(400).json({
        error: err,
      });
    });
};
