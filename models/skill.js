const skills = [
    {id: 9954, language: "HTML", mastered: false, opinion: "I enjoy it but it's easy to get lost."},
    {id: 2436, language: "CSS", mastered: false, opinion: "I'm not a fan."},
    {id: 7415, language: "JavaScript", mastered: false, opinion: "This is my favorite language, so far!"},
    {id: 8214, language: "Python", mastered: false, opinion: "No opinion yet, as I've yet to learn it."},
    {id: 1678, language: "Ruby", mastered: false, opinion: "No opinion yet, as I've yet to learn it."}
];

module.exports = {
    getAll,
    getOne,
    create,
    update
};

function getAll() {
    return skills;
}

function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
}

function create(skill) {
    skill.id = Date.now() % 10000;
    skill.mastered = false;
    skills.push(skill)
}

function update(id, update) {
    id = parseInt(id);
    const skill = skills.find(skill => skill.id === id);
    Object.assign(skill, update)
}
