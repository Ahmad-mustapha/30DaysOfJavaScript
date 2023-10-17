// The “try…catch” syntax
// The try...catch construct has two main blocks: try, and then catch:

// try {

//   // code...

// } catch (err) {

//   // error handling

// }
try{
    // alert("this is beneee")
}
catch(error){
    // alert("there's is an error")
}

// for a code with error, maybe in a situation where your variabele is undefined

try{
    // alert('this will run')
    ben;
}
catch(err){
    // alert('Error: variable is undefined')
}
// NOTE : It won't work if the code is syntatically wrong. So, try...catch can only handle errors that occur in valid code. Such errors are called “runtime errors” or, sometimes, “exceptions”.

// try...catch works synchronously
// If an exception happens in “scheduled” code, like in setTimeout, then try...catch won’t catch it:
try{
    setTimeout(function(){
        // noSuchVariable;
    }, 1000);
}
catch(err){
    // alert('Will not work')
}

// That’s because the function itself is executed later, when the engine has already left the try...catch construct.

// To catch an exception inside a scheduled function, try...catch must be inside that function:

setTimeout(() => {
    try{
        // noSuchVariable;
    }
    catch(err){
        // alert('error is caugth here')
    }
}, 1000);



/**
 * Error object
When an error occurs, JavaScript generates an object containing the details about it.
 The object is then passed as an argument to catch:
 */
// For all built-in errors, the error object has two main properties:

// name:
// Error name. For instance, for an undefined variable that’s "ReferenceError".
// message:
// Textual message about error details.
// There are other non-standard properties available in most environments. One of most widely used and supported is:

// stack
// Current call stack: a string with information about the sequence of nested calls that led to the error. Used for debugging purposes.

setTimeout(() =>{
    try{
        // console.log(a)
    }
    catch(err){
        alert('a was not defined')
    }
}, 2000)

// try{
//     BeforeUnloadEvent;
// }
// catch(aa){
//     alert(aa.name)
//     alert(aa.message)
//     alert(aa.stack)
// }

let json = `{
    "name" : "bene"
    "age" : 20
}`
// If this nor=t a json file it will throw an error
try{
    let user = JSON.parse(json)
    alert(user.name)
}
catch(err){
    // alert( err.name );
    // alert( err.message );
    // alert('Our apologie,the data has erros, we\'ll tr to request it one more time')
}

// To unify error handling, we’ll use the throw operator.

// “Throw” operator
// The throw operator generates an error.

// The syntax is:

// throw <error object></error>
// Syntax:

// let error = new Error()

let error = new Error("things happen oo")
// alert(error.name)
// alert(error.message)
// alert(error.stack)


try{
    JSON.parse(`{bad json o}`)
}
catch(err){
    // alert(err.name)
    // alert(err.message)
}


let json2 = `{"age" : "20"}`

try{
    let user = JSON.parse(json2)
    if(!user.name){
        throw new SyntaxError("Incomplete data: no name")
    }
    else{
        alert(user.name)
    }
}
catch(err){
    alert("JSON Erro: " + err.message)
}

// Rethrowing
// In the example above we use try...catch to handle incorrect data. 
// But is it possible that another unexpected error occurs within the try {...} block? 
// Like a programming error (variable is not defined) or something else, not just this “incorrect data” thing.

let json3 = '{ "age": 30 }'; // incomplete data

try {
  user = JSON.parse(json3); // <-- forgot to put "let" before user

  // ...
} catch (err) {
  alert("JSON Error: " + err); // JSON Error: ReferenceError: user is not defined
  // (no JSON Error actually)
}