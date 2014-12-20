javascript:var l = location.href;
var p = l.substr(0,5) === 'https'
        ? 'https'
        : l.substr(0,4) === 'http'
          ? '';
var r = p === 'https'
        ? 'googlechromes'
        : 'googlechrome';
window.location = r+'://'+l.replace(p,'');