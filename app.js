var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());

// 打開 SQLite 資料庫
const dbPath = path.join(__dirname, 'db', 'sqlite.db');
const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error('無法開啟資料庫:', err.message);
    } else {
        console.log('成功開啟 SQLite 資料庫');
    }
});

// 查詢所有蛋價資料（依日期降冪）
app.get('/api/quotes', (req, res) => {
    const query = 'SELECT * FROM egg_prices ORDER BY date DESC';
    db.all(query, [], (err, rows) => {
        if (err) {
            console.error('查詢失敗:', err.message);
            res.status(500).json({ error: '查詢失敗' });
        } else {
            res.json(rows);
        }
    });
});

// 新增一筆蛋價資料
app.post('/api/insert', (req, res) => {
    const { date, price } = req.body;
    if (!date || !price) {
        return res.status(400).send('缺少必要的欄位');
    }
    const unit = '元/台斤';
    const insertQuery = 'INSERT INTO egg_prices (date, price, unit) VALUES (?, ?, ?)';
    db.run(insertQuery, [date, price, unit], function (err) {
        if (err) {
            console.error('新增失敗:', err.message);
            res.status(500).send('新增失敗');
        } else {
            res.send('新增成功');
        }
    });
});

// 查詢指定日期範圍的蛋價資料（依日期降冪）
app.post('/api/range', (req, res) => {
    const { start, end } = req.body;
    if (!start || !end) {
        return res.status(400).send('缺少必要的欄位');
    }
    const query = 'SELECT * FROM egg_prices WHERE date BETWEEN ? AND ? ORDER BY date DESC';
    db.all(query, [start, end], (err, rows) => {
        if (err) {
            console.error('區間查詢失敗:', err.message);
            res.status(500).json({ error: '查詢失敗' });
        } else {
            res.json(rows);
        }
    });
});

// 匯出 CSV 路由
app.get('/export-csv', (req, res) => {
    let { startDate, endDate } = req.query;
    let query = 'SELECT * FROM egg_prices';
    let params = [];
    if (startDate && endDate) {
        // 自動交換日期順序
        if (startDate > endDate) {
            [startDate, endDate] = [endDate, startDate];
        }
        query += ' WHERE date BETWEEN ? AND ?';
        params = [startDate, endDate];
    }
    query += ' ORDER BY date DESC';
    db.all(query, params, (err, rows) => {
        if (err) {
            console.error('匯出 CSV 查詢失敗:', err.message);
            res.status(500).send('匯出失敗');
            return;
        }
        let csv = '日期,價格,單位\n';
        rows.forEach(row => {
            csv += `${row.date},${row.price},${row.unit}\n`;
        });
        res.setHeader('Content-Type', 'text/csv; charset=UTF-8');
        res.setHeader('Content-Disposition', 'attachment; filename="egg_prices.csv"');
        res.send(csv);
    });
});

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
