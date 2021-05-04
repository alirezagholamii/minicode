const userList = document.querySelector('#userList');
const pagination = document.querySelector('.pagination');
const loading = document.querySelector('.loading');


const onInit = () => {
	getUsers();
}

const getUsers = (param = 1) => {
	setLoading('add');
	fetchData(param)
		.then((res) => res.json())
		.then((res) => {
			showUsers(res.data);
			setPagination(res.total_pages, param);
			setLoading('remove');
		})
}

const showUsers = (users) => {
	userList.innerHTML = '';
	users.map((user) => {
		const tr = document.createElement('tr')
		tr.innerHTML = `
		<td>${user.id}</td>
		<td>${user.first_name}</td>
		<td>${user.last_name}</td>
		<td>${user.email}</td>
		<td><img src=" ${user.avatar}" /></td>`

		userList.appendChild(tr)
	})
}

const fetchData = (page) => {
	return fetch(`https://reqres.in/api/users?page=${page}`)
}


const setPagination = (total, current) => {
	pagination.innerHTML = '';
	let i = 1;
	while (i <= total) {
		const p = document.createElement('p')
		p.innerText = i;
		if (i === current) {
			p.classList.add('active')
		} else {
			p.addEventListener('click', changePage)
		}

		pagination.appendChild(p)
		i++
	}
}

const setLoading = (action = 'add') => {
	loading.classList[action]('show')
}

const changePage = (e) => {
	getUsers(+e.target.innerText)
}

onInit()


