Ext.define('GridTest.view.main.CustomTree', {
    extend: 'Ext.tree.Panel',
    xtype: 'customTree',

    requires: [
        'GridTest.store.CustomTree'
    ],

    title: 'Custom tree grid',

    reserveScrollbar: true,
    useArrows: true,
    rootVisible: false,
    multiSelect: true,
    singleExpand: true,

    store: { type: 'customTree' }/* {
        type: 'customTree',
        model: 'GridTest.model.CustomTree',
        folderSort: true
    }*/,

    columns: [{
        xtype: 'treecolumn',
        text: 'Task',
        dataIndex: 'task',

        flex: 2,
    }, {
        text: 'field1',
        dataIndex: 'field1',
        flex: 1
    }, {
        text: 'field2',
        dataIndex: 'field2',
        flex: 1
    }, {
        text: 'field3',
        dataIndex: 'field3',
        flex: 1
    }, {
        text: 'field4',
        dataIndex: 'field4',
        flex: 1
    }, {
        text: 'field5',
        dataIndex: 'field5',
        flex: 1
    }, {
        text: 'field6',
        dataIndex: 'field6',
        flex: 1
    }, {
        text: 'field7',
        dataIndex: 'field7',
        flex: 1
    }, {
        text: 'field8',
        dataIndex: 'field8',
        flex: 1
    }, {
        text: 'field9',
        dataIndex: 'field9',
        flex: 1
    }]

});