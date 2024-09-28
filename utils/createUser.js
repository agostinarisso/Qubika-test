const {request} = require('playwright');

async function createUser() {
    const apiContext = await request.newContext();
    const response = await apiContext.post('https://api.club-administration.qa.qubika.com/api/auth/register', {
        data: {
            email: "randomusernew" + Math.floor(Math.random()*1000) + "@qubika.com",
            password: "Test1234",
            roles: ["ROLE_ADMIN"]
        }
});

//Errors handling
if (response.status() !== 201) {
    console.error('Failed to create user', response.status());
}
//Return the user
const userData = await response.json();
console.log(userData);
return userData;
}
module.exports = {createUser};