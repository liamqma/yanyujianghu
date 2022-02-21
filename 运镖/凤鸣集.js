var utils = require("../utils");
var left = function (count) {
  return utils.left(count, 300);
};
var down = function (count) {
  return utils.down(count, 300);
};
var up = function (count) {
  return utils.up(count, 300);
};
var right = function (count) {
  return utils.right(count, 300);
};
var choosePeople = utils.choosePeople;
var clickOnButtonUnderTheDialog = utils.clickOnButtonUnderTheDialog;
var clickCenter = utils.clickCenter;

left(5);
down(9);
left(10);
down(22);
sleep(10000);

// 到南阳渡了
down(4);
right(6);
down();
right(6);
down(33);

// 点击船夫
choosePeople(2);
// 点击渡江
clickOnButtonUnderTheDialog();
sleep(2000);
clickCenter();
sleep(10000);

// 进入：双王镇
down(2);
right(8);
down(2);
right(5);
down(19);
left(10);
down(4);
left(3);
click(375, 317);
sleep(8000);

// 进入：凤鸣集
left(6);
up(3);
left(5);
down(7);
left(16);
up(4);

// 点击: 叶琦蔷
choosePeople(2);
// 点击：送镖
clickOnButtonUnderTheDialog();
clickCenter();
sleep(2000);

down(4);
left(4);
up(2);
left();
