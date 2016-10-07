exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('meetups').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('meetups').insert({
          id: 1,
          users_id: '6',
          title: 'BBQ',
          likes: 6,
          description: 'Bring Smores if you know whats good for you.',
          location: 'Caties place',
          start_date: '2006-04-10T13:40:23.83-05:00'
        }),
        knex('meetups').insert({
          id: 2,
          users_id: '2',
          title: 'Success isnt about being the best. Its about always getting better',
          likes: 6,
          description: 'Everyone of us is shadowed by an illusory person: a false self. We are not very good at recognizing illusions, least of all the ones we cherish about ourselves.',
          location: 'location2',
          start_date: '2006-04-10T13:40:23.83-05:00'
        }),
        knex('meetups').insert({
          id: 3,
          users_id: '1',
          title: 'Unobtanium Now Obtainable',
          likes: 5,
          description: 'Since the late 1950s aerospace engineers have used the termunobtainiu when referring to unusual or costly materials, or when theoretically considering a material perfect for their needs in all respects, except that it does not exist. By the 1990s, the term was in wide use, even in formal engineering papers such as "Towards unobtainium new composite materials for space applications',
          location: 'location1',
          start_date: '2006-04-10T13:40:23.83-05:00'
        }),
        knex('meetups').insert({
          id: 4,
          users_id: '3',
          title: 'Ten step to overcoming fear',
          likes: 7,
          description: 'But nobody ever mentions the twelfth ingredient: Fear, Some people think Chuck Norris is a myth. However, some people are really myths Chuck Norris is my Homeboy.  ',
          location: 'location3',
          start_date: '2006-04-10T13:40:23.83-05:00'
        }),
        knex('meetups').insert({
          id: 5,
          users_id: '4',
          title: 'Duck Face is so hawt right now',
          likes: 0,
          description: 'We will talk about how to make better duck faces',
          location: 'location4',
          start_date: '2006-04-10T13:40:23.83-05:00'
        }),
        knex('meetups').insert({
          id: 6,
          users_id: '5',
          title: 'Nope, nope, nope',
          likes: 5,
          description: 'At this meetup, we will count all the nopes',
          location: 'location5',
          start_date: '2006-04-10T13:40:23.83-05:00'
        })
      ])
          .then(function(){
            return knex.raw('ALTER SEQUENCE meetups_id_seq RESTART WITH 10;')
          })
    });
};
