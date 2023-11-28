import express from "express";
import Login from "../../class/login";

let router = express.Router();
router.post("/", async (req, res, next) => {
  try {
    let response = res.send(await Login.logear(req));
    return response;
  } catch (err: any) {
    console.log(err.message);
  }
});
export default router;
