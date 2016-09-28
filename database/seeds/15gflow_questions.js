exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('gflow_questions').del()
        .then(function() {
            return Promise.all([
                // Inserts seed entries
                knex('gflow_questions').insert({
                    questionid: 1,
                    username: 'mxd',
                    title: 'blah',
                    question: 'whut is code?',
                    likes: 14,
                    user_id: 1
                }),
                knex('gflow_questions').insert({
                    questionid: 2,
                    username: 'mxd',
                    title: 'blah',
                    question: 'whut is javascript?',
                    likes: 2,
                    user_id: 2
                }),
                knex('gflow_questions').insert({
                    questionid: 3,
                    username: 'mxd',
                    title: 'blah',
                    question: 'how do you javascript?',
                    likes: 3,
                    user_id: 3
                }),
                knex('gflow_questions').insert({
                    questionid: 4,
                    username: 'mxd',
                    title: 'blah',
                    question: 'how old is google?',
                    user_id: 4
                }),
                knex('gflow_questions').insert({
                    questionid: 5,
                    username: 'mxd',
                    title: 'blah',
                    question: 'how do you jQuery',
                    likes: 0,
                    user_id: 1
                }),
                knex('gflow_questions').insert({
                    questionid: 6,
                    username: 'mxd',
                    title: 'blah',
                    question: 'what is the internet?',
                    likes: 1400,
                    user_id: 8
                })
            ]);
        });
};
