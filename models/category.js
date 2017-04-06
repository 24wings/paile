var keystone = require('keystone'),
    Types = keystone.Field.Types;

var Category = new keystone.List('Category', {
    label: '蛋糕类别',
    map: { name: 'title' }
});

Category.add({
    title: { label: '分类的名字', type: String, required: true, initial: true, index: true },
    createDt: { label: '创建日期', type: Date, default: Date.now },
    updateDt: { label: '更新日期', type: Date, default: Date.now }
});

Category.register();