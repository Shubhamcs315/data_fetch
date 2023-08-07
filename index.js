let a=[123,90];
localStorage.setItem("sheteshubham",JSON.stringify(a));
console.log(JSON.parse(localStorage.getItem("sheteshubham"))[0]);