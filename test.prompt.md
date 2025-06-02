1. 在 app.js 中，使用 sqlite3 來操作資料庫，並開啟位置在 db/sqlite.db 的資料庫，需要確認是否成功打開資料庫。不要用匯入 db.js的方式。
2. 在 app.js 中，撰寫 /api/quotes 路由，使用 SQL 來查詢 egg_prices 所有的蛋價資料，並根據日期降冪（由新到舊）： SELECT * FROM egg_prices ORDER BY date DESC;
   回傳 json 格式的資料。
3. 在 app.js 中，撰寫 post /api/insert 路由，使用 SQLite 新增一筆蛋價資料
4. 在 app.js 中，撰寫 post /api/range 路由，使用 SQLite 查詢 egg_prices 資料表中，符合指定日期範圍的蛋價資料，並根據日期降冪（由新到舊）：
   SELECT * FROM egg_prices WHERE date BETWEEN 'start_date' AND 'end_date' ORDER BY date DESC;
   回傳 json 格式的資料。