  const cipher = {
    encode: function (string){
      
      let texto = string.toUpperCase()
      let results = "";
      


      for (let i=0; i<texto.length; i++)
      { let pegarLetras = texto[i]; 
        let num ;
        if (pegarLetras.charCodeAt(0)>= 65 && pegarLetras.charCodeAt(0) <=90){
          num=pegarLetras.charCodeAt(0) - 65;
          results += String.fromCharCode (((num + 7) % 26) + 65);

        }
       

      }
      return results

    }  ,

    decode: function(string){
      let texto = string.toUpperCase()
      let results = "";
      

      for (let i=0; i<texto.length; i++)
      { let pegarLetras = texto[i]; 
        let num ;
        if (pegarLetras.charCodeAt(0)>= 65 && pegarLetras.charCodeAt(0) <=90){
          num=pegarLetras.charCodeAt(0) - 90;
          results += String.fromCharCode (((num + 19) % 26) + 90);

        }
       

      }
      return results
    }
  
  
  
  
  }

  

  
   
 

export default cipher;
