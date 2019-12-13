exports.seed = function(knex) {
  return knex('tasks').insert([
    { description: 'task description 1', completed: false, project_id: 1 },
    { description: 'task description 2', completed: false, project_id: 2 },
    { description: 'task description 3', completed: false, project_id: 3 }
  ]);
};
