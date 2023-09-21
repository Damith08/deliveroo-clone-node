exports.findDishById = (id) => {
  return Dish.find()
    .exec()
    .then((foundDish) => {
      return res.status(200).json({
        success: "Dish found successfully!!!",
      });
    })
    .catch((err) => {
      return res.status(400).json({ error: er });
    });
};

exports.deleDish = (id) => {
  return Dish.findbyid().exec();
};
