//Procurar o botao
document.querySelector("#add-time")
//quando clicar no botao
.addEventListener('click', cloneField)

//Executar uma acao
function cloneField () {
   //duplicar os campos. Que campos?
   const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true) //boolean: true e false

   //pegar os campos. Que campos?
   const fields = newFieldContainer.querySelectorAll('input') 

   //para cada campo, limpar 
   fields.forEach(function(field) {
       //pegar o field do momento e limpa ele
       field.value = ""
   })

   //Colocar na página: onde?
   document.querySelector('#schedule-items').appendChild(newFieldContainer)
}
