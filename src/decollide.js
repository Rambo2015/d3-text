
export default function() {
  var width = 500;
  var height = 500;
  var direction = 0;
  var maxTries = 20;

  var decollider = function(texts) {

    var that = this;
    var bboxes = [];

    texts.each(function(d) {

      var text = d3.select(this);

      var bbox = getNextFreeSpace(text, bboxes);

      text.attr('x', bbox.x);
      text.attr('y', bbox.y);

    })
  }

  function intersects(source, target) {

    var sx2 = source.x + source.width;
    var tx2 = target.x + target.width;
    var sy2 = source.y + source.height;
    var ty2 = target.y + target.height;

    return (source.x < tx2 && sx2 > target.x && source.y < ty2 && sy2 > target.y);

  }


  function getNextFreeSpace(text, bboxes) {
    var bbox = text.node().getBBox();

    var reLoop = false;
    var tries = 0;

    for (var i = 0; i < bboxes.length; i++) {
      var target = bboxes[i];

      if(intersects(bbox, target)) {
        reLoop = true;
        tries += 1;
        var sign = direction % 2 === 0 ? -1 : 1;
        bbox.y += bbox.height * sign;
      }

      if(i === bboxes.length - 1 && reLoop ) {
        if(tries < maxTries) {
          i = 0;
        }
        reLoop = false;
      }

    }

    console.log(tries)

    direction += 1;
    bboxes.push(bbox);
    return bbox;
  }

  decollider.size = function(_) {
    if (!arguments.length) {
      return [width, height];
    }

    width = _[0];
    height = _[1];

    return decollider;
  };


  return decollider;


}
