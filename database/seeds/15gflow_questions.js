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
                    user_id: 1,
                    comments: 0,
                    views: 0,
                    tags: 'ruby javascript css',
                    created_at:'2003-01-02T00:01:00-0700',
                    updated_at:'2003-01-02T00:01:00-0700'
                }),
                knex('gflow_questions').insert({
                    questionid: 2,
                    username: 'mxd',
                    title: 'blah',
                    question: 'whut is javascript?',
                    likes: 2,
                    user_id: 2,
                    comments: 0,
                    views: 0,
                    tags: 'ruby javascript css',
                    created_at:'2003-01-02T00:01:00-0700',
                    updated_at:'2003-01-02T00:01:00-0700'
                }),
                knex('gflow_questions').insert({
                    questionid: 3,
                    username: 'mxd',
                    title: 'blah',
                    question: 'how do you javascript?',
                    likes: 3,
                    user_id: 337474,
                    comments: 0,
                    views: 0,
                    tags: 'ruby javascript css',
                    created_at:'2003-01-02T00:01:00-0700',
                    updated_at:'2003-01-02T00:01:00-0700'
                }),
                knex('gflow_questions').insert({
                    questionid: 4,
                    username: 'mxd',
                    title: 'blah',
                    question: 'how old is google?',
                    likes:3,
                    user_id: 4,
                    comments: 0,
                    views: 0,
                    tags: 'ruby javascript css',
                    created_at:'2003-01-02T00:01:00-0700',
                    updated_at:'2003-01-02T00:01:00-0700'
                }),
                knex('gflow_questions').insert({
                    questionid: 5,
                    username: 'mxd',
                    title: 'blah',
                    question: 'how do you jQuery',
                    likes: 0,
                    user_id: 1,
                    comments: 0,
                    views: 0,
                    tags: 'ruby javascript css',
                    created_at:'2003-01-02T00:01:00-0700',
                    updated_at:'2003-01-02T00:01:00-0700'
                }),
                knex('gflow_questions').insert({
                    questionid: 6,
                    username: 'mxd',
                    title: 'blah',
                    question: 'what is the internet?',
                    likes: 1400,
                    user_id: 27474,
                    comments: 0,
                    views: 0,
                    tags: 'ruby javascript css',
                    created_at:'2003-01-02T00:01:00-0700',
                    updated_at:'2003-01-02T00:01:00-0700'
                })
            ]);
        });
};
