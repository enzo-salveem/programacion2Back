import express from "express";
import User from "../../class/user";

let router = express.Router();

router.post("/", async (req, res, next) => {
  let response = res.send(await User.registrarUsuario());
  return response;
});
router.get("/", async (req, res, next) => {
  let response = res.send(await User.obtenerUsuarios());
  return response;
});
router.get("/:id", async (req, res, next) => {
  const userId = req.params.id;
  let response = res.send(await User.obtenerInformacion(userId));
  return response;
});
router.delete("/:id", async (req, res, next) => {
  const userId = req.params.id;
  let response = res.send(await User.borrarUsuario(userId));
  return response;
});
router.put("/:id", async (req, res, next) => {
  const userId = req.params.id;
  let response = res.send(await User.modificarCuenta(userId));
  return response;
});

export default router;
