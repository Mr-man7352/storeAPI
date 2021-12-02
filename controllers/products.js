const getAllProductsStatic = async (req, res) => {
  throw new Error("testing async errors");
  res.status(200).json({ msg: "testing proudcts" });
};

const getAllProducts = async (req, res) => {
  res.status(200).json({ msg: "not static proudcts" });
};

module.exports = {
  getAllProducts,
  getAllProductsStatic,
};
