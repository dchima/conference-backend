module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Talks', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    presenterName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    talkTitle: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    venue: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    talkDuration: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    talkDate: {
      allowNull: true,
      type: Sequelize.DATE,
    },
    organization: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    isVerified: {
      type: Sequelize.BOOLEAN,
      allowNull: true,
      defaultValue: false,
    },
    talkImage: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  }),
  down: (queryInterface) => queryInterface.dropTable('Talks'),
};

