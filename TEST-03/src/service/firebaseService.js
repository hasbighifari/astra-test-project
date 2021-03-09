import firebase from "../config/firebase"
import { serviceStart, serviceEnd } from '../actions/systemAction'
import store from '../store'

export const addTodoItem = (addTodo) => {
    return new Promise((resolve, reject) => {
        store.dispatch(serviceStart())
        const todoRef = firebase.database().ref("Todo")
        todoRef.push(addTodo, error => {
            if (error) {
                reject(error)
            }
            else {
                store.dispatch(serviceEnd())
                resolve("Data succesfully save")
            }
        })
    })
}

export const getTodoItem = () => {
    return new Promise((resolve, reject) => {
        store.dispatch(serviceStart())
        const todoRef = firebase.database().ref("Todo");
        todoRef.once('value', (snapshot) => {
            const todos = snapshot.val();

            const todoList = [];
            for (let id in todos) {
                todoList.push({ id, ...todos[id] });
            }
            console.log(todoList)
            store.dispatch(serviceEnd())
            resolve(todoList)
        })
    })
}

export const deleteTodoItem = (todo) => {
    return new Promise((resolve, reject) => {
        store.dispatch(serviceStart())
        const todoRef = firebase.database().ref("Todo").child(todo.id);
        todoRef.remove()
        store.dispatch(serviceEnd())
        resolve("remove success")
    })
}

export const updateTodoItem = (todo) => {
    return new Promise((resolve, reject) => {
        store.dispatch(serviceStart())
        const todoRef = firebase.database().ref("Todo").child(todo.id);
        todoRef.update({ ...todo })
        store.dispatch(serviceEnd())
        resolve("update success")
    })
}