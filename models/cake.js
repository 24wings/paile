var keystone = require('keystone'),
    Types = keystone.Field.Types;

var Cake = new keystone.List('Cake', {
    label: '蛋糕',
    map: { name: 'title' }
});

Cake.add({
    category: { label: '蛋糕分类', type: Types.Relationship, required: true, initial: true, ref: 'Category' },
    title: { label: '蛋糕名字', type: String, required: true, initial: true },
    price: { label: '价格', type: Types.Number, required: true, initial: true },
    summary: { label: '简述', type: String },
    matrial: { label: '材料', type: String },
    banner: { label: '预览图', type: Types.CloudinaryImages },
    createDt: { label: '创建日期', type: Date, default: Date.now },
    updateDt: { label: '更新日期', type: Date, default: Date.now, index: true }
});

Cake.register();