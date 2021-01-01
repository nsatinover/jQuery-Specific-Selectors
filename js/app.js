const $odd = $('a:odd');
const $secureLinks = $('a[href^="https://"]');
const $pdfs = $('a[href$="pdf"]');
const $pdfCheckbox = $('<label><input type="checkbox">Allow PDF downloads</label>');



const $liElems = $('li');
$liElems.hide();

const $liElemsHide = $('li:hidden');
$liElemsHide.show();

$secureLinks.attr('target', '_blank');
$pdfs.attr('download', 'true');

$odd.css('backgroundColor', 'lightgrey');

$secureLinks.addClass('secure');
$pdfs.addClass('pdf');

const $submit = $(".submit-btn");
$submit.attr('disabled', false);

$pdfs.on('click', (event) => {
    
    if($(':checked').length === 0) {
        event.preventDefault();
        alert('Please check the box to allow PDF downloads');
    }

});

$('#links').append($pdfCheckbox);

// $('a').each( (i, link) => {
//     // console.log(`Index ${i} for link: ${$(link).attr('href')}`);
//     const url = $(link).attr('href');
//     $(link).parent().append(`<p>${url}</p>`);
// });

$('a').each( function() {
    const url = $(this).attr('href');
    $(this).parent().append(`<p>(${url})</p>`);
});