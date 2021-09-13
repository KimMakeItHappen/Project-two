const user = require('./user');
const comments = require('./comments');
const post = require('./jobposting');
const jobposting = require('./jobposting');

user.hasMany(jobposting, {
    foreignKey: 'user_id'
});

user.hasMany(comments, {
    foreignKey: 'user_id',
    onDelete: "cascade"
});

jobposting.belongsTo(user, {
    foreignKey: 'user_id',
    onDelete: "cascade"
});

jobposting.hasMany(comments, {
    foreignKey: 'job_id',
    onDelete: "cascade"
});

comments.belongsTo(jobposting, {
    foreignKey: 'job_id',
    onDelete: "cascade"
});

comments.belongsTo(user, {
    foreignKey: 'user_id',
    onDelete: "cascade"
});

module.exports = { user, post, comments };