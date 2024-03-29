document.getElementById('loginForm').addEventListener('submit', async function (e) {
    e.preventDefault();
    let formData = new FormData(this);
    let userData = {
        username: formData.get('username'),
        password: formData.get('password')
    };
    try {
        const response = await axios.post('/api/users', userData);
        console.log(response.data);
        alert('Successful registered')
    } catch (e) {
        console.error(`Error: ${e}`);
        alert(`Failed to register user`);
    }
})