    function loginUser(username) {
        return new Promise((resolve => setTimeout(() => resolve(`token_for_${username}`), 1000)));
    }

    function getUserData(token) {
        return new Promise((resolve => setTimeout(() => resolve({ id: 101, role: "Admin"}), 1000)));
    }

loginUser("john_doe")
    .then(token => getUserData(token))
    .then(userData => console.log(`User Data:`, userData))
    .catch(error => console.error(`Error: ${error}`));

async function handleUserSession(){
    try {
        const token = await loginUser("john_doe");
        const userData = await getUserData(token);
        console.log(`User Data:`, userData);
    } catch (error) {
        console.error(`Error: ${error}`);
    }  
}

handleUserSession();