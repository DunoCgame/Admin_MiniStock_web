

function Login(){

	var numero = prompt("Ingrese un número:");


	console.log(typeof numero)

	if(numero==="1596321"){
			cammbio_area()
	}
	else{
		console.error("error")
	}

}



function cammbio_area(){
	
	document.getElementById("containner_section1").classList.replace('containner-section1','oculto');
	document.getElementById("containner_section2").classList.replace('oculto', 'containner-data-form');
}

function Clear_data_new_update(){

	document.getElementById("nombre").value=""
	document.getElementById("apellido").value=""
	document.getElementById("ci").value=""	
	document.getElementById("direccion").value= ""
	document.getElementById("correo").value=""
	document.getElementById("telefono").value=""
	/**------------------------------------------------------------**/
	document.getElementById("nombreEmpresa").value=""
	document.getElementById("rif").value=""
	document.getElementById("direccionEmpresa").value=""
	document.getElementById("correoEmpresa").value=""
	document.getElementById("telefono1").value=""
	document.getElementById("telefono2").value=""
	document.getElementById("select_image_get").src="asset/image/product-default.png" 

}


function generarCodigoContrato(){

		  const fecha = new Date();
		  
		  // Obtener los componentes de la fecha
		  const año = fecha.getFullYear();
		  const mes = fecha.getMonth() + 1; // Los meses en JavaScript comienzan desde 0
		  const dia = fecha.getDate();
		  
		  // Generar un número aleatorio de 4 dígitos
		  const numeroAleatorio = Math.floor(Math.random() * 10000);
		  
		  // Crear el código de contrato combinando los componentes de la fecha y el número aleatorio
		  const codigoContrato = `${año}${mes}${dia}${numeroAleatorio}`;
		  
		  return codigoContrato;
}

/****NEW DATA***/


function New(){

	let nombre = document.getElementById("nombre").value
	let apellido = document.getElementById("apellido").value
	let ci = document.getElementById("ci").value
	let direccion = document.getElementById("direccion").value
	let correo = document.getElementById("correo").value
	let telefono = document.getElementById("telefono").value
	/**------------------------------------------------------------**/
	let nombreEmpresa = document.getElementById("nombreEmpresa").value
	let riff = document.getElementById("rif").value
	let direccionEmpresa = document.getElementById("direccionEmpresa").value
	let correoEmpresa = document.getElementById("correoEmpresa").value
	let telefono1 = document.getElementById("telefono1").value
	let telefono2 = document.getElementById("telefono2").value

	/*let imagen = document.getElementById("select_image_get").src*/


    var fecha = new Date();
   
	var ano = fecha.getFullYear();
var diaTexto = fecha.toLocaleDateString();
console.log(diaTexto)
let message ="MiniStockEmprendedor"+diaTexto+"=";
  const password = "123647859MiniStock";

  // Encriptar mensaje
  const encryptedMessage = CryptoJS.AES.encrypt(message, password).toString();

  console.log("Mensaje encriptado:", encryptedMessage);


	let code=[encryptedMessage,generarCodigoContrato()];

	let info = {
			code:code,
			nombre:nombre,
			apellido:apellido,
			ci:ci,
			direccion:direccion,
			correo:correo,
			telefono:telefono,
			nombreEmpresa:nombreEmpresa,
			rif:riff,
			direccionEmpresa:direccionEmpresa,
			correoEmpresa:correoEmpresa,
			telefono1:telefono1,
			telefono2:telefono2,
			fecha:diaTexto
	}

		// Convertir el objeto JavaScript en una cadena JSON
		var jsonData = JSON.stringify(info);

			// Crear un enlace de descarga
		var blob = new Blob([jsonData], { type: "application/json" });
		var url = URL.createObjectURL(blob);

		// Crear un elemento <a> en el DOM
		var link = document.createElement("a");
		link.href = url;
		link.download = nombreEmpresa+"_"+diaTexto+".json";

		// Simular un clic en el enlace para descargar el archivo
		link.click();

/*********************************************************/



Qrcode(code,nombreEmpresa,diaTexto,riff)





}/**cierre function**/

/********************************/
function Qrcode(code,name,date,riff){

	let qrdata=code;

        var qrcode = new QRCode("qrcodeuno", {
            text: JSON.stringify(qrdata),
            width: 200,
            height: 200,
            colorDark: "black",
            colorLight: "white",
            correctLevel : QRCode.CorrectLevel.H
        });

		modal_qr.style.display = "block";

/***PARA EL CUADRO DEL QR*****/
		document.getElementById("nombre_de_la_empresa").innerHTML=name	
		document.getElementById("fecha_de_la_empresa").innerHTML=date
		document.getElementById("riff_de_la_empresa").innerHTML=riff


}


