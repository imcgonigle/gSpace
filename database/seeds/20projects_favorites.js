exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('projects_favorites').del()
        .then(function () {
            return Promise.all([
                // Inserts seed entries
                knex('projects_favorites').insert({user_id: 1, project_id: 1}),
                knex('projects_favorites').insert({user_id: 2, project_id: 2}),
                knex('projects_favorites').insert({user_id: 3, project_id: 3}),
                knex('projects_favorites').insert({user_id: 2, project_id: 1}),
                knex('projects_favorites').insert({user_id: 2, project_id: 2}),
                knex('projects_favorites').insert({user_id: 2, project_id: 2}),
                knex('projects_favorites').insert({user_id: 3, project_id: 3}),
                knex('projects_favorites').insert({user_id: 1, project_id: 1}),
                knex('projects_favorites').insert({user_id: 3, project_id: 1})
            ]);
        });
};

