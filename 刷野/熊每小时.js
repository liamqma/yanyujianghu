var utils = require("./utils");
var utils2 = require("../utils");

var choosePeople = utils2.choosePeople;
var clickOnButtonUnderTheDialog = utils2.clickOnButtonUnderTheDialog;
var clickCenter = utils2.clickCenter;
var waitForMapChange = utils2.waitForMapChange;
var xiongChengDu = utils.xiongChengDu;
var xiongSaiBei = utils.xiongSaiBei;

while (true) {
  xiongChengDu();

  toast("去十方集");
  choosePeople(2);
  clickOnButtonUnderTheDialog(1);
  clickCenter();
  sleep(2000);
  swipe(960, 200, 960, 800, 2000);
  click(323, 330);
  sleep(1000);
  click(606, 613);
  waitForMapChange();

  xiongSaiBei();

  toast("去成都");
  choosePeople(2);
  clickOnButtonUnderTheDialog(1);
  clickCenter();
  sleep(2000);
  swipe(960, 800, 960, 200, 2000);
  click(1000, 725);
  sleep(1000);
  click(695, 1005);
  waitForMapChange();

  sleep(1000 * 60 * 56);
}
