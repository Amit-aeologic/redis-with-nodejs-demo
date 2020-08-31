module.exports = (sql, Sequelize) => {
    const User = sql.define('tests', {
        name: {
          type: Sequelize.STRING
        },
        dateofbirth: {
          type: Sequelize.DATE
        },
        address: {
          type: Sequelize.STRING
        },
        mobile_number: {
          type: Sequelize.STRING
        }
    },
    {
      timestamps: false
    });
    return User
  }