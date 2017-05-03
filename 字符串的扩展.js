/**
 * Created by xiaoyunhuan on 2017/5/3.
 */
//1.字符串的Unicode表示法
console.log("\u0061");
console.log("\uD842\uDFB7");
console.log("\u20BB7");
console.log("\u{20BB7}");
console.log("\u{41}\u{42}\u{43}");
console.log('\z' === 'z');
console.log('\172' === 'z');
console.log('\x7A' === 'z');
console.log('\u007A' === 'z');
console.log('\u{7A}' === 'z');

var s = '𠮷a';
for (let ch of s) {
    console.log(ch.codePointAt(0).toString(16));
}

function is32Bit(c) {
    return c.codePointAt(0) > 0xFFFF;
}
console.log(is32Bit("𠮷"));
console.log(is32Bit("a"));

console.log(String.fromCodePoint(0x20BB7));
console.log(String.fromCodePoint(0x78, 0x1f680, 0x79));
console.log('x\uD83D\uDE80y');

for (let i of 'foo') {
    console.log(i);
}

var a = '\u004F\u030C'.normalize('NFD');
console.log(a);
console.log('x'.repeat(3));

//10.模板字符串
console.log(`In Javsscript this is not legal`);
var name = "Bob", time = "today";
var myString = `Hello ${name}, how are you ${time}?`;
console.log(myString);

const tmpl = addrs => `
  <table>
  ${addrs.map(addr => `
    <tr><td>${addr.first}</td></tr>
    <tr><td>${addr.last}</td></tr>
  `).join('')}
  </table>
`;
const data = [
    {first: '<Jane>', last: 'Bond'},
    {first: 'Lars', last: '<Croft>'},
];

console.log(tmpl(data));


var template = `
<ul>
  <% for(var i=0; i < data.supplies.length; i++) { %>
    <li><%= data.supplies[i] %></li>
  <% } %>
</ul>
`;



function compile(template) {
    var evalExpr = /<%=(.+?)%>/g;
    var expr = /<%([\s\S]+?)%>/g;

    template = template
        .replace(evalExpr, '`); \n  echo( $1 ); \n  echo(`')
        .replace(expr, '`); \n $1 \n  echo(`');

    template = 'echo(`' + template + '`);';

    var script =
        `(function parse(data){
            var output = "";
            function echo(html){
              output += html;
            }
            ${ template }
            return output;
        })`;
    return script;
}
document.writeln(compile(template));
var parse = eval(compile(template));
console.log(parse({ supplies: [ "broom", "mop", "cleaner" ] }));


var total = 30;
var msg = passthru`The total is ${total} (${total*1.05} with tax)`;

//['The total is', '(', 'with tax)',''], ${total}, ${total*1.05}

function passthru(literals) {
    console.log(literals);
    console.log(arguments);
    var result = '';
    var i = 0;
    while (i < literals.length) {
        result += literals[i++];
        console.log(result);
        if (i < arguments.length) {
            result += arguments[i];
            console.log(result);
        }
    }
    return result;
}

msg // "The total is 30 (31.5 with tax)"