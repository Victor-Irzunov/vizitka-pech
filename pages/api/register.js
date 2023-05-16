const { User } = require('../../models/models');
const sequelize = require('../../utils/db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const createUser = async (req, res) => {
  const { email, password, isAdmin } = req.body;
  try {
    const user = await User.findOne({ where: { email } });
    if (user) {
      return res.status(401).json({ message: 'Пользователь уже зарегистрирован' });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const userDB = await User.create({
      email,
      password: hashedPassword,
      isAdmin
    });
    const token = jwt.sign(
      { email: userDB.email, id: userDB.id, isAdmin:userDB.isAdmin },
      process.env.SECRET_KEY,
      { expiresIn: '30 days' }
    );
    res.json({token});
  } catch (error) {
    res.status(500).json({ message: 'Ошибка регистрации' });
  }
}
module.exports = {
  createUser
};
