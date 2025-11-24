


// if this is an array of strings, return true, else return flase
// function validateInput {
//     if (typeof arr == "object" && arr.length >=1 && typeof arr[0] == "number") {

//     }
// }


const zod = require("zod");

function validateInput (arr){
    
    const schema = zod.array(zod.number());

    const response = schema.safeParse(arr);
    console.log(response);

    validateInput (["1", 2, 3]);

    const schema = z.object({
        
    })


}