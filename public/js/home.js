const user = JSON.parse(localStorage.getItem('userDate'));

console.log(user)

const userInfo = document.querySelector('#user_info')

if (userInfo) {
    for (const [key, value] of Object.entries(user)) {
        const span = document.createElement('span');
        const br = document.createElement('br');

        span.innerHTML = `
    <strong style="color: #00B7FF">${key}:</strong>
    <strong>${value}</strong>
    `;

        userInfo.append(span);
        userInfo.append(br);
    }
}

