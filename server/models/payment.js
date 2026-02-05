module.exports = (sequelize, DataTypes) => {
  const Payment = sequelize.define('Payment', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    // The foreign key will be added automatically by associations, 
    // but we define the other fields here:
    amount: {
      type: DataTypes.FLOAT, // Matching your Booking's totalAmount type
      allowNull: false
    },
    type: {
      type: DataTypes.ENUM('deposit', 'full'),
      allowNull: false
    },
    stripeSessionId: {
      type: DataTypes.STRING,
      allowNull: true
    },
    status: {
      type: DataTypes.STRING, // usually 'succeeded' from Stripe
      allowNull: false,
      defaultValue: 'succeeded'
    }
  }, {
    tableName: 'Payments',
    underscored: true, // This ensures createdAt/updatedAt become created_at/updated_at
    timestamps: true
  });

  Payment.associate = (models) => {
    Payment.belongsTo(models.Booking, {
      foreignKey: 'booking_id',
      onDelete: 'CASCADE' // If a booking is deleted, delete its payment history
    });
  };

  return Payment;
};