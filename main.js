var motivos = [
    "Galáxia do Rodamoinho",
    "Conjunto de Pandora",
    "Galáxia do Triângulo",
    "Galáxia do Sombreiro",
      "O casal de galáxias"
  ];
  
  var imagens = [ "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Messier51.jpg/1200px-Messier51.jpg",
    "http://mega.ibxk.com.br/2016/05/19/19192725255315.jpg",
    "http://mega.ibxk.com.br/2016/05/19/19192959760319.jpg","http://mega.ibxk.com.br/2016/05/19/19193309111323.jpg",  "http://mega.ibxk.com.br/2016/05/19/19193456186326.jpg"
  ];
  
  var i = 0;
  function proximo() {  document.getElementById("album").src = imagens[i];
      document.getElementById("texto").innerHTML = motivos[i];
      
      i++;  
     if(i>4){
       i=0;
     }
  }