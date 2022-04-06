let ingredientes = ["jamon" , "muzzarella" , "morrones" , "harina" , "aceite" , "levadura" , "sal" , "salame" , "oregano" , "maizena"];
let pares = [];
let impares = [];


const definirIngrediente = ing =>{

    for(let i=0;i<ing.length;i++){
        if(ing[i].length%2==0){
           pares.push(ing[i]);
        } else{
            impares.push(ing[i])
        }       
    }
}

definirIngrediente(ingredientes);

console.log(pares)
console.log(impares)

