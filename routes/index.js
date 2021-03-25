module.exports = (router) => {
  // *
  // Status Check
  router.get('/', (req, res) => {
    res.send('<h1> API Image Working 1.0 </h1>');
  });
};
