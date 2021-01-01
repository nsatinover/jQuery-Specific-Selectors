const $odd = $('a:odd');
// odd.hide();
const $secureLinks = $('a[href^="https://"]');
// $secureLinks.hide();
const $pdfs = $('a[href$="pdf"]');
$pdfs.hide();
$odd