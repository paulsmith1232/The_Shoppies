export const getListState = store => store.list;

export const getListObject = store =>
  getListState(store) ? getListState(store).allIds : [];

export const getListById = (store, id) =>
  getListState(store) ? { ...getListState(store).byIds[id], id} : {};

export const getList = store =>
  getListObject(store).map(id => getListById(store, id));

