// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const anime = sequelizeClient.define('anime', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    type: {
      type: DataTypes.STRING
    },
    episodes: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    picture: {
      type: DataTypes.STRING
    },
    thumbnail: {
      type: DataTypes.STRING
    },
    synonyms: {
      type: DataTypes.ARRAY(DataTypes.String)
    },
    sources: {
      type: DataTypes.ARRAY(DataTypes.String)
    },
    relations: {
      type: DataTypes.ARRAY(DataTypes.String)
    }
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line no-unused-vars
  anime.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return anime;
};

