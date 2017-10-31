var Mock = require('mockjs')
var fs = require('fs')
var data = Mock.mock({
    "books|20-50": [{
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
        "book_detail": "@cparagraph(30,50)",
        //图片
        "imgs": {
            "small": "@image(200x300,@color,@ctitle(3)",
            "big": "@image(500x300,@color,@ctitle(3)"
        },
        //分类id
        "classify_id": "@natural(1,13)",
        //点赞数
        "favorite": "@natural(1000, 100000)",
        //评论数
        "discuss": "@natural(1000, 100000)",
        //关注数
        "attention": "@natural(1, 1000)万",
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
            "favorite": "@natural(1000, 100000)"
        }]
    }],
    //分类
    "classifys|13": [{
        //分类id
        "classify_id|+1": 1,
        //分类名称
        "classify_title": "@ctitle(3,4)"
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