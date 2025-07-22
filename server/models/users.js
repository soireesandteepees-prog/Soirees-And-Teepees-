module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
      Userid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false
      },
      full_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false
      },
      password_hash: {
        type: DataTypes.STRING,
        allowNull: false
      },
      phone_number: {
        type: DataTypes.STRING,
        allowNull: true
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false
      },
      role: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'user',
      },
      picture: {
        type: DataTypes.STRING,
        allowNull: true
      },
      shipping_address: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email_verified: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },
      verification_token: {
        type: DataTypes.STRING,
        allowNull: true
      }
    }, {
      tableName: 'Users',
      underscored: true
    });
  
    return User;
  };
  