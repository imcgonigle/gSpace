var knex = require('./knex');

function Meetups() {
    return knex('meetups');
}

function getMeetup(id) {
    return Meetups().where('meetups.id', id)
        .join('users', 'meetups.user_id', '=', 'users.id')
        .select(
            'meetups.title',
            'meetups.description',
            'meetups.location',
            'meetups.time',
            'meetups.created_on',
            'meetups.owner_id'
        )
}

function getMeetups() {
    return Meetups()
        .join('users', 'meetups.users_id', 'users.id')
        // .select(
        //     'meetups.title',
        //     'meetups.description',
        //     'meetups.location',
        //     'username',
        //     'meetups.time')
        // .orderBy('id', 'desc');
}

function addMeetup(user_id, title, decription, location, time) {
    if (!title || !description || !location || !time) {
        return false
    }
    return Meetups().insert({
            user_id: user_id,
            title: title,
            description: description,
            location: location,
            time: time,
            created_on: new Date()
        })
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
    add: addMeetup,
    getMeetups: getMeetups,
    getMeetup: getMeetup,
    updateMeetup: updateMeetup,
    deleteMeetup: deleteMeetup
};
