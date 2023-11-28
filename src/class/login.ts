import AccountDB from "../dbClass/dbUser";
import jwt from "jsonwebtoken";
export default class login {
  public static logear: any = async (req: any) => {
    try {
      const { username, password } = req.body;
      const user: any = await AccountDB.findOne({ where: { username } });
      if (!user || user.password !== password) {
        return {
          code: 401,
          status: "success",
          message: "Credenciales inválidas",
         
        };
      }
      const token = jwt.sign(
        { userId: user.id, username: user.username },
        process.env.SECRETOKEN,
        {
          expiresIn: "1h",
        }
      );
      return {
        code: 200,
        status: "success",
        token: token,
        user: user.dataValues,
      };
    } catch (err: any) {
      console.log(err.message);
    }
  };
}
