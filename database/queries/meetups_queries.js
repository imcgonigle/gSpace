var knex = require('./knex');

function Meetups() {
    return knex('meetups');
}

function addMeetup(id, user_id, title, decription, location, time, created_on) {
    if (!title || !description) {
        return false
    }
    return Meetups().insert({
        id: id,
        user_id: user_id,
        title: title,
        description: description,
        location: location,
        time: time,
        created_on: created_on
    });
}

module.exports = {
    add: addMeetup,
    getMeetups: getMeetups,
    getMeetup: getMeetup,
    updateMeetup: updateMeetup,
    deleteMeetup: deleteMeetup
};
