module.exports = (sequelize, DataTypes) => {
  const Meetup = sequelize.define('Meetup', {
    talkId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Talk',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    },
    attendeeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Attendee',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    },
  }, {});
  Meetup.associate = (models) => {
    // associations can be defined here
  };
  return Meetup;
};
