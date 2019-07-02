const health = (req, res) => {
  const foo = process.env.FOO || 'no value';
  res.status(200).json({ status: 'up and running', foo });
};

export default health;
