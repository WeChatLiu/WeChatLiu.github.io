prompt('Please enter your name.');

var myImg = document.querySelector('img');
alert('ͼƬ��ַ��img/01.jpg')

myImg.onclick = function(){
	var url = myImg.getAttribute('src');
	if(url === 'img/01.jpg'){
		myImg.setAttribute('src','img/02.jpg');
		alert('ͼƬ��ַ��img/02.jpg')
	}
}