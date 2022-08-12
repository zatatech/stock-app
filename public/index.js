const inputName = document.querySelector('#productName')
const inputPrice= document.querySelector('#productPrice')

//se crea un objeto con las {} por ejemplo {inputName} con la propiedad inputName
//ademas cuando el   nombre de la variable que se 
//asigna es IGUAL al nombre de la propiedad del objeto se puede obviar el nombre de la variable
// ej: console.log( inputName: inputName) es igual a 
//     console.log( inputName) 
// console.log({inputName: inputName, inputPrice: inputPrice})
//or
//console.log({inputName, inputPrice})

const button = document.querySelector('button')

button.addEventListener('click',(e)=>{
    const name = inputName.value
    const price= inputPrice.value

    fetch('/api/v1/products', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name,
            price,
        }),

    })

})



