// 获得 id 为 fruits 的节点
var ul = document.getElementById('fruits'),
		carrot = ul.firstElementChild;
ul.removeChild(carrot);
var pear = document.createElement('li');
// 设置 pear 的 style 属性
pear.setAttribute('style', 'color: red');
// 设置 pear 的内容
pear.innerHTML = 'pear';
ul.appendChild(pear);
