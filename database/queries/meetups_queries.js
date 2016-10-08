var knex = require('./knex');
var moment = require('moment');

function Meetups() {
    return knex('meetups');
}

function Meetups_Tags()  {
    return knex('meetups_tags')
}

function Comments()  {
    return knex('comments')
}

function Tags() {
    return knex('tags')
}

function getMeetup(id) {
    return Meetups().where('meetups.id', id)
        .join('users', 'meetups.users_id', '=', 'users.id')
        .select(
            'meetups.id',
            'meetups.title',
            'meetups.likes',
            'meetups.description',
            'meetups.location',
            'meetups.start_date',
            'meetups.created_on',
            'meetups.users_id',
            'users.username',
            'users.avatar_url'
        ).then(function(data){
            data[0].start_date = moment(data[0].start_date).format("YYYY-MM-DD[T]hh:mm");
            return data;
        });
}

function getMeetups() {
    return Meetups()
        .join('users', 'meetups.users_id', '=', 'users.id')
        .select(
            'meetups.id',
            'meetups.title',
            'meetups.likes',
            'meetups.description',
            'meetups.location',
            'meetups.start_date',
            'meetups.created_on',
            'meetups.users_id',
            'users.username',
            'users.avatar_url'
        ).then(function(data){
            // format start date for every meetup
            data.map(function(meetup){
                meetup.start_date = moment(meetup.start_date).format("MMMM Do YYYY, hh:mm a");
                return meetup;
            });
            return data;
        });
}

function addMeetup(meetup) {
    if (!meetup || !meetup.title || !meetup.description || !meetup.location || !meetup.start_date) {
        return;
    }
    return Meetups().insert(meetup)
        .returning('id')
}

function updateMeetup(id, description, title, location, time) {
    return Meetups().where('id', id)
        .update({
            description: description,
            title: title,
            location: location,
            time: time,
        })
}

function deleteMeetup(id) {
    return Meetups().where('id', id)
        .del();
}

module.exports = {
    addMeetup: addMeetup,
    getMeetups: getMeetups,
    getMeetup: getMeetup,
    updateMeetup: updateMeetup,
    deleteMeetup: deleteMeetup
};












// function Meetups_Tags() {
//     return knex('meetups_tags')
// }
//
// function Comments() {
//     return knex('comments')
// }
//
// function Tags() {
//     return knex('tags')
// }
//
// module.exports = {
//
//     getAllMeetups: function () {
//         return Meetups().orderBy('created_on', 'desc')
//     },
//     getMeetupById: function (meetup_id) {
//         return Meetups().where('id', meetup_id);
//     },
//     addMeetup: function (users_id, title, description, link) {
//         return Meetups().insert({
//             users_id: users_id,
//             title: title,
//             description: description,
//             link: link,
//             created_on: new Date(),
//             updated_on: new Date()
//         })
//             .returning('id');
//     },
//     updateMeetup: function (meetup_id, title, description, link) {
//         return Meetups().where('id', meetup_id).update({
//             title: title,
//             description: description,
//             link: link,
//             updated_on: new Date()
//         })
//             .returning('id');
//     },
//     deleteMeetup: function (meetup_id) {
//         return Meetups().where('id', meetup_id).del();
//     },
//     addLikeToMeetup: function (meetup_id, likes) {
//         return Meetups().where('id', meetup_id).update({
//             likes: likes += 1
//         }).returning('likes', 'id')
//     },
//     getMeetupLikes: function (meetup_id) {
//         return Meetups().where('id', meetup_id)
//     },
//     getMeetupComments: function (meetup_id) {
//         return Meetups().where('id')
//     },
//     getMeetupTags: function (meetup_id) {
//         return Meetups().select('meetup.id as meetup_id', 'meetup.title as meetup_title', "meetup.link as link", 'meetup.likes as likes', 'description')
//             .then(function (meetupData) {
//                 return Tags().join('meetups_tags', 'tags.id', 'meetups_tags.tag_id')
//                     .then(function (tagData) {
//                         // console.log(tagData)
//                         for (var i = 0; i < meetupData.length; i++) {
//                             meetupData[i].tags = []
//                             for (var j = 0; j < tagData.length; j++) {
//                                 if (tagData[j].meetup_id === meetupData[i].meetup_id) {
//                                     meetupData[i]["tags"].push(tagData[j].name)
//                                 }
//                             }
//                         }
//                         console.log(meetupData)
//                         return meetupData
//                     })
//             })
//     },
//     // .leftJoin('meetups_tags', 'meetup.id', 'meetups_tags.meetup_id')
//     // .join('tags', 'meetups_tags.tag_id', 'tags.id')
//     // .orderBy('title')
//     getAllMeetups: function () {
//         return Meetups().orderBy('created_on', 'desc')
//     },
//     getMeetupById: function (meetup_id) {
//         return Meetups().where('id', meetup_id);
//     },
//     addMeetup: function (users_id, title, description, link) {
//         return Meetups().insert({
//             users_id: users_id,
//             title: title,
//             description: description,
//             link: link,
//             created_on: new Date(),
//             updated_on: new Date()
//         })
//             .returning('id');
//     },
//     updateMeetup: function (meetup_id, title, description, link) {
//         return Meetups().where('id', meetup_id).update({
//             title: title,
//             description: description,
//             link: link,
//             updated_on: new Date()
//         })
//             .returning('id');
//     },
//     deleteMeetup: function (meetup_id) {
//         return Meetups().where('id', meetup_id).del();
//     },
//     addLikeToMeetup: function (meetup_id, likes) {
//         return Meetups().where('id', meetup_id).update({
//             likes: likes += 1
//         }).returning('likes', 'id')
//     },
//     getMeetupLikes: function (meetup_id) {
//         return Meetups().where('id', meetup_id)
//     },
//     getMeetupComments: function (meetup_id) {
//         return Meetups().where('id')
//     },
//     getMeetupTags: function (meetup_id) {
//         return Meetups().join('users', 'meetup.users_id', 'users.id').select('avatar_url', 'meetup.id as meetup_id', 'meetup.title as meetup_title', "meetup.link as link", 'meetup.likes as likes', 'description', 'users_id')
//             .then(function (meetupData) {
//                 return Tags().join('meetups_tags', 'tags.id', 'meetups_tags.tag_id')
//                     .then(function (tagData) {
//                         // console.log(tagData)
//                         for (var i = 0; i < meetupData.length; i++) {
//                             meetupData[i].tags = []
//                             for (var j = 0; j < tagData.length; j++) {
//                                 if (tagData[j].meetup_id === meetupData[i].meetup_id) {
//                                     meetupData[i]["tags"].push(tagData[j].name)
//                                 }
//                             }
//                         }
//                         return meetupData
//                     })
//             })
//     },
//     addTagToMeetup: function (meetup_id, tag_id) {
//         return Meetups_Tags().insert({
//             meetup_id: meetup_id,
//             tag_id: tag_id
//         })
//     },
//     addTag: function (meetup_id, tag_id) {
//         return Tags().insert({
//             name: name,
//             created_at: new Date()
//         })
//     }
// }
