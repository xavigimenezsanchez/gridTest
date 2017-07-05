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

    collapsible: true,
    headerBorders: true,
    /*multiSelect: true,*/

    viewConfig: {
            enableTextSelection: true
        },

    selModel: {
        type: 'cellmodel'
    },

    plugins: [{
        ptype: 'cellediting',
        clicksToEdit: 2
    }],

    rowSpanEditor: new Ext.Editor({
        updateEl: true,
        alignment: '1-1',
        autoSixe: {
            width: 'boundEl'
        },
        field: {
            xtype: 'textfield'
        }
    }),

    columns: [
        { text: 'A', dataIndex: 'A', flex: 1, editor: { allowBlank: false },
            renderer: function(value) {
                return Ext.String.format('<div class="firstCell">{0}</div><div class="secondCell">{1}</div>', value[0], value[1]);
            }},
        { text: 'B', dataIndex: 'B', flex: 1, editor: { allowBlank: false }},
        { text: 'C', dataIndex: 'C', flex: 1, editor: { allowBlank: false }},
        { text: 'D', dataIndex: 'D', flex: 1, editor: { allowBlank: false }},
        { text: 'E', dataIndex: 'E', flex: 1, editor: { allowBlank: false }},
        { text: 'F', dataIndex: 'F', flex: 1, editor: { allowBlank: false }},
        { text: 'G', dataIndex: 'G', flex: 1, editor: { allowBlank: false }},
        { text: 'H', dataIndex: 'H', flex: 1, editor: { allowBlank: false }},
        { text: 'I', dataIndex: 'I', flex: 1, editor: { allowBlank: false }},
        { text: 'J', dataIndex: 'J', flex: 1, editor: { allowBlank: false }}
    ]
})