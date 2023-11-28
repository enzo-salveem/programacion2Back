import express from "express";
import Transactions from "../../class/transactions";

let router = express.Router();
router.post("/crearTransaccion", async (req:any, res, next) => {
  try {
    let destino = req.body.destino;
    let cantidad= req.body.cantidad;
    let origen= req.body.origen;
    let response = res.send(await Transactions.crearTransaccion(destino, cantidad,origen));
    return response;
  } catch (err: any) {
    console.log(err.message);
  }
});

router.get("/historialTransacciones", async (req, res, next) => {
  try {
    let response = res.send(await Transactions.obtenerHistorial());
    return response;
  } catch (err: any) {
    console.log(err.message);
  }
});

router.get("/Transacciones", async (req, res, next) => {
  try {
    const id = req.query.id;
    let response = res.send(await Transactions.obtenerTransacciones(id));
    return response;
  } catch (err: any) {
    console.log(err.message);
  }
});

export default router;
