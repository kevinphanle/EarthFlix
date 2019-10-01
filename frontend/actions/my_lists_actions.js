import * as myListAPIUtil from '../util/my_lists_api_util';

export const RECEIVE_MYLIST = "RECEIVE_MYLIST";
export const REMOVE_MYLIST = "REMOVE_MYLIST";

export const receiveMyList = myList => ({
  type: RECEIVE_MYLIST,
  myList
})

export const removeMyList = myListId => ({
  type: REMOVE_MYLIST,
  myListId
})

export const createMyList = myList => dispatch => (
  myListAPIUtil.createMyList(myList).then(myList => dispatch(receiveMyList(myList)))
)

export const deleteMyList = id => dispatch => (
  myListAPIUtil.deleteMyList(id).then(myList => dispatch(removeMyList(myList.id)))
)
