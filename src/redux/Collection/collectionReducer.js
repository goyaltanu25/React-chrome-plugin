import {ADD_TO_COLLECTIONS} from './collectionType';

const state={
}

const collectionReducer = (state,action)=>{
    switch(action.type){
      case ADD_TO_COLLECTIONS: return{
          ...state,
          collection: state.collection.push('hello')
        }
      default: return state  
    }
}


export default collectionReducer;

