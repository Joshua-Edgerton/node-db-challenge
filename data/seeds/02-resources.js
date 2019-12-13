exports.seed = function(knex) {
  return knex('resources').insert([
    { name: 'resource 1', description: 'resource 1 description' }, //1 
    { name: 'resource 2', description: 'resource 2 description' }, // 2
    { name: 'resource 3', description: 'resource 3 description' }, // 3
    { name: 'resource 4', description: 'resource 4 description' }, // 4
    { name: 'resource 5', description: 'resource 5 description' }, // 5 
    { name: 'resource 6', description: 'resource 6 description' }, // 6
    { name: 'resource 7', description: 'resource 7 description' } // 7
  ]);
};
