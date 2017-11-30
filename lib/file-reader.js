'use strict';

const reader = module.exports = {};
const fs = require('fs');

reader.readFile = (paths, callback) => {
  let ipsumArr = [];
  let kafkaFile = `${__dirname}/../assets/${paths[0]}`;
  let panagramFile = `${__dirname}/../assets/${paths[1]}`;
  let wertherFile = `${__dirname}/../assets/${paths[2]}`;

  fs.readFile(kafkaFile, (error, data) => {

    if(error)
      return callback(error);

    ipsumArr.push(data.toString());

    fs.readFile(panagramFile, (error, data) => {
      if (error)
        return callback(error);
      ipsumArr.push(data.toString());

      fs.readFile(wertherFile, (error, data) => {
        if (error)
          return callback(error);
          
        ipsumArr.push(data.toString());

        callback(null, ipsumArr);
      });
    });
  });
};
