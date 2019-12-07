module.exports = (sequelize, DataTypes) => {
  const Attendee = sequelize.define('Attendee',
      {
        firstName: {
          type: DataTypes.STRING,
          allowNull: false
        },
        lastName: {
          type: DataTypes.STRING,
          allowNull: false
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false,
          isEmail: true,
          unique: true
        },
      },
      {}
  );
  Attendee.associate = (models) => {
    Attendee.belongsToMany(models.Talk, {
      through: 'Meetups',
      as: 'talks',
      foreignKey: 'attendeeId'
    });
  };
  return Attendee;
};
