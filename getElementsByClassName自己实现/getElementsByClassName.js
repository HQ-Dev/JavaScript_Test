//  这个例子不适用与多个类名。 有兴趣参考 JavaScript DOM P42

function getElementsByClassName(node, classname) {
	if (node.getElementsByClassName) {
		// 使用现有的方法
		return node.getElementsByClassName(classname);
	} else {
		var results = new Array();
		var elems = node.getElementsByTagNames("*");  
		for (var i = 0; i < elems.length; i++) {
			if (elems[i].className.indexOf(classname) != -1) {
				results[results.length] = elems[i];
			}
		}
		return results;
	}
}