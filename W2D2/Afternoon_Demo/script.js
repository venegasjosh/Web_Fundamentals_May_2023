function removeMe(element){
  element.remove()
}

function switchMe(element){
  if(element.innerText == "Log In"){
    element.innerText = "Log Out"
  }
  else{
    element.innerText = "Log In"
  }
}