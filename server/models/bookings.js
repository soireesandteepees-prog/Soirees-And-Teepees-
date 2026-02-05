module.exports = (sequelize, DataTypes) => {
    const Booking = sequelize.define('Booking', {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
      },
      parentName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      childName: {
        type: DataTypes.STRING,
        allowNull: true
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false
      },
      city: {
        type: DataTypes.STRING,
        allowNull: true
      },
      zipcode: {
        type: DataTypes.STRING,
        allowNull: true
      },
      packageType: {
        type: DataTypes.STRING,
        allowNull: false
      },
      addOns: {
        type: DataTypes.JSON,
        allowNull: true
      },
      theme: {
        type: DataTypes.JSON,
        allowNull: true
      },
      eventDate: {
        type: DataTypes.STRING,
        allowNull: false
      },
      eventTime: {
        type: DataTypes.STRING,
        allowNull: false
      },
      guestCount: {
        type: DataTypes.STRING,
        allowNull: true
      },
      childAge: {
        type: DataTypes.STRING,
        allowNull: true
      },
      eventDuration: {
        type: DataTypes.STRING,
        allowNull: false
      },
      paymentStatus: {
        type: DataTypes.ENUM('pending', 'partially_paid', 'paid', 'failed'),
        allowNull: false,
        defaultValue: 'pending'
      },
      paymentMethod: {
        type: DataTypes.STRING,
        allowNull: true
      },
      paymentType: {
        type: DataTypes.ENUM('deposit', 'full'),
        allowNull: false,
        defaultValue: 'deposit'
      },
      specialRequests: {
        type: DataTypes.JSON,
        allowNull: true
      },
      totalAmount: {
        type: DataTypes.FLOAT,
        allowNull: false
      },
      status: {
        type: DataTypes.ENUM('pending', 'confirmed', 'completed', 'cancelled'),
        allowNull: false,
        defaultValue: 'pending'
      }
    }, {
      tableName: 'Bookings',
      underscored: true
    });

    Booking.associate = (models) => {
      Booking.hasMany(models.Payment, {
        foreignKey: 'booking_id',
        as: 'Payments' // This is the alias you'll use in 'include' queries
      });
    };
  
    return Booking;
  };
  