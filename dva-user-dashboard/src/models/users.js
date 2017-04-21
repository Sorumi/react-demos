import * as usersService from '../services/users';

export default {
  namespace: 'users',
  state: {
    list: [],
    total: null,
    page: null,
  },
  reducers: {
    save(state, { payload: { list, total, page } }) {
      return {...state, list, total, page};
    },
  },
  effects: {
    *fetch({ payload: { page = 1 } }, { call, put }) {
      const { data, headers } = yield call(usersService.fetch, {page});
      yield put({
        type: 'save',
        payload: {
          list: data.result,
          //data,
          total: data.totalCount,
          page: data.pageNo,
        },
      });
    },
    *create({ payload: user , onComplete}, { call, put }) {
      yield call(usersService.create, user);
      onComplete();
      yield put({type: 'reload'});
    },
    *remove({ payload: id }, { call, put }) {
      yield call(usersService.remove, id);
      yield put({type: 'reload'});
    },
    //*patch({ payload: user , onComplete}, { call, put }) {
    //  yield call(usersService.patch(), user);
    //  onComplete();
    //  yield put({type: 'reload'});
    //},
    *patch({ payload: { id, values }, onComplete }, { call, put }) {
      yield call(usersService.patch, id, values);
      onComplete();
      yield put({ type: 'reload' });
    },

    *reload(action, { put, select }) {
      const page = yield select(state => state.users.page);
      yield put({type: 'fetch', payload: {page}});
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        if (pathname === '/users') {
          //console.log(query);
          dispatch({type: 'fetch', payload: query});
        }
      });
    },
  },
};
