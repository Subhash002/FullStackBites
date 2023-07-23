// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
const getProducts = asyncHandler(async (req, res) => {
  // Fetch all products from the database
  const pageSize = 2;
  const page = Number(req.params.pageNumber);
  const count = await Product.countDocuments();
  const products = await Product.find({})
    .limit(pageSize)
    .skip(pageSize * (page - 1));

  // Return the products as a JSON response
  res.json({ products, page, pages: Math.ceil(count / pageSize) });
});
