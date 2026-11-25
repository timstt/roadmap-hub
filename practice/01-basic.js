const tittle = "Теман тема";
let votes = 0;
votes = votes + 1;

const idea = { 
    id: 1,
    title: "Темна тема",
    status: "New",
    votes: 3,
};
console.log(idea.title);
idea.votes = idea.votes + 1;

const ideas = [
    {    id: 1, title: "Темна тема", status: "New", votes: 3},
    {    id: 2, title: "Експорт у CSV", status: "Planned", votes: 7},
    {    id: 3, title: "Вбудований календар", status: "Planned", votes: 4 },
    {    id: 4, title: "Додавання в обране", status: "Planned", votes: 6 }, 
    {    id: 5, title: "Англійськомовна версія", status: "Planned", votes: 10 },
];

console.log(ideas[2].title);
console.log(ideas.length);
ideas[2].votes = ideas[2].votes + 1;
console.log(ideas[2].votes);
