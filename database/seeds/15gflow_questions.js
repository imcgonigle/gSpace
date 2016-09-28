exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('gflow_questions').del()
        .then(function() {
            return Promise.all([
                // Inserts seed entries
                knex('gflow_questions').insert({
                    id: 1,
                    users_id: '1',
                    question: 'whut is code?',
                    likes: 14,
                    created_on: '2006-04-10T13:40:23.83-05:00',
                    updated_on: '2006-04-10T13:42:23.83-05:00'
                }),
                knex('gflow_questions').insert({
                    id: 2,
                    users_id: '2',
                    question: 'whut is javascript?',
                    likes: 2,
                    created_on: '2006-04-10T13:42:23.83-05:00',
                    updated_on: '2006-04-10T13:43:23.83-05:00'
                }),
                knex('gflow_questions').insert({
                    id: 3,
                    users_id: '3',
                    question: 'how do you javascript?',
                    likes: 3,
                    created_on: '2006-04-10T13:43:23.83-05:00',
                    updated_on: '2006-04-10T13:44:23.83-05:00'
                }),
                knex('gflow_questions').insert({
                    id: 4,
                    users_id: '1',
                    question: 'how old is google?',
                    created_on: '2006-04-10T13:45:23.83-05:00',
                    updated_on: '2006-04-10T13:46:23.83-05:00'
                }),
                knex('gflow_questions').insert({
                    id: 5,
                    users_id: '2',
                    question: 'how do you jQuery',
                    likes: 0,
                    created_on: '2006-04-10T13:49:23.83-05:00',
                    updated_on: '2006-04-10T13:50:23.83-05:00'
                }),
                knex('gflow_questions').insert({
                    id: 6,
                    users_id: '1',
                    question: 'what is the internet?',
                    likes: 1400,
                    created_on: '2006-04-10T13:55:23.83-05:00',
                    updated_on: '2006-04-10T13:56:23.83-05:00'
                })
            ]);
        });
};
