
const imgContainer = document.querySelector('.img-container');


const addImage = (element, url) => {
	return new Promise((resolve, reject) => {
		const img = document.createElement('img')
		img.src = url;
		img.onload = ()=>{
			resolve()
		}
		element.appendChild(img)
	})
}


addImage(imgContainer,'https://placekitten.com/1000/1001').then(()=>{
	console.log('image loaded')
})

// test1
// addImage(imgContainer,'https://www.fillmurray.com/g/999/1000').then(()=>{
// 	console.log('image loaded 1')
// })


// test2
// addImage(imgContainer,'https://i.picsum.photos/id/1015/6000/4000.jpg?hmac=aHjb0fRa1t14DTIEBcoC12c5rAXOSwnVlaA5ujxPQ0I').then(()=>{
// console.log('image loaded 2')
// })





