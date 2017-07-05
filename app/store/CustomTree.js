Ext.define('GridTest.store.CustomTree', {
    extend: 'Ext.data.Store',

    alias: 'store.customTree',

    model: 'GridTest.model.CustomTree',

    require: [
        'GridTest.model.CustomTree'
    ],

    items: {
        "text": ".",
        "children": [
            {
                "task": "Task 1",
                "field1": 1,
                "field2": 2,
                "field3": 3,
                "field4": 4,
                "field5": 5,
                "field6": 6,
                "field7": 7,
                "field8": 8,
                "field9": 9,
                "iconCls": "tree-grid-task-folder",
                "expanded": true,
                "children": [
                    {
                        "task": "Task 1-1",
                        "field1": 1,
                        "field2": 2,
                        "field3": 3,
                        "field4": 4,
                        "field5": 5,
                        "field6": 6,
                        "field7": 7,
                        "field8": 8,
                        "field9": 9,
                        "leaf": true,
                            "iconCls": "tree-grid-task"
                    }
                ]
            },{
                "task": "Task 2",
                "field1": 1,
                "field2": 2,
                "field3": 3,
                "field4": 4,
                "field5": 5,
                "field6": 6,
                "field7": 7,
                "field8": 8,
                "field9": 9,
                "iconCls": "tree-grid-task-folder",
                "expanded": true,
                "children": [
                    {
                        "task": "Task 2-1",
                        "field1": 1,
                        "field2": 2,
                        "field3": 3,
                        "field4": 4,
                        "field5": 5,
                        "field6": 6,
                        "field7": 7,
                        "field8": 8,
                        "field9": 9,
                        "leaf": true,
                        "iconCls": "tree-grid-task"
                    }
                ]
            },{
                "task": "Task 3",
                "field1": 1,
                "field2": 2,
                "field3": 3,
                "field4": 4,
                "field5": 5,
                "field6": 6,
                "field7": 7,
                "field8": 8,
                "field9": 9,
                "iconCls": "tree-grid-task-folder",
                "expanded": true,
                "children": [
                    {
                        "task": "Task 3-1",
                        "field1": 1,
                        "field2": 2,
                        "field3": 3,
                        "field4": 4,
                        "field5": 5,
                        "field6": 6,
                        "field7": 7,
                        "field8": 8,
                        "field9": 9,
                        "leaf": true,
                        "iconCls": "tree-grid-task"                        
                    }
                ]
            },{
                "task": "Task 4",
                "field1": 1,
                "field2": 2,
                "field3": 3,
                "field4": 4,
                "field5": 5,
                "field6": 6,
                "field7": 7,
                "field8": 8,
                "field9": 9,
                "iconCls": "tree-grid-task-folder",
                "expanded": true,
                "children": [
                    {
                        "task": "Task 4-1",
                        "field1": 1,
                        "field2": 2,
                        "field3": 3,
                        "field4": 4,
                        "field5": 5,
                        "field6": 6,
                        "field7": 7,
                        "field8": 8,
                        "field9": 9,
                        "leaf": true,
                        "iconCls": "tree-grid-task"
                    }
                ]
            }
        ]
    },

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
})