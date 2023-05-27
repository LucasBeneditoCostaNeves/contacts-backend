// import { compare } from "bcryptjs";
// import { Repository } from "typeorm";
// import { AppError } from "../errors";
// import { User } from "../entities/users.entity";
// import jwt from "jsonwebtoken";
// import { AppDataSource } from "../data-source";

// export async function createLoginService(request: any): Promise<string> {
//   const validate = createLoginSchemas.parse(request.body);

//   const repository: Repository<User> = AppDataSource.getRepository(User);

//   const array: Array<any> = await repository.find({
//     where: {
//       email: validate.email,
//     },
//   });
//   console.log(array[0].password);
//   console.log(validate.password);

//   if (array.length == 0) {
//     throw new AppError("Wrong email/password", 401);
//   }

//   const passwordVerify: boolean = await compare(
//     validate.password,
//     array[0].password
//   );

//   if (!passwordVerify) {
//     throw new AppError("Wrong email/password", 401);
//   }

//   const token = jwt.sign(
//     {
//       admin: array[0].admin,
//     },
//     process.env.SECRET_KEY!,
//     {
//       expiresIn: "24h",
//       subject: array[0].id.toString(),
//     }
//   );

//   return token;
// }
