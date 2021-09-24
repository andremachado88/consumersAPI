import express from 'express';
import routes from './Routers/UserRouter/UserRouter';


const app = express();
app.use(routes);
app.get('/', function (req, res) {
    res.send('Hello World');
})

app.listen(8000, function() {
    console.log('Example app listening on port 8000!');
})
