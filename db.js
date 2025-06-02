const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const fs = require('fs');

// 確保資料庫目錄存在
const dbDir = path.join(__dirname, 'db');
if (!fs.existsSync(dbDir)) {
    fs.mkdirSync(dbDir);
}

const dbPath = path.join(dbDir, 'sqlite.db');
const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error('資料庫連線失敗:', err.message);
    } else {
        console.log('成功連線到 SQLite 資料庫');
    }
});

// 確保 movie_quotes table 存在
const createTableQuery = `CREATE TABLE IF NOT EXISTS movie_quotes (
                                                                      id INTEGER PRIMARY KEY AUTOINCREMENT,
                                                                      provider TEXT NOT NULL,
                                                                      movie_name TEXT NOT NULL,
                                                                      quote TEXT NOT NULL,
                                                                      votes INTEGER DEFAULT 0
                          );`;

db.run(createTableQuery, (err) => {
    if (err) {
        console.error('無法建立 movie_quotes table:', err.message);
    } else {
        console.log('movie_quotes table 已確認存在或成功建立');
    }
});

const dbPath = path.join(dbDir, 'sqlite.db');
const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error('資料庫連線失敗:', err.message);
    } else {
        console.log('成功連線到 SQLite 資料庫');
    }
});


db.run(insertDataQuery, (err) => {
    if (err) {
        console.error('無法插入資料:', err.message);
    } else {
        console.log('資料已成功插入');
    }
});

// 關閉資料庫連線
db.close((err) => {
    if (err) {
        console.error('關閉資料庫時發生錯誤:', err.message);
    } else {
        console.log('資料庫連線已關閉');
    }
});

app.get('/api/quotes', (req, res) => {
    db.all('SELECT * FROM movie_quotes', (err, rows) => {
        if (err) {
            console.error(err.message);
        }
        res.json(rows);
    });
});