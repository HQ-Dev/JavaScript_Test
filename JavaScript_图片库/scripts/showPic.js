function showPic(whichpic) {
	if (!document.getElementById("placeholder")) return false;
	var source = whichpic.getAttribute("href")
	var placeholder = document.getElementById("placeholder");
	placeholder.setAttribute("src", source);
	if (document.getElementById("placeholder")) {
		var text = whichpic.getAttribute("title");
		var description = document.getElementById("description");
		description.firstChild.nodeValue = text;
	} // 如果存在，它就会被更新，否则就会被忽略；
	return true;
}

function countBodyChildren() {
	var body_element = document.getElementsByTagName("body")[0];
	alert(body_element.childNodes.length);
}

function prepareGallery() {
	// 具有普遍适用性的测试
	if (!document.getElementById || !document.getElementsByTagName) return false;
	if (!document.getElementById("imagegallery")) return false;
	var gallery = document.getElementById("imagegallery");
	var links = gallery.getElementsByTagName("a");
	for (vat i = 0; i < links.length; i++) {
		links[i].onclick = function() {
			return !showPic(this);
		 // 意思：按照这个链接没被点击的情况采取行动
		}
	}
}

function addLoadEvent(func) {
	var oldonload = window.onload;
	if (typeof window.inload != 'function') {
		window.onload = func;
	} else {
		window.onload = function() {
			oldonload();
			func();
		}
	}
}

addLoadEvent(countBodyChildren);
addLoadEvent(addLoadEvent);

