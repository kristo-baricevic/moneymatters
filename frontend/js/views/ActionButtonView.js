import { ContainerView, ButtonView } from 'overture/views';

const ActionButtonView = ContainerView.extend({
    className: 'action-buttons',
    layout: { direction: 'horizontal' },
    childViews: function () {
        return [
            new ButtonView({
                value: 'Email',
                target: this.get('target'),
                method: 'emailStatement',
            }),
            new ButtonView({
                value: 'Save',
                target: this.get('target'),
                method: 'saveStatement',
            }),
            // ... other action buttons
        ];
    }.property(),
});

export default ActionButtonView;
