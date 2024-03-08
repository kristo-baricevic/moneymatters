import MenuBarView from './MenuBarView';
import ContentView from './ContentView';
import ActionButtonView from './ActionButtonView';

const App = new O.Application({
    init: function () {
        this._super();

        this.set('mainView', new O.ContainerView({
            childViews: [
                new MenuBarView({
                    target: this,
                }),
                new ContentView(),
                new ActionButtonView({
                    target: this,
                }),
            ],
        }));
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
