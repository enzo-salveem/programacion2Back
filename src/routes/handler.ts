import { Router } from "express";
import users from "./users/index";
import transactions from "./transactions/index";
import login from "./login/index";
import account from "./accounts/index"
const handler = (routes: Router) => {
  routes.use("/api/accounts", users);
  routes.use("/api/transactions", transactions);
  routes.use("/api/auth/login", login);
  routes.use("/api/cuentas", account);
};

export default handler;
