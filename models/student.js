/**
 * User Model 
 */

var keystone = require('keystone'),
    Types = keystone.Field.Types;

var Student = new keystone.List('Student', {
    label: '学生',
    map: {
        name: 'username'
    }
});
/**
 * theres has few fileds attribute  in Model filed
 * see 
 */
Student.add({
    email: {
        label: '姓名',
        type: String,
        required: true,
        initial: true,
        index: true
    },
    password: {
        label: '密码',
        type: String,
        required: true,
        initial: true,
        index: true
    },
    phone: {
        label: '手机号',
        type: String
    },
    qq: {
        label: 'QQ',
        type: String
    },
    grader: {
        label: '年级',
        type: String
    },
    subject: {
        label: '专业',
        type: String
    }
});

Student.register();