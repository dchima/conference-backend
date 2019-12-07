module.exports = (sequelize, DataTypes) => {
  const Talk = sequelize.define( 'Talk',
      {
        presenterName: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        talkTitle: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        venue: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        talkDuration: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        talkDate: {
          allowNull: true,
          type: DataTypes.DATE,
        },
        organization: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        isVerified: {
          type: DataTypes.BOOLEAN,
          allowNull: true,
          defaultValue: false,
        },
        talkImage: {
          type: DataTypes.STRING,
          allowNull: true,
        },
      },
      {}
  );
  Talk.associate = (models) => {
    Talk.belongsToMany(models.Attendee, {
      through: 'AttendeeTalks',
      as: 'attendees',
      foreignkey: 'talkId'
    });
  };
  return Talk;
};
