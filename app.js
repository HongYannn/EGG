var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const sqlite3 = require('sqlite3').verbose();

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// 打開 SQLite 資料庫
const dbPath = path.join(__dirname, 'db', 'sqlite.db');
const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error('無法開啟資料庫:', err.message);
    } else {
        console.log('成功開啟 SQLite 資料庫');
    }
});

// 查詢所有電影台詞資料���路由
app.get('/api/quotes', (req, res) => {
    const query = 'SELECT * FROM movie_quotes';
    db.all(query, [], (err, rows) => {
        if (err) {
            console.error('查詢失敗:', err.message);
            res.status(500).json({ error: '查詢失敗' });
        } else {
            res.json(rows);
        }
    });
});

// 新增電影台詞資料的路由
app.post('/api/insert', (req, res) => {
    const { provider, movie_name, quote } = req.body;
    if (!provider || !movie_name || !quote) {
        return res.status(400).send('缺少必要的欄位');
    }

    const insertQuery = 'INSERT INTO movie_quotes (provider, movie_name, quote) VALUES (?, ?, ?)';
    db.run(insertQuery, [provider, movie_name, quote], function (err) {
        if (err) {
            console.error('新增資料失敗:', err.message);
            res.status(500).send('新增資料失敗');
        } else {
            res.send('資料已成功新增');
        }
    });
});

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
