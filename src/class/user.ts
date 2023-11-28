import UserDB from "../dbClass/dbUser";
export default class User {
  public static registrarUsuario: any = async () => {
    try {
      UserDB.create({});
      return {
        code: 200,
        status: "success",
      };
    } catch (err: any) {
      console.log(err.message);
    }
  };
  public static obtenerUsuarios: any = async () => {
    try {
      let resUsuarios = await UserDB.findAll();
      return {
        code: 200,
        status: "success",
        usuarios: resUsuarios,
      };
    } catch (err: any) {
      console.log(err.message);
      return {
        code: 401,
        status: "error",
        msj: "No se pudio obtener transacciones",
      };
    }
  };
  public static obtenerInformacion: any = async (userId: any) => {
    try {
      return {
        code: 200,
        status: "success",
      };
    } catch (err: any) {
      console.log(err.message);
    }
  };
  public static borrarUsuario: any = async (userId: any) => {
    try {
      return {
        code: 200,
        status: "success",
      };
    } catch (err: any) {
      console.log(err.message);
    }
  };
  public static modificarCuenta: any = async (userId: any) => {
    let id = userId;
    try {
      return {
        code: 200,
        status: "success",
      };
    } catch (err: any) {
      console.log(err.message);
    }
  }; //modifica cantidad de dinero o rol usuario
}
