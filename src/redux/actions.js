export function addFavorites(favorite) {
  return {
    type: "ADD_FAVORITES",
    favorite,
  };
}
export function deleteFavorite(id) {
  return {
    type: "DELETE_FAVORITES",
    id,
  };
}
export function vaciarArray() {
  return {
    type: "VACIAR_ARRAY",
  };
}
export function filterCards(status) {
  return {
    type: "FILTER",
    payload: status,
  };
}
export function orderCards(id) {
  return {
    type: "ORDER",
    payload: id,
  };
}
