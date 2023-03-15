const redux = require('redux')
const thunk = require('redux-thunk').default
const axios = require('axios')
const logger = require('redux-logger')

const createStore = redux.createStore
const applyMiddleware = redux.applyMiddleware
const log = logger.createLogger()

const initialState = {
	loading: false,
	data: [],
	error: ''
}

const FETCH_REQUESTED = 'FETCH_REQUESTED'
const FETCH_SUCCESSFUL = 'FETCH_SUCCESSFUL'
const FETCH_FAILED = 'FETCH_FAILED'

const fetchRequested = () => {
	return {
		type: FETCH_REQUESTED
	}
}

const fetchSuccess = (data) => {
	return {
		type: FETCH_SUCCESSFUL,
		payload: data
	}
}

const fetchFailed = (msg) => {
	return {
		type: FETCH_FAILED,
		payload: msg
	}
}

const reducer = (state = initialState, action) => {
	switch(action.type) {
		case FETCH_REQUESTED: 
			return {
				...state, loading: true
			}

		case FETCH_SUCCESSFUL:
			return {
				...state, loading: false, data: action.payload
			}

		case FETCH_FAILED:
			return {
				...state, error: action.payload
			}
	}
}

const fetchUser = () => {
	return function (dispatch) {
		dispatch(fetchRequested())
		axios.get('https://jsonplaceholder.typicode.com/users')
		.then((response) => {
			const data = response.data.map((user) => user.id)
			dispatch(fetchSuccess(data))
		})
		.catch((response) => {
			dispatch(fetchFailed(response.message))
		})
	}
}

const store = createStore(reducer, applyMiddleware(thunk, log))
const unsubscribe = store.subscribe(() => {})
store.dispatch(fetchUser())