/*****MODAL***/
function descargar_qr(){


	let nombreEmpresa = document.getElementById("nombreEmpresa").value
	var fecha = new Date();
	var diaTexto = fecha.toLocaleDateString();


	html2canvas(document.getElementById("qr")).then(function(canvas) {
	      
	        var img = canvas.toDataURL("image/png");
	        var link = document.createElement('a');
	        link.href = img;
	        link.download = "Qrcode"+"_"+nombreEmpresa+"_"+diaTexto+".png";
	        link.click();
	});


}


/*****************************************/
const modal_qr = document.getElementById("modal_qr");

// Get the close button
const closeModalBtn_qr = document.getElementById("close_Modal_qr");

//Event listener for closing the modal
closeModalBtn_qr.addEventListener("click",closeModal_qr());

// Generar un código único de contrato


// Function to close the modal
function closeModal_qr() {

	let containner_qr = document.getElementById("qrcodeuno")

	while(containner_qr.hasChildNodes()){
	 			
	 	containner_qr.removeChild(containner_qr.firstChild);

	}
		
 	modal_qr.style.display = "none";

	containner_qr.innerHTML="";

}


/***********************************************************************/

const contrato = document.getElementById("modal_contrato");
const cerrarcontrato = document.getElementById("cerrarcontrato");
const imprimircontrato = document.getElementById("imprimircontrato");



function call_contrato(){

	let nombre = document.getElementById("nombre").value
	let apellido = document.getElementById("apellido").value
	let ci = document.getElementById("ci").value

	let nombreEmpresa = document.getElementById("nombreEmpresa").value
	let rif = document.getElementById("rif").value

	opencontrato(nombre,apellido,ci,rif,nombreEmpresa)

}

function opencontrato(nom,ape,ci,rif,nombreEmpresa){

	console.log(nom+" "+ape+" "+ci+" "+rif)

	contrato.style.display = "block";

	/*********************data a contrato*********************************/
	document.getElementById("nom_and_ape_comprador").innerHTML=nom+" "+ape;
	document.getElementById("id_contrtante").innerHTML=ci;
	document.getElementById("text_Rif").innerHTML=rif;
	document.getElementById("text_nombre_app").innerHTML="MiniStock";
	document.getElementById("precio_app").innerHTML="60 $";
	document.getElementById("text_nombre_empresa").innerHTML=nombreEmpresa;
	/****************************************************************/

	document.getElementById("nombreapellido").innerHTML=nom+" "+ape;
	document.getElementById("idcontratante").innerHTML=ci;
	var fecha = new Date();
	var diaTexto = fecha.toLocaleDateString();
	document.getElementById("dateinfo").innerHTML=diaTexto
}


function imprimir_contrato(){


var fecha = new Date();
	var diaTexto = fecha.toLocaleDateString();


			let CONTRATO = document.getElementById("Contrato");

			console.log(CONTRATO)
			
    							// Convierte el div en una imagen utilizando html2canva1
    			html2canvas(document.getElementById("Contrato"), {scale:2, allowTaint: true, useCORS:true}).then(canvas => {

    				// Obtiene la imagen en formato base64
    				const imgData = canvas.toDataURL('image/png');

    				// Crea un nuevo documento PDF
    				const pdf = new jsPDF('p', 'mm', 'a4');

    				// Agrega la imagen al documento PDF
    				pdf.addImage(imgData, 'PNG', 0, 0, 210, 297);

    				// Guarda el documento PDF
    				pdf.save(diaTexto+'.pdf');

    			});

			/*****
 html2canvas(document.getElementsByClassName("droppable-area")[0], { useCORS:true}).then(function (canvas){
        var imgBase64 = canvas.toDataURL();
        // console.log("imgBase64:", imgBase64);
        var imgURL = "data:image/" + imgBase64;
        var triggerDownload = $("<a>").attr("href", imgURL).attr("download", "layout_"+new Date().getTime()+".jpeg").appendTo("body");
        triggerDownload[0].click();
        triggerDownload.remove();
    });


			****/


}


function cerrar_contrato(){
 
 	contrato.style.display = "none";

}


