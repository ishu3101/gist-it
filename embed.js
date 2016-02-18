function copyToClipboard(text){
   var copyDiv = document.createElement('div');
   copyDiv.contentEditable = true;
   document.body.appendChild(copyDiv);
   copyDiv.innerHTML = text;
   copyDiv.unselectable = "off";
   copyDiv.focus();
   document.execCommand('SelectAll');
   document.execCommand("Copy", false, null);
   document.body.removeChild(copyDiv);
}

chrome.contextMenus.create({
    id: 'gist-it',
    title: 'Gist It',
    contexts: ['link'],
    // The following array should consist of valid match patterns
    // This context menu item will only be visible on matching links
    targetUrlPatterns: ['http://github.com/*', 'https://github.com/*']
});

chrome.contextMenus.onClicked.addListener(function(info, tab) {
    if (info.menuItemId == "gist-it") {
        var linkUrl = info.linkUrl;
		//<script src="http://gist-it.sudarmuthu.com/http://github.com/$file"></script>
		linkUrl = '&lt' + 'script src=' + '"http://gist-it.sudarmuthu.com/' + linkUrl +'"&gt' + '&lt' + '/script' +'&gt';
        copyToClipboard(linkUrl)
    }
});

