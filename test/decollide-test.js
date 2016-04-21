var tape = require("tape"),
    text = require("../");

tape("decollide() check size", function(test) {
  var wrap = text.decollide();
  test.equal(wrap.size()[0], 500);
  test.end();
});
