var keystone = require('keystone'),
    Types = keystone.Field.Types;
var H5app = new keystone.List('H5app', {
    map: {
        name: 'title'
    },
    label: 'h5小游戏'
});
H5app.add({
    title: {
        label: '名字',
        type: String,
        initial: true,
        type: String,
        required: true,
        default: '文章标题'
    },
    qrcode: {
        label: '微信二维码',
        type: Types.CloudinaryImage,
        folder: 'images/'

    },
    link: {
        label: '预览链接',
        type: String
    },
    previewImages: {
        label: '预览图片',
        type: Types.CloudinaryImages,
        folder: 'images/'
    },
    summary: {
        label: '描述',
        type: Types.Textarea,
        height: 80
    }
});
H5app.register();