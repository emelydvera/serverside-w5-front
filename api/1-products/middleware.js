exports.getPath = function getPath(req, res, next) {
  const { category } = req.params;
  res.locals.category = category;
  next();
};
