function getAllWishlists(request, response) {
  response.send("BUSCANDO TODAS AS WISHLISTS");
}

function getWishlistById(request, response) {
  response.send("BUSCANDO WISHLIST POR ID" + request.params.id);
}

function createWishlist(request, response) {
  console.log(request.body);
  response.send("VOU CRIAR A SUA WISHLIST");
}

module.exports = {
  getAllWishlists: getAllWishlists,
  getWishlistById: getWishlistById,
  createWishlist: createWishlist
};
