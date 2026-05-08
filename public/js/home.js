const user = JSON.parse(localStorage.getItem('userDate'));

console.log(user)

const userName = document.querySelector('#userName')

if (userName) {
    userName.textContent = user.name;
}

const userAge = document.querySelector('#userAge');
console.log(userAge)
if (userAge) {
    userAge.textContent = userAge.age;
}
for (const user of userAge) {}