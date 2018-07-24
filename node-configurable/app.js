var fs = require('fs');
var params = {
    "id": 5,
    "name": "白眉鹰王"
}

//写入json文件选项
function writeJson(params) {
    //现将json文件读出来
    fs.readFile('./mock/person.json', function(err, data) {
        if (err) {
            return console.error(err);
        }
        var person = data.toString(); //将二进制的数据转换为字符串
        person = JSON.parse(person); //将字符串转换为json对象
        for (var i = 1, length1 = 5; i < length1; i++) {
            params = {
                id: i,
                name: '数据' + i
            }
            person.data.push(params); //将传来的对象push进数组对象中
        }
        person.total = person.data.length; //定义一下总条数，为以后的分页打基础
        console.log(person.data);
        var str = JSON.stringify(person); //因为nodejs的写入文件只认识字符串或者二进制数，所以把json对象转换成字符串重新写入json文件中
        fs.writeFile('./mock/person.json', str, function(err) {
            if (err) {
                console.error(err);
            }
            console.log('----------新增成功-------------');
        })
    })
}

//删除json文件中的选项
function deleteJson(id) {
    fs.readFile('./mock/person.json', function(err, data) {
        if (err) {
            return console.error(err);
        }
        var person = data.toString();
        person = JSON.parse(person);
        //把数据读出来删除
        for (var i = 0; i < person.data.length; i++) {
            if (id == person.data[i].id) {
                //console.log(person.data[i])
                person.data.splice(i, 1);
            }
        }
        console.log(person.data);
        person.total = person.data.length;
        var str = JSON.stringify(person);
        //然后再把数据写进去
        fs.writeFile('./mock/person.json', str, function(err) {
            if (err) {
                console.error(err);
            }
            console.log("----------删除成功------------");
        })
    })
}

function changeJson(id, params) {
    fs.readFile('./mock/person.json', function(err, data) {
        if (err) {
            console.error(err);
        }
        var person = data.toString();
        person = JSON.parse(person);
        //把数据读出来,然后进行修改
        for (var i = 0; i < person.data.length; i++) {
            if (id == person.data[i].id) {
                console.log('id一样的');
                for (var key in params) {
                    if (person.data[i][key]) {
                        person.data[i][key] = params[key];
                    }
                }
            }
        }
        person.total = person.data.length;
        var str = JSON.stringify(person);
        //console.log(str);
        fs.writeFile('./mock/person.json', str, function(err) {
            if (err) {
                console.error(err);
            }
            console.log('--------------------修改成功');
            console.log(person.data);
        })
    })
}

//通过传回来的页数，进行分页模拟
function pagination(p, s) {
    //p为页数，比如第一页传0，第二页传1,s为每页多少条数据
    fs.readFile('./mock/person.json', function(err, data) {
        if (err) {
            console.error(err);
        }
        var person = data.toString();
        person = JSON.parse(person);
        //把数据读出来
        //console.log(person.data);
        var length = person.data.length;
        var pagePerson = person.data.slice(s * p, (p + 1) * s);
        console.log('------------------------查询成功pagePerson');
        console.log(pagePerson);
    })
}

/**
 * file         文件
 * jsonKeyArr   json key数组
 * jsonStrArr   json value数组
 */
function inputJson(file, jsonKeyArr, jsonStrArr) {
    fs.readFile(file, function(err, data) {
        if (err) {
            console.error('读取失败');
            console.error(err);
            return;
        }
        console.log('--------------------读取成功');
        var json = data.toString();
        json = JSON.parse(json);
        for (var i = 0; i < jsonKeyArr.length; i++) {
            var keys = jsonKeyArr[i].split('>');
            var l = keys.length;
            if (l == 1) {// 跟对象处理
                json[jsonKeyArr[i]] = jsonStrArr[i];
            } else {// 对象嵌套的处理
                var key = json;
                for (var j = 0; j < l; j++) {
                    var value = keys[j]
                    if (j == l - 1) {
                        key[value] = jsonStrArr[i];
                    }
                    key = key[value];
                }
            }
        }
        var str = JSON.stringify(json);
        fs.writeFile(file, str, function(err) {
            if (err) {
                console.error('写入失败');
                console.error(err);
                return;
            }
            console.log('--------------------修改成功');
        })
    })
}

// pagination(0,6);//查询第一页，每页的数据条数为6条
// changeJson(3,params)//执行一下;
// deleteJson(5);//执行一下
// writeJson(params) //执行一下;

inputJson('./config.json', ['title', 'subtitle', 'loadingPage>backgroundImage>visible1', 'loadingPage>backgroundColor'], ['超脑平台', '可视化', true, 'red'])