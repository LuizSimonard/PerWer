import express from `express`
import dotenv from `dotenv`
import customizationRouter from `./routes/customization.js`
import threadsRouter from `./routes/threads.js`
import userRouter from `./routes/user.js`

dotenv.config(); 

const port = process.env.PORT || 7000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(`/api/products`, customizationRouter)
app.use(`/api/orders`, threadsRouter)
app.use(`/api/users`, userRouter)


app.listen(port, () => console.log(`Server listening on ${port}`));