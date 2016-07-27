function displayAbbreviations() {
	if (!document.getElementByTagName || !document.createElement
			|| !document.createTextNode) return false;
	// 取得所有缩略词
	// 遍历文档中的所有 abbr 元素
	var abbreviations = document.getElementsByTagName("abbr");
	// 如果文档中没有 abbr 元素，这个函数将就此结束
	if (abbreviations.length < 1) return false;
	// 获取并保存每个 abbr 元素提供的信息
	var defs = new Array();
	// 遍历这些缩略词
	for (var i = 0; i < abbreviations.length; i++) {
		var current_abbr = abbreviations[i];
		var definition = current_abbr.getAttribute("title");
		var key = abbreviations[i].lastChild.nodeValue;
		// 这两个变量就是要保存到 defs 数组中的内容
		defs[key] = definition;
	}
	// 创建定义列表
	var dlist = document.createElement("dl");
	for (key in defs) {
		var definition = defs[key];
		var dtitle = document.createElement("dt");
		var dtitle_text = document.createTextNode(key);
		dtitle.appendChild(dtitle_text);
		var ddesc = document.createElement("dd");
		var ddesc_text = document.createTextNode(definition);
		ddesc.appendChild(ddesc_text);
	// 把它们添加到定义列表	
		dlist.appendChild(dtitle);
		dlist.appendChild(ddesc);
	}
	// 插入这个定义列表
	// 之前加上一个描述性的标题
	var header = document.createElement("h2");
	var header_text = document.createTextNode("Abbreviations");
	header.appendChild(header_text);
	// 首先插入“缩略语表”的标题
	document.body.appendChild(header);
	// 插入"缩略语表"本身
	document.body.appendChild(dlist);
}

addLoadEvent(displayAbbreviations);
