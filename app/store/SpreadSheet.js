Ext.define('GridTest.store.SpreadSheet', {
    extend: 'Ext.data.Store',

    alias: 'store.spreadSheet',

    model: 'GridTest.model.SpreadSheet',

    require: [
        'GridTest.model.SpreadSheet'
    ],

    data: {
        items:[
            {A:0,B:1,C:2,D:3,E:4,F:5,G:6,H:7,I:8,J:9},
            {A:0,B:1,C:2,D:3,E:4,F:5,G:6,H:7,I:8,J:9},
            {A:0,B:1,C:2,D:3,E:4,F:5,G:6,H:7,I:8,J:9},
            {A:0,B:1,C:2,D:3,E:4,F:5,G:6,H:7,I:8,J:9},
            {A:0,B:1,C:2,D:3,E:4,F:5,G:6,H:7,I:8,J:9},
            {A:0,B:1,C:2,D:3,E:4,F:5,G:6,H:7,I:8,J:9},
            {A:0,B:1,C:2,D:3,E:4,F:5,G:6,H:7,I:8,J:9},
            {A:0,B:1,C:2,D:3,E:4,F:5,G:6,H:7,I:8,J:9},
            {A:0,B:1,C:2,D:3,E:4,F:5,G:6,H:7,I:8,J:9},
            {A:0,B:1,C:2,D:3,E:4,F:5,G:6,H:7,I:8,J:9},
            {A:0,B:1,C:2,D:3,E:4,F:5,G:6,H:7,I:8,J:9},
            {A:0,B:1,C:2,D:3,E:4,F:5,G:6,H:7,I:8,J:9},
            {A:0,B:1,C:2,D:3,E:4,F:5,G:6,H:7,I:8,J:9},
            {A:0,B:1,C:2,D:3,E:4,F:5,G:6,H:7,I:8,J:9},
            {A:0,B:1,C:2,D:3,E:4,F:5,G:6,H:7,I:8,J:9}
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