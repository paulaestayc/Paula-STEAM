/* Manejo del DOM */

let dataSteam = STEAM.appnews.newsitems;
let container = document.getElementById("feedlabel")
let count = document.getElementById("count")
const selectOrderdata = document.getElementById("orderdata");
const showAll = document.getElementById("root");


const createCard =(data)=>{
  showAll.innerHTML='';
  data.forEach(component => {
    if (component.author === '' && component.feedlabel !== '') {
      showAll.innerHTML += `
      <div>
      <div class="container col-sm-6 col-md-10 my-3">
      <div class="card text-#aaa bg-light mb-3 ">
      <div class="box">       
      <div class="ahref"><a href="${component.url}"></div>        
      <h3>${component.title}</h3>
      <div class="text">
      <h5>Autor: Desconocido </h5>        
      <p>${component.contents}</p>
      <p>FeedLabel: ${component.feedlabel}</p>
      </div>
      </div>
      </div>
      </div>`
    } 
    else {
      showAll.innerHTML += `
      <div>
      <div class="container col-sm-6 col-md-10 my-3">
      <div class="card text-#aaa bg-light mb-3 ">
      <div class="box">        
      <div class="ahref">
      <a href="${component.url}"></div>        
      <h3>${component.title}</h3>
      <div class="text">
      <h5>Autor:${component.author}</h5>        
      <p>${component.contents}</p>
      <p>FeedLabel: ${component.feedlabel}</p>
      </div>
      </div>
      </div>
      </div>` 
    }
  });
}
createCard(dataSteam)

//FILTRAMOS POR FUENTE
const selectSrc = document.getElementById("feedlabel");
selectSrc.addEventListener("change", () =>{
  let condition= selectSrc.options[selectSrc.selectedIndex].text;
  let filterLabel=window.filterLabel(dataSteam,condition);
  count.innerHTML="Se encontraron " + window.computeStats(filterLabel,dataSteam) + " noticias provenientes de " + condition;
  filterLabel.forEach (() =>{
    return createCard(filterLabel)
  })
})  


selectOrderdata.addEventListener('change', () => {
 let condition2 = selectOrderdata.value
 let ordered = window.sortData(dataSteam, condition2);
})

document.getElementById("reset").addEventListener("click", () =>{
  location.reload();
})
/* Manejo del DOM */