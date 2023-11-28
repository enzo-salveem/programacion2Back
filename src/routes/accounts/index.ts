import express from "express";

import Account from "../../class/accounts";

let router = express.Router();
router.post("/crearCuenta", async (req: any, res, next) => {
  try {
    let nroCuenta = req.body.nroCuenta;
    let tipo = req.body.tipo;
    let saldo = req.body.saldo;
    let response = res.send(await Account.crearCuenta(nroCuenta, tipo, saldo));
    return response;
  } catch (err: any) {
    console.log(err.message);
  }
});

router.get("/historialCuentas", async (req, res, next) => {
  try {
    let response = res.send(await Account.historialCuentas());
    return response;
  } catch (err: any) {
    console.log(err.message);
  }
});

router.get("/BuscarCuenta", async (req, res, next) => {
  try {
    const userId = req.query.userId;
    let response = res.send(await Account.Cuentas(userId));
    return response;
  } catch (err: any) {
    console.log(err.message);
  }
});

export default router;
