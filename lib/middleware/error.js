// eslint-disable-next-line no-unused-vars
module.exports = (err, req, res, next) => {
  const status = err.status || 500;

  console.log(err);

  res.status(status).send({ status, message: err.message });
};
