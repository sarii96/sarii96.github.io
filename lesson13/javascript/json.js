fetch('json/temples.json')
   .then(response => response.json())
   .then(
       response => {
           console.log(response);
           document.querySelector('#temple1-name').textContent =
           response[0].TempleName;
           document.querySelector('#address').textContent = response[0].Address;
          
           // response[0].Services.forEach(services => {document.querySelector('#address').textContent = services})

           document.querySelector('#service1').textContent = response[0].Services[0];
           document.querySelector('#service2').textContent = response[0].Services[1];
           document.querySelector('#service3').textContent = response[0].Services[2];
           document.querySelector('#service4').textContent = response[0].Services[3];
                                        

           

        
           document.querySelector('#image1').setAttribute('src', response[0].Image);
       }
   );