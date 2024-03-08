import { ContainerView, ButtonView } from 'overture/views';

const MenuBarView = ContainerView.extend({
    className: 'menu-bar',
    layout: { direction: 'horizontal' },
    childViews: function () {
        // Here "this.get('target')" will refer to the target passed in the parent view
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
            // ... other buttons
        ];
    }.property(),
});

export default MenuBarView;
