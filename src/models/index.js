const db = require('../config/db');
const {DataTypes} = require('sequelize');

const User = db.define('user', {
    id: {primaryKey: true, type: DataTypes.STRING},
    password: {type: DataTypes.STRING, allowNull: false},
    email: {type: DataTypes.STRING, unique: true},
    phone: {type: DataTypes.STRING, unique: true},
    isActivated: {type: DataTypes.BOOLEAN},
    activationLink: {type: DataTypes.STRING, unique: true},
    activationCode: {type: DataTypes.INTEGER, unique: true}
});

// TODO CHANGE SOME FIELDS AS NECESSARY
const UserData = db.define('userData', {
    name: {type: DataTypes.STRING},
    surname: {type: DataTypes.STRING},
    dateOfBirth: {type: DataTypes.DATE, allowNull: false},
    sex: {type: DataTypes.STRING, allowNull: false},
    city: {type: DataTypes.STRING, allowNull: false},
    profileImage: {type: DataTypes.STRING, allowNull: false},
    interests: {type: DataTypes.STRING},
    education: {type: DataTypes.STRING},
    height: {type: DataTypes.FLOAT},
    bodyType: {type: DataTypes.STRING},
    ethnicity: {type: DataTypes.STRING},
    favouriteMusicGenres: {type: DataTypes.STRING},
    favouriteFoods: {type: DataTypes.STRING},
    favouriteDrinks: {type: DataTypes.STRING},
    favouriteBooksGenres: {type: DataTypes.STRING},
    fashionStyle: {type: DataTypes.STRING},
    personType: {type: DataTypes.STRING},
    links: {type: DataTypes.STRING},
    zodiacSign: {type: DataTypes.STRING},
    description: {type: DataTypes.STRING(1250), allowNull: false},
    goalsOfRelationship: {type: DataTypes.INTEGER},
    weight: {type: DataTypes.FLOAT},
    religion: {type: DataTypes.STRING}
});

const Session = db.define('session', {
    id: {primaryKey: true, type: DataTypes.STRING},
    refreshToken: {type: DataTypes.STRING, allowNull: false, unique: true}
});

User.hasMany(Session);
Session.belongsTo(User);

User.hasOne(UserData);
UserData.belongsTo(User);

// TODO FIX MODELS IN SOME CASE

module.exports = {
    User,
    Session,
    UserData
};