let nextTodoId = 0
export const addTodo = ((text) => {
	console.log('addTodo action')
	let addtodo = {
		type: 'ADD_TODO',
		id: nextTodoId++,
		text1: text,
		text: text
	}
	console.log(addtodo)
	return addtodo
})

export const setVisibilityFilter = (filter) => ({
	type: 'SET_VISIBILITY_FILTER',
	filter
})

export const toggleTodo = (id) => ({
	type: 'TOGGLE_TODO',
	id
})