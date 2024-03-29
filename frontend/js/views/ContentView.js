import { ScrollView } from 'overture/views';

const ContentView = ScrollView.extend({
    className: 'content-area',
    // Content setup and bindings go here
    draw() {
        return [
            new TextView({
                positioning: 'absolute',
                className: 'v-App-title',
                value: 'welcome',
            }),
            //render what has been uploaded
            new ListView({
                layout: { direction: 'horizontal' },
                childViews: function () {
                    return [
                        new TextView({
                            positioning: 'absolute',
                            className: 'v-App-title',
                            value: 'welcome',
                        }),
                        //render what has been uploaded
                        new ListView({
                            layout: { direction: 'horizontal' },
                            childViews: function () {
                                return [
                                    new TextView({
                                        positioning: 'absolute',
                                        className: 'v-App-title',
                                        value: 'welcome',
                                    }),
                                    //render what has been uploaded
                                ];
                            }.property(),
                        }),
                    ];
                }.property(),
            }),
        ];
    }
});

export default ContentView;
