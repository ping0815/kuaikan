var Mock = require('mockjs')
var fs = require('fs')
var data = Mock.mock({
    "books|100-150": [{
        "book_id|+1": 1,
        //漫画名称
        "book_name": "@ctitle(4,10)",
        //作者
        "book_editor": "@ctitle(1,5)",
        //类型
        "book_type": "@ctitle(2)",
        //类型颜色
        "type_color": "@color",
        //漫画描述
        "book_detail": "@cparagraph(5,10)",
        //图片
        "imgs": {
            "small": "@image(200x300,@color,@ctitle(3)",
            "big": "@image(500x300,@color,@ctitle(3)"
        },
        //分类id
        "classify_id|0-13": 100,
        //每天展示的主页
        "time_id": "@natural(0,6)",
        //点赞数
        "favorite": "@natural(1000, 100000)",
        //评论数
        "discuss": "@natural(1000, 100000)",
        //关注数
        "attention": "@natural(1, 1000)万",
        //总热度
        "hot": "@float(1,20,0,2)亿",
        //很多集
        "each|30-60": [{
            //每集的id
            "each_id|+1": 1,
            //每集的标题
            "each_title": "@ctitle(4, 10)",
            //每集的图片
            "imgs": {
                "small": "@image(300x150,@color,@ctitle(3)",
                "big": "@image(500x300,@color,@ctitle(3)"
            },
            //每集的点赞数
            "favorite": "@natural(1000, 100000)",
            //每集的日期
            "each_date": "@date()"
        }],
        //精彩点评
        "particulars_discuss|3-6": [{
            //点评人头像
            "people_header": "@image(50x50,@color,@ctitle(1)",
            //点评人昵称
            "people_name": "@ctitle(4, 6)",
            //评论日期
            "discuss_data": "@date()",
            //评论词
            "discuss_content": "@cparagraph(5,10)",
            //评论点赞数
            "discuss_favorite": "@natural(500, 20000)"
        }]
    }],
    //分类
    "classifys|13": [{
        //分类id
        "classify_id|+1": 1,
        //分类名称
        "classify_title": "@ctitle(2)"
    }]
})
//写入到db.json
fs.writeFile('db.json', JSON.stringify(data, null, 4),
function (err) {
    if (err) {
        return console.log(err);
    }
    console.log("数据写入成功！");
});
