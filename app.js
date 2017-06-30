/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'GridTest.Application',

    name: 'GridTest',

    requires: [
        // This will automatically load all classes in the GridTest namespace
        // so that application classes do not need to require each other.
        'GridTest.*'
    ],

    // The name of the initial view to create.
    mainView: 'GridTest.view.main.Main'
});
