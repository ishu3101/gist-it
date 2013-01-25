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
    title: 'Get Embed Gists URL',
    contexts: ['link'],
    onclick: function(info, tab) {
        var linkUrl = info.linkUrl;
		//<script src="http://gist-it.sudarmuthu.com/http://github.com/$file"></script>
		linkUrl = '&lt' + 'script src=' + '"http://gist-it.sudarmuthu.com/' + linkUrl +'"&gt' + '&lt' + '/script' +'&gt';
        copyToClipboard(linkUrl)
    },
    // The following array should consist of valid match patterns
    // This context menu item will only be visible on matching links
    targetUrlPatterns: ['https://github.com/*']
});

