let input = document.querySelector('#input');
let result = document.querySelector('#result');

const urlRegex = new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/gi);

const usernameRegex = new RegExp(/{{@\w+\.?\w+}}/gi);


input.addEventListener('input', (e) => {
    const value = e.target.value;
    if (value) {
        result.innerText = pipe(linkFormatter,usernameFormatter)(value);
    }else{
		result.innerText = "";
	}
})

 
const linkFormatter = (str) => {
    return str.replace(urlRegex, (word) => {
        return `<a href="${word}" class="text-link">${word}</a>`
    })
}

const usernameFormatter = (str) => {
    return str.replace(usernameRegex, (word) => {
        return `<span class="text-user">${word.slice(3,word.length-2)}</span>`
    })
}

const pipe = (...fns) => (x) => fns.reduce((v, f) => f(v), x);


