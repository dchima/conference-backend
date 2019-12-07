module.exports = (sequelize, DataTypes) => {
  const AttendeeTalk = sequelize.define('AttendeeTalk',
      {
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
        }
      },
      {}
  );
  AttendeeTalk.associate = () => {
    // add model as function parameter and define associations here
  };
  return AttendeeTalk;
};
