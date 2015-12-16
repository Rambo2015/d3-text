var tape = require("tape"),
    text = require("../");

tape("textwrap() check padding", function(test) {
  var wrap = text.textwrap();
  test.equal(wrap.padding(), 0);
  test.end();
});
