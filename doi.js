var signerOpenTag = '<span class="signer">', signerCloseTag = '</span>', signer = 'Samuel Adams';

function magnifyText(selection)
{
    var element = $(selection);
    if (element.css('font-size') == '')
        element.css('font-size', '120%');
    else
        element.css('font-size', parseInt(element.css('font-size')) * 1.20);
}
function shrinkText(selection)
{
    var element = $(selection);
    if (element.css('font-size') == '')
        element.css('font-size', '83%');
    else
        element.css('font-size', parseInt(element.css('font-size')) * 0.833);
}

function jhImageVisibility(element){
    jhImage = $('#JohnHancockImage')
    visibility = jhImage.css('visibility')
    visibility = visibility == 'visible' ? 'hidden' : 'visible'
    jhImage.css ('visibility', visibility)
}