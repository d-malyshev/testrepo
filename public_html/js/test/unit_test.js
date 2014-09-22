/**
 * 
 */
// 結果表示divを追加
var d = document;
var qd = d.createElement('div');
qd.id = "qunit";
d.body.appendChild(qd);

var qfd = d.createElement('div');
qfd.id = "qunit-fixture";
d.body.appendChild(qfd);

//QUnitのstylesheetを追加
var head = d.getElementsByTagName('head')[0];
var css = d.createElement("link")
css.setAttribute("rel", "stylesheet")
css.setAttribute("type", "text/css")
css.setAttribute("href", "//code.jquery.com/qunit/qunit-1.15.0.css");
head.appendChild(css);

//Testを実行
QUnit.test( "hello test", function(assert) {
  assert.ok( 1 == "1", "Passed!" );
});

QUnit.test( "boolean test", function(assert) {
    assert.ok( booleanFunc() == true, "Passed!" );
});

QUnit.test("calculateAdd test", function(assert) {
    var value = calculateAdd(1, 2);
    var expected = 3;
    assert.equal(value, expected, "We expect value to be " + expected);
});