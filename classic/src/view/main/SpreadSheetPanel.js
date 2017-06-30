Ext.define('GridTest.view.main.SpreadSheet', {
    extend: 'Ext.grid.Panel',
    xtype: 'spreadSheet',

    requires: [
        'GridTest.store.SpreadSheet'
    ],

    title: 'SpreadSheet',

    store: {
        type: 'spreadSheet'
    },

    columns: [
        { text: 'A', dataIndex: 'A', flex: 1},
        { text: 'B', dataIndex: 'B', flex: 1},
        { text: 'C', dataIndex: 'C', flex: 1},
        { text: 'D', dataIndex: 'D', flex: 1},
        { text: 'E', dataIndex: 'E', flex: 1},
        { text: 'F', dataIndex: 'F', flex: 1},
        { text: 'G', dataIndex: 'G', flex: 1},
        { text: 'H', dataIndex: 'H', flex: 1},
        { text: 'I', dataIndex: 'I', flex: 1},
        { text: 'J', dataIndex: 'J', flex: 1}
    ]
})