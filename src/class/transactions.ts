import AccountDB from "../dbClass/dbAccount";
import TransactionsDB from "../dbClass/dbTransactions";

export default class Transactions {
  public static obtenerHistorial: any = async () => {
    try {
      let resTransacciones = await TransactionsDB.findAll();
      return {
        code: 200,
        status: "success",
        transacciones: resTransacciones,
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
  public static crearTransaccion: any = async (
    destino: any,
    cantidad: any,
    origen: any
  ) => {
    try {
      let fecha = new Date();
      await TransactionsDB.create({
        origen: origen,
        destino: destino,
        cantidad: cantidad,
        fecha_realizada: fecha,
      });
      //aumenta el valor de la cuenta destino
      const cuentaDestino: any = await AccountDB.findOne({
        where: { id: destino },
      });
      if (cuentaDestino) {
        cuentaDestino.saldo += cantidad;
        await cuentaDestino.save();
      }
      //restar el valor de la cuenta origen
      const cuentaOrigen: any = await AccountDB.findOne({
        where: { id: origen },
      });
      if (cuentaOrigen) {
        cuentaOrigen.saldo -= cantidad;
        await cuentaOrigen.save();
      }
      return {
        code: 200,
        status: "success",
        msj: "Transaccion creada",
      };
    } catch (err: any) {
      console.log(err.message);
      return {
        code: 401,
        status: "error",
        msj: "No se pudio crear transacciones",
      };
    }
  };

  public static obtenerTransacciones: any = async (username: any) => {
    try {
      let buscar = username;
      let resTransacciones = await TransactionsDB.findAll({
        where: {
          origen: buscar,
        },
      });
      return {
        code: 200,
        status: "success",
        transacciones: resTransacciones,
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
}
