const User = require('./user');
const Comments = require('./Comment');
const Jobposting = require('./jobposting');

User.hasMany(Jobposting, {
    foreignKey: 'User_id'
});

User.hasMany(Comments, {
    foreignKey: 'User_id',
    onDelete: "cascade"
});

Jobposting.belongsTo(User, {
    foreignKey: 'User_id',
    onDelete: "cascade"
});

Jobposting.hasMany(Comments, {
    foreignKey: 'job_id',
    onDelete: "cascade"
});

Comments.belongsTo(Jobposting, {
    foreignKey: 'job_id',
    onDelete: "cascade"
});

Comments.belongsTo(User, {
    foreignKey: 'User_id',
    onDelete: "cascade"
});

module.exports = { User, Jobposting, Comments };