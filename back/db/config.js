const mongoose = require('mongoose');


mongoose.connect('mongodb+srv://gedo:Gedo12345.@nodered.hfjwp.mongodb.net/heroe?retryWrites=true&w=majority', {
    useNewUrlParser:true,
    useUnifiedTopology:true
})
    .then(db => console.log('conexion exitosa'))
    .catch(err => console.log(err));