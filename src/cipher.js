  const cipher = {
    encode(deslocamento, texto){
      Number(deslocamento)
      texto = texto.toUpperCase()
      let messageArray = []
      let textRetorno = ""
      for (let i=0; i<texto.length; i++)
      {
       messageArray [i] = (texto.charAt(i))
        messageArray[i] = (((messageArray[i].charCodeAt(0) - 65) + deslocamento) % 26 + 65)
        texotRetorno += String.fromCharCode(messageArray[i])
        alert (textoRetorno)

      }
      return textoRetorno

    }
  }

    //decode(){

  

  
   
  // ...

export default cipher;
