import { Class } from '/overture/core';
import { el } from '/overture/dom';
import { bind, bindTwoWay, invert } from '/overture/foundation';
import MenuBarView from './MenuBarView';
import ContentView from './ContentView';
import ActionButtonView from './ActionButtonView';
import {
    ButtonView,
    TextView,
    ListView,
    SearchInputView,
    ToolbarView,
    View,
} from '/overture/views';
import { actions, state, undoManager } from '../app';


const AppView = Class({
    Name: 'AppView',
    Extends: View,
    className: 'v-App',
    draw() {
        return [
            new TextView({
                positioning: 'absolute',
                className: 'v-App-title',
                value: 'welcome',
            }),
            new ToolbarView({
                left: [
                    new ButtonView({
                        value: 'Upload',
                        target: this.get('target'),
                        method: 'upload',
                    }),
                    new ButtonView({
                        value: 'Balance Sheet',
                        target: this.get('target'),
                        method: 'showBalanceSheet',
                    }),
                    new ButtonView({
                        value: 'Sign In',
                        target: this.get('target'),
                        method:'signIn',
                    }),
                    new ButtonView({
                        value: 'Sign Out',
                        target: this.get('target'),
                        method:'signOut',
                    }),
                ],
                right: [
                    new SearchInputView({
                        icon: el('i', {
                            className: 'icon icon-search',
                        }),
                        layout: { width: 200 },
                        placeholder: 'Search',
                        shortcut: '/',
                        value: bindTwoWay(state, 'search'),
                    }),
                ],
            }),
            new View({
                className: 'v-App-content',
                childViews: [
                    new MenuBarView({
                        target: this.get('target'),
                    }),
                    new ContentView({
                        target: this.get('target'),
                    }),
                    new ActionButtonView({
                        target: this.get('target'),
                    }),
                ],
            })
        ]
    },

    // Methods that will be called by buttons in MenuBarView and ActionButtonView
    upload: function () {
        // Code to handle upload
    },
    showBalanceSheet: function () {
        // Code to show the balance sheet
    },
    emailStatement: function () {
        // Code to email the statement
    },
    saveStatement: function () {
        // Code to save the statement
    },
});

export { AppView };