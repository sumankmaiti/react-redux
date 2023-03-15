const redux = require('redux')
const produce = require('immer').produce
const applyMiddleware = redux.applyMiddleware
const logger = require('redux-logger')
const log = logger.createLogger()

const createStore = redux.createStore

const UPDATE_ADDRESS = 'UPDATE_ADDRESS'

function updateAddress(address = 'Not Available') {
	return {
		type : UPDATE_ADDRESS,
		payload : address
	}
}

const initialDetails = {
	name : 'suman', 
	address : {
		city : 'kolkata',
		st : 'wb'
	}
}


const reducer = (state = initialDetails, action) => {
	switch(action.type) {
		case UPDATE_ADDRESS: 
		// 	return {
		// 		...state, address : {
		// 			... state.address, st : action.payload
		// 	}
		// }

		return produce(state, (draft) => {
			draft.address.st = action.payload
		})

		default: return state
	}
}

const store = createStore(reducer, applyMiddleware(log))
// console.log('Initial State', store.getState());
const unsubscribe = store.subscribe(() => {})
store.dispatch(updateAddress())
store.dispatch(updateAddress('delhi'))
unsubscribe()