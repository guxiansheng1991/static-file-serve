/**
 * 封装增删改查的操作统一方法
 */
let OptPool = require('./OptPool');

let pool = new OptPool().getPool();

module.exports = {
  // 插入 
  add(sql, params) {
    pool.getConnection(function (err, conn) {
      if (err) {
        console.error(`error: ${err}`);
        return err;
      }
      return new Promise((resolve, reject) => {
        conn.query(sql, params, function (err, res) {
          if (err) {
            console.error(`insert error: ${err}`);
            reject(err);
          }
          conn.release();
          resolve(res);
        });
      });
    });
  },
  delete() {
    pool.getConnection(function (err, conn) {
      if (err) {
        console.error(`error: ${err}`);
        return err;
      }
      return new Promise((resolve, reject) => {
        conn.query(sql, params, function (err, res) {
          if (err) {
            console.error(`insert error: ${err}`);
            reject(err);
          }
          conn.release();
          resolve(res);
        });
      });
    });
  },
  update() {
    pool.getConnection(function (err, conn) {
      if (err) {
        console.error(`error: ${err}`);
        return err;
      }
      return new Promise((resolve, reject) => {
        conn.query(sql, params, function (err, res) {
          if (err) {
            console.error(`insert error: ${err}`);
            reject(err);
          }
          conn.release();
          resolve(res);
        });
      });
    });
  },
  read() {
    pool.getConnection(function (err, conn) {
      if (err) {
        console.error(`error: ${err}`);
        return err;
      }
      return new Promise((resolve, reject) => {
        conn.query(sql, params, function (err, res) {
          if (err) {
            console.error(`insert error: ${err}`);
            reject(err);
          }
          conn.release();
          resolve(res);
        });
      });
    });
  }
};