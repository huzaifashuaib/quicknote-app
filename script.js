let containerNote=document.querySelector(".note-container")
let btn=document.querySelector(".btn")
let inputnote=document.querySelectorAll(".input-box");

btn.addEventListener('click',createNote);

function showNote(){
    containerNote.innerHTML=localStorage.getItem("notes")
}
showNote()

function updateStorage(){
    localStorage.setItem('notes',containerNote.innerHTML)
}


function createNote(){
   let p=document.createElement('p')
   p.setAttribute("contenteditable","true")
   let img=document.createElement("img")
   img.src="images/delete.png"
   p.className="input-box"
   containerNote.appendChild(p).appendChild(img)
   updateStorage()
}


containerNote.addEventListener("click",(e)=>{
   if(e.target.tagName=="IMG"){
    e.target.parentElement.remove()
    updateStorage()
   }
   else if(e.target.tagName=="P"){
     let notes=document.querySelectorAll(".input-box")
     notes.forEach(note => {
        note.addEventListener("keyup", () => {
            updateStorage()
        });
     });
   }
})
