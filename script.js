
  let input = document.querySelector('#password'),
       info = document.querySelector('#info'), 
       button = document.querySelector('button') 
       pass_size = 8;

       input.value = passwordGenerator();
  
       function passwordGenerator(){
        let randomPass;
        do{
          randomPass = Math.random().toString(36).substring(2)
        }
          while(randomPass.length > pass_size);

          return randomPass;
        }
  
        button.addEventListener('click',function(){
          input.value = passwordGenerator()
        
        })
      
