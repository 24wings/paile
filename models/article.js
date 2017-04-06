var keystone = require('keystone'),
    Types = keystone.Field.Types;
var Article = new keystone.List('Article', {
    map: {
        name: 'title'
    },
    label: '文章'
});
Article.add({
    title: {
        label: '文章标题',
        type: String,
        initial: true,
        type: String,
        required: true,
        default: '文章标题'
    },
    image: {
        label: '预览图片',
        type: Types.CloudinaryImages,
        folder: 'images/'
    },
    link: {
        label: '文章链接',
        type: String
    }
});
Article.register();