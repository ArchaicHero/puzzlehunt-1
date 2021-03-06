import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';

const authedRoutes = FlowRouter.group({
    name: 'authed'
});

authedRoutes.route('/team', {
    name: 'team',
    action() {
        mount(App, {yield: <Team />});
    }
});

authedRoutes.route('/admin', {
    name: 'admin',
    action() {
        mount(App, {yield: <Admin />});
    }
});

authedRoutes.route('/volunteer', {
    name: 'volunteer',
    action() {
        mount(App, {yield: <VolunteerPage />});
    }
});

authedRoutes.route('/profile', {
    name: 'profile',
    action() {
        mount(App, {yield: <Login />});
    }
});

// authedRoutes.route('/floaters', {
//   name: 'floaters',
//   action() {
//     mount(App, {yield: <Floaters />});
//   }
// });

// authedRoutes.route('/game', {
//     name: 'game',
//     action() {
//         mount(App, {yield: <Game />});
//     }
// });
