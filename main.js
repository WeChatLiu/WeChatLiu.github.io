prompt('Please enter your name.');

var myImg = document.querySelector('img');
alert('图片地址是img/01.jpg')

myImg.onclick = function(){
	var url = myImg.getAttribute('src');
	if(url === 'img/01.jpg'){
		myImg.setAttribute('src','img/02.jpg');
		alert('图片地址是img/02.jpg')
	}
}