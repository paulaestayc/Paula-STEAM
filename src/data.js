const filterLabel = (data, condition)=>{
	const resultFilter = data.filter(element =>{
		return element.feedlabel.includes(condition);
	}) 
	return resultFilter;
}

window.filterLabel=filterLabel;


const computeStats = (arr) => {
	let result = arr.length
	return result;
}
window.computeStats=computeStats


const sortData = (data, condition2) => {
	
	let orderData = dataSteam.sort((a,b) => (a[condition2] > b[condition2]) ? 1 : -1);
	return orderData;
	console.log(orderData)
}
window.sortData = sortData;

//CALCULAR PORCENTAJE
// const computeStats = (arr, data) => {
//   let result = Math.round((arr.length * 100) / data.length);
//     return result;
// }
// window.computeStats=computeStats
/* Manejo de data */

// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

const example = () => {
  return 'example';
};

window.example = example;
