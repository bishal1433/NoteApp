showNotes();

//adding Notes to localStorage...
function addMe(){
  let titleNote=document.getElementById("addTitle");
  let content=document.getElementById("addNote");

  let noteobj={
    title:titleNote.value,
    note:content.value
  };

  let noteObj=JSON.stringify(noteobj);

  let notes=localStorage.getItem("notes");
  
  var store=[];
  if(notes==null){
    store=[];
  }else{
    store=JSON.parse(notes);
  }

  store.push(noteObj);

  localStorage.setItem("notes",JSON.stringify(store));
  titleNote.value="";
  content.value="";
  showNotes();
  
}

//showNotes function to show the notes over screen...
function showNotes(){

  let notes=JSON.parse(localStorage.getItem("notes"));

  //if notes is null no need to go further...
  if(notes==null){
    return;
  }

  let len=notes.length;

  let html=``;

  for(var i=len-1;i>=0;i--){
    let noteObj=JSON.parse(notes[i]);

    html+=`
    <div class="card mx-2 my-2 noteCard" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title" style="color:green;">${noteObj.title}</h5>
      <p class="card-text" style="color:blue;">${noteObj.note}</p>
      <button id="${i}" class="btn btn-danger" onclick="deleteMe(this.id)">Delete</button>
    </div>
  </div>
    `;

  }

  let noteEle=document.getElementById("notes");

  noteEle.innerHTML=html;
}



//delete note function to delete the notes...
function deleteMe(index){
  let notes=JSON.parse(localStorage.getItem("notes"));

  notes.splice(index,1);

  localStorage.setItem("notes",JSON.stringify(notes));

  showNotes();

}

//searching Notes by title


  let searchBar=document.getElementById("searchTxt");

  searchBar.addEventListener("input",()=>{

    let searchItem=searchBar.value;
    let notes=document.getElementsByClassName("noteCard");

    let len=notes.length;



    for(var i=0;i<len;i++){
      let cardTxt=notes[i].getElementsByTagName("h5")[0].innerText;

      if(cardTxt.includes(searchItem)){
        notes[i].style.display="block";
      }else{
        notes[i].style.display="none";
      }
    }

  });

  

