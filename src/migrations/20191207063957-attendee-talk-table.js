module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('AttendeeTalks', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    talkId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'Talks',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    },
    attendeeId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'Attendees',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    }
  }),

  down: (queryInterface) => queryInterface.dropTable('AttendeeTalks')
};

