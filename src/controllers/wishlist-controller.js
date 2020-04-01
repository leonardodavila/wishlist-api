const Wishlist = require("../models/wishlist");
const wishlistBuilder = require("../util/wishlist-builder");

function getAllWishlists(request, response) {
  Wishlist.find({})
    .then(function(wishlists) {
      // const wishListsReponse = wishlists.map(wishlist =>
      //   wishlistBuilder.buildResponseWishlist(wishlist)
      // );

      response.status(200).send(wishlists);
    })
    .catch(function(err) {
      response.status(500).send({ message: "Ops! Ocorreu um erro" });
    });
}

function getWishlistById(request, response) {
  const id = request.params.id;

  Wishlist.findById(id)
    .then(function(data) {
      if (data === null) {
        response.status(404).send({
          message: `Não foi possível encontrar a wishlist com o id ${id}`
        });
      }
      const wishlistReponse = wishlistBuilder.buildResponseWishlist(data);
      response.send(wishlistReponse);
    })
    .catch(err => {
      console.log(err);
      response.status(500).send("Deu ruim");
    });
}

function createWishlist(request, response) {
  const wishlist = request.body;

  Wishlist.create(wishlist)
    .then(function(data) {
      console.log("Data", data);
      response
        .status(201)
        .send({ message: "Wishlist created", documentId: data._id });
    })
    .catch(function(err) {
      console.error(err);
      response
        .status(500)
        .send({ message: "Ops! Estamos com alguns problemas." });
    });
}

function deleteWishlist(request, response) {
  const wishlistId = request.params.id;

  Wishlist.findByIdAndDelete(wishlistId)
    .then(function(deletedWishlist) {
      console.log("APAGOU");
      response.status(200).send({
        message: `A wishlist com o id ${wishlistId} foi apagada`
      });
    })
    .catch(function(err) {
      console.error(err);
      response
        .status(500)
        .send({ message: "Ops! Estamos com alguns problemas." });
    });
}

function updateWishlist(request, response) {
  const wishlistId = request.params.id;

  Wishlist.findByIdAndUpdate(wishlistId, request.body)
    .then(function(updated) {
      console.log("Atualizou");
      response.status(200).send(updated);
    })
    .catch(function() {
      console.error(err);
      response
        .status(500)
        .send({ message: "Ops! Estamos com alguns problemas." });
    });
}

module.exports = {
  getAllWishlists: getAllWishlists,
  getWishlistById: getWishlistById,
  createWishlist: createWishlist,
  deleteWishlist: deleteWishlist,
  updateWishlist: updateWishlist
};
