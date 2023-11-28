import AccountDB from "../dbClass/dbAccount";
import TransactionsDB from "../dbClass/dbTransactions";

export default class Account {
  public static historialCuentas: any = async () => {
    try {
      let resCuentas = await AccountDB.findAll();
      return {
        code: 200,
        status: "success",
        cuentas: resCuentas,
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
  public static crearCuenta: any = async (
    nroCuenta:any, tipo:any, saldo:any
  ) => {
    try {
      await AccountDB.create({
        userId: nroCuenta,
        tipo: tipo,
        saldo: saldo,
      });
      return {
        code: 200,
        status: "success",
        msj: "cuenta creada",
      };
    } catch (err: any) {
      console.log(err.message);
      return {
        code: 401,
        status: "error",
        msj: "No se pudio crear cuenta",
      };
    }
  };

  public static Cuentas: any = async (userId: any) => {
    try {
      let resCuentas = await AccountDB.findAll({
        where: {
          userId: userId,
        },
      });
      return {
        code: 200,
        status: "success",
        cuentas: resCuentas,
      };
    } catch (err: any) {
      console.log(err.message);
      return {
        code: 401,
        status: "error",
        msj: "No se pudio obtener cuentas",
      };
    }
  };
}
