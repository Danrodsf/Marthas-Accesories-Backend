const router = require("express").Router();

//Importamos Routes definidas en views

const UserRouter = require("./views/UserRouter");
const AdminRouter = require("./views/AdminRouter");
const MessageRouter = require("./views/MessageRouter");
const OrderRouter = require("./views/OrderRouter");
const OrderDetailRouter = require("./views/OrderDetailRouter");
const WishlistRouter = require("./views/WishlistRouter");
const ProductRouter = require("./views/ProductRouter");

//Rutas
router.use("/user", UserRouter);
router.use("/admin", AdminRouter);
router.use("/message", MessageRouter);
router.use("/order", OrderRouter);
router.use("/orderDetail", OrderDetailRouter);
router.use("/wishlist", WishlistRouter);
router.use("/product", ProductRouter);

module.exports = router;
