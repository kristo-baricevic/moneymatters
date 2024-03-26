const MenuBarView = ContainerView.extend({
    className: 'menu-bar',
    layout: { direction: 'horizontal' },
    childViews: function () {
        return [
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
                method: 'signIn', 
            }),
            new ButtonView({
                value: 'Sign Out',
                target: this.get('target'),
                method: 'signOut', 
            }),
            // ... other buttons
        ];
    }.property(),
});

export default MenuBarView;
