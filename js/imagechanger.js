var myImage = document.querySelector('img');
//funcion al hacer click en objeto contenido en myImage
myImage.onmouseover = function(){
	//Obtener el valor del atributo 'src' del objeto myImage
	var mySrc = myImage.getAttribute('src');

	if (mySrc === 'images/firefox.png'){
		myImage.setAttribute('src','images/chrome.png');
	} else {
		myImage.setAttribute('src','images/firefox.png');
	}
}

