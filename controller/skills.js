const Todo = require('../models/skills');

module.exports = {
    index,
    show
};

function show(req, res) {
    res.render('skills/show', {
        todo: Skill.getOne(req.params.id),
    });
}

function index(req, res) {
    res.render('todos/index', {
        todos: Skill.getAll()
    });
}
