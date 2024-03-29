const express = require('express');
const mongoose = require('mongoose');
const PORT = 3000;

const app = express();
app.use(express.json());


mongoose.connect('mongodb+srv://root:sa43de23de324esSE@cluster0.ig8bwtq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => { console.log('Connected to MONGO DB') })


const User = mongoose.model('User', new mongoose.Schema({
    username: String,
    password: String
}))

app.post('/api/users', async (req, res) => {
    const { username, password } = req.body;
    const user = new User({ username, password });
    await user.save();
    res.send(user);
});

app.use(express.static('public'));
app.listen(PORT, () => { console.log(`Server work on port: ${PORT}`) });






