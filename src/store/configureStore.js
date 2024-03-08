import { configureStore } from '@reduxjs/toolkit';
import {createInjectorsEnhancer, forceReducerReload} from 'redux-injectors';
import createSagaMiddleware from 'redux-saga';


export function configureAppStore() {
  const reduxSagaMonitorOptions = {};
  const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions);
  const {run: runSaga} = sagaMiddleware;

  const middlewares = [sagaMiddleware];


  const enhancers = [
    createInjectorsEnhancer({
      createReducer,
      runSaga,
    }),
  ];

  const store = configureStore({
    reducer: createReducer(),
    middleware:[
      ...getDefaultMiddleware({ImmutableCheck: false}),
      ...middlewares,
    ],
    // devTools:

    enhancers,

  });


  if (module.hot){
    module.hot.accept('./reducers', ()=>{
      forceReducerReload(store)
    });
  }

  return store;
  
}