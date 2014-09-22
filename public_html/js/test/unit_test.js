/**
 *
 */

// Test環境のみで実行
QUnit.config.autostart = (window.location.href.indexOf("test.myserver.com") > -1) ? true : false;

// Test環境のみで必要なdivやcssを追加
if (QUnit.config.autostart != false) {
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
}

// モジュールadd_testを作成(public_html/add.htmlページのJSテスト用)
QUnit.module("add_test");

// 加算Testを実行
QUnit.test("add_test calculateAdd test", function(assert) {
    var value = calculateAdd(1, 2);
    var expected = 3;
    assert.equal(value, expected, "We expect addition result to be " + expected);
});


// モジュールsubtract_testを作成(public_html/subtract.htmlページのJSテスト用)
QUnit.module("subtract_test");

// 引き算Testを実行
QUnit.test("subtract_test calculateSubtract test", function(assert) {
    var value = calculateSubtract(2, 1);
    var expected = 1;
    assert.equal(value, expected, "We expect subtraction result to be " + expected);
});
