// app.js
import { Application } from 'overture/core';
import AppView from './views/ApplicationView';

// Start the application
const App = new Application({
    init: function () {
        this._super();
        this.set('mainView', new AppView());
    },
});

window.App = App;
