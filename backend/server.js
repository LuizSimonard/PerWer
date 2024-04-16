import express from `express`
import dotenv from `dotenv`
import customizationRouter from `./routes/customization.js`
import threadsRouter from `./routes/threads.js`
import userRouter from `./routes/user.js`
import interactionsRouter from `./routes/interactions.js`
import connectDB from `./connect/database.js`

dotenv.config(); 

connectDB();
const port = process.env.PORT || 7000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(`/api/customization`, customizationRouter)
app.use(`/api/threads`, threadsRouter)
app.use(`/api/users`, userRouter)
app.use(`/api/users`, interactionsRouter)


app.listen(port, () => console.log(`Server listening on ${port}`));