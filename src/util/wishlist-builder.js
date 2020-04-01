function buildResponseWishlist(wishlist) {
  return {
    name: wishlist.name,
    owner: wishlist.owner,
    items: wishlist.items
  };
}

module.exports = {
  buildResponseWishlist: buildResponseWishlist
};
