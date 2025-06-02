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

db.serialize(() => {
    // 確保 egg_prices table 存在
    const createEggPricesTableQuery = `CREATE TABLE IF NOT EXISTS egg_prices (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        date TEXT NOT NULL UNIQUE,
        price REAL NOT NULL,
        unit TEXT NOT NULL
    );`;

    db.run(createEggPricesTableQuery, (err) => {
        if (err) {
            console.error('無法建立 egg_prices table:', err.message);
        } else {
            console.log('egg_prices table 已確認存在或成功建立');
        }
    });

    // 新增多筆 egg_prices 資料
    const eggPricesData = [
        ["2025-05-27", 22.5, "元/台斤"],
        ["2025-05-06", 24.5, "元/台斤"],
        ["2025-04-29", 26.5, "元/台斤"],
        ["2025-04-15", 29.5, "元/台斤"],
        ["2025-03-26", 32.5, "元/台斤"],
        ["2025-03-12", 30.5, "元/台斤"],
        ["2025-03-05", 27.5, "元/台斤"],
        ["2025-02-26", 25.5, "元/台斤"],
        ["2025-02-05", 22.5, "元/台斤"],
        ["2025-01-21", 18.5, "元/台斤"],
        ["2024-12-31", 22.5, "元/台斤"],
        ["2024-12-03", 24.5, "元/台斤"],
        ["2024-11-06", 26.5, "元/台斤"],
        ["2024-10-30", 24.5, "元/台斤"],
        ["2024-10-15", 21.5, "元/台斤"],
        ["2024-09-24", 24.5, "元/台斤"],
        ["2024-09-17", 26.5, "元/台斤"],
        ["2024-09-03", 28.5, "元/台斤"],
        ["2024-07-31", 31.5, "元/台斤"],
        ["2024-07-24", 28.5, "元/台斤"],
        ["2024-06-25", 25.5, "元/台斤"],
        ["2024-06-11", 27.5, "元/台斤"],
        ["2024-06-04", 30.5, "元/台斤"],
        ["2024-05-21", 32.5, "元/台斤"],
        ["2024-04-30", 35.5, "元/台斤"],
        ["2024-04-23", 37.5, "元/台斤"],
        ["2024-03-27", 39.5, "元/台斤"],
        ["2024-03-05", 36.5, "元/台斤"],
        ["2024-02-16", 39.5, "元/台斤"],
        ["2024-02-05", 36.5, "元/台斤"],
        ["2024-02-04", 39.5, "元/台斤"],
        ["2024-01-24", 40.5, "元/台斤"],
        ["2023-11-07", 38.5, "元/台斤"],
        ["2010-10-07", 16, "元/台斤"]
    ];
    const insertEggPriceQuery = `INSERT OR IGNORE INTO egg_prices (date, price, unit) VALUES (?, ?, ?);`;
    eggPricesData.forEach(row => {
        db.run(insertEggPriceQuery, row, (err) => {
            if (err) {
                console.error('無法插入 egg_prices 資料:', err.message, row);
            }
        });
    });
});
