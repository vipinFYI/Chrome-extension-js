

let myLeads = ['www.google.com',"www.airbnb.com","www.hjk.com"]
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")


inputBtn.addEventListener("click",function(){

    myLeads.push(inputEl.value)
    console.log(myLeads)

    
})

for (let i=0;i < myLeads.length;i++) {

    ulEl.innerHTML += "<li>"+myLeads[i] + "</li>"


}