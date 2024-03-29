// main.js
import '/overture/Global';
import { classes } from '/overture/core';
import { el } from '/overture/dom';
import { flushAllQueues } from '/overture/foundation';
import {
    ButtonView,
    ClearSearchButtonView,
    KeyDownController,
    RootView,
    ShortcutOverlayView,
    when,
    getViewFromNode,
} from '/overture/views';

import './fixtures';
import './locale';
import { Application } from 'overture/core';
import AppView from './views/ApplicationView';

// Start the application
const rootView = new RootView(document, {
    // selectNone: function (event) {
    //     if (!(event.targetView instanceof ButtonView)) {
    //         state.set('editTodo', null);
    //         selectedTodo.set('record', null);
    //     }
    // }.on('click'),
});


ClearSearchButtonView.prototype.icon = el('i', {
    className: 'icon icon-clear',
});

const appView = new AppView();
rootView.insertView(appView);


window.FM = {
    classes,
    getViewFromNode,
};

