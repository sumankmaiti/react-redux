const redux = require('redux')
const createStore = redux.createStore
const combineReducer = redux.combineReducers
const logger = require('redux-logger')
const logging = logger.createLogger()
const applyMiddleware = redux.applyMiddleware

const BUY_CAKE = 'BUY_CAKE'
const RESTORE_CAKE = 'RESTORE_CAKE' 

const BUY_ICE = 'BUY_ICE'
const RESTORE_ICE = 'RESTORE_ICE'

function buyCake(qty = 1) {
	return {
		type : BUY_CAKE,
		payload : qty
	}
}

function restoreCake(qty = 1) {
	return {
		type : RESTORE_CAKE,
		payload : qty
	}
}

function buyIce(qty = 1) {
	return {
		type : BUY_ICE,
		payload : qty
	}
}

function restoreIce(qty = 1) {
	return {
		type : RESTORE_ICE,
		payload : qty
	}
}

const initialCakes = {
	cakes: 10
}

const initialIce = {
	ice : 20
}

const cakeReducer = (state = initialCakes, action) => {
	switch(action.type) {
		case BUY_CAKE: return {
			...state, cakes: state.cakes - action.payload
		}

		case RESTORE_CAKE: return {
			...state, cakes : state.cakes + action.payload
		}
		
		default: return state
	}
}

const iceReducer = (state = initialIce, action) => {
	switch(action.type) {
		case BUY_ICE: return {
			...state, ice : state.ice - action.payload
		}

		case RESTORE_ICE: return {
			...state, ice : state.ice + action.payload
		}

		default: return state
	}
}

const rootReducer = combineReducer({
	cake : cakeReducer, 
	ice : iceReducer
})

const store = createStore(rootReducer, applyMiddleware(logging))
// console.log('Initial State', store.getState());

const unsubscribe = store.subscribe(() => {})

store.dispatch(buyCake())
store.dispatch(buyCake(3))
store.dispatch(restoreCake(2))

store.dispatch(buyIce())
store.dispatch(buyIce(5))
store.dispatch(restoreIce(3))
unsubscribe()