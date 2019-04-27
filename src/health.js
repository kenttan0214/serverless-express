const health = (req, res) => {
  res.status(200).json({ status: 'up and running' });
};

export default health;
