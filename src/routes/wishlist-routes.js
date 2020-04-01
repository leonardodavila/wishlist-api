const express = require("express");
const router = express.Router();

const WishlistController = require("../controllers/wishlist-controller");

router.get("/wishlist", WishlistController.getAllWishlists);

router.post("/wishlist", WishlistController.createWishlist);

router.get("/wishlist/:id", WishlistController.getWishlistById);

router.delete("/wishlist/:id", WishlistController.deleteWishlist);

router.put("/wishlist/:id", WishlistController.updateWishlist);

module.exports = router;
