exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('users').del()
        .then(function() {
            return Promise.all([
                // Inserts seed entries
                knex('users').insert({
                    id: 1,
                    username: 'avaBean',
                    avatar_url: 'http://rs795.pbsrc.com/albums/yy236/terminatoraf/Funny/mrbeabn.jpg~c200',
                    biography: 'I mean I can do it when Im very relaxed, and with good friends, then I think I can be amusing.',
                    name: 'Mr Bean',
                    cohort: '100',
                    location: 'city1',
                    linkedin_url: 'linkedin_url1',
                    github_url: 'github_url1',
                    website: 'website1',
                    email: 'email1',
                    first_login: '2006-04-10T13:40:23.83-05:00',
                    last_login: '2006-04-10T13:40:23.83-05:00'
                }),
                knex('users').insert({
                    id: 2,
                    username: 'poshVader',
                    avatar_url: 'http://static.boredpanda.com/blog/wp-content/uploads/2015/11/the-daily-life-of-darth-vader-is-my-latest-365-day-photo-project-33__880.jpg',
                    biography: 'biography2',
                    name: 'first_name2',
                    cohort: '2',
                    location: 'city2',
                    linkedin_url: 'linkedin_url2',
                    github_url: 'github_url2',
                    website: 'website2',
                    email: 'email2',
                    first_login: '2006-04-10T13:41:23.83-05:00',
                    last_login: '2006-04-10T13:41:23.83-05:00'
                }),
                knex('users').insert({
                    id: 3,
                    username: 'emoRen',
                    avatar_url: 'http://vignette2.wikia.nocookie.net/starwars/images/c/ca/KyloRenHS-TFA.png/revision/latest?cb=20160417032040',
                    biography: 'biography3',
                    name: 'first_name3',
                    cohort: '3',
                    location: 'city3',
                    linkedin_url: 'linkedin_url3',
                    github_url: 'github_url3',
                    website: 'website3',
                    email: 'email3',
                    first_login: '2006-04-10T13:42:23.83-05:00',
                    last_login: '2006-04-10T13:42:23.83-05:00'
                }),
                knex('users').insert({
                    id: 4,
                    username: 'duckFace4Eva',
                    avatar_url: 'http://blog.orangecarton.com/wp-content/uploads/2013/05/mona_lisa_iphone.jpg',
                    biography: 'biography4',
                    name: 'first_name4',
                    cohort: '31',
                    location: 'city4',
                    linkedin_url: 'linkedin_url4',
                    github_url: 'github_url4',
                    website: 'website4',
                    email: 'email4',
                    first_login: '2006-04-10T13:42:23.83-05:00',
                    last_login: '2006-04-10T13:42:23.83-05:00'
                }),
                knex('users').insert({
                    id: 5,
                    username: 'nope',
                    avatar_url: 'http://animalsadda.com/wp-content/uploads/2015/03/Grumpy-Cat-6.jpg',
                    biography: 'biography500',
                    name: 'first_name500',
                    cohort: '310',
                    location: 'city500',
                    linkedin_url: 'linkedin_url500',
                    github_url: 'github_url500',
                    website: 'website500',
                    email: 'email500',
                    first_login: '2006-04-10T13:42:23.83-05:00',
                    last_login: '2006-04-10T13:42:23.83-05:00'
                }),
                knex('users').insert({
                    id: 6,
                    username: 'gHuman',
                    avatar_url: 'https://media.glassdoor.com/sqll/825775/galvanize-squarelogo-1429039425588.png',
                    biography: 'Work, Learn, do stuff.',
                    name: 'gSquad',
                    cohort: '31',
                    location: 'Denver',
                    linkedin_url: 'linkedin_url1',
                    github_url: 'github_url1',
                    website: 'website1',
                    email: 'email1',
                    first_login: '2006-04-10T13:40:23.83-05:00',
                    last_login: '2006-04-10T13:40:23.83-05:00'
                })
            ])
        });
};
