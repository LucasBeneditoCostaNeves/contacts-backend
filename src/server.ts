import app from "./app";
import { AppDataSource } from "./data-source";

AppDataSource.initialize()
  .then(() => {
    console.log("DataBase Connected");
    app.listen(3000, () => {
      console.log("Server is Running🚀");
    });
  })
  .catch((err: any) => {
    console.log(err);
  });
