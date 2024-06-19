 //select todo list
 let todoList=document.querySelector(".todolist")
 //select button and add click event
   let addTodo=document.querySelector(".addTodo")
   addTodo.addEventListener("click",()=>{
       let todoText=document.querySelector(".todo").value;
       //create <li></li>
       let li=document.createElement("li")
       //insert text into li
       li.innerText=todoText
       console.log(li)
       todoList.append(li)

   });