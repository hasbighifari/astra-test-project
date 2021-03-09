import firebase from "../config/firebase"
import { serviceStart, serviceEnd } from '../actions/systemAction'
import store from '../store'
import * as Sentry from "@sentry/browser";

export const addTodoItem = (addTodo) => {
    return new Promise((resolve, reject) => {
        store.dispatch(serviceStart())
        const todoRef = firebase.database().ref("Todo")
        todoRef.push(addTodo, error => {
            if (error) {
                Sentry.configureScope(
                    scope => scope
                        .setUser({ "email": "hasbighifarial@gmail.com." })
                        .setLevel("Error")
                );
                reject(error)
                return Sentry.captureException(error);
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
        }, error => {
            Sentry.configureScope(
                scope => scope
                    .setUser({ "email": "hasbighifarial@gmail.com." })
                    .setLevel("Error")
            );
            reject(error)
            return Sentry.captureException(error);
        })
    })
}

export const deleteTodoItem = (todo) => {
    return new Promise((resolve, reject) => {
        store.dispatch(serviceStart())
        const todoRef = firebase.database().ref("Todo").child(todo.id);
        todoRef.remove().then(result => {
            store.dispatch(serviceEnd())
            resolve("remove success")
        })
            .catch(error => {
                Sentry.configureScope(
                    scope => scope
                        .setUser({ "email": "hasbighifarial@gmail.com." })
                        .setLevel("Error")
                );
                reject(error)
                return Sentry.captureException(error);
            })
    })
}

export const updateTodoItem = (todo) => {
    return new Promise((resolve, reject) => {
        store.dispatch(serviceStart())
        const todoRef = firebase.database().ref("Todo").child(todo.id);
        todoRef.update({ ...todo }).then(result => {
            store.dispatch(serviceEnd())
            resolve("update success")
        })
            .catch(error => {
                Sentry.configureScope(
                    scope => scope
                        .setUser({ "email": "hasbighifarial@gmail.com." })
                        .setLevel("Error")
                );
                reject(error)
                return Sentry.captureException(error);
            })
    })
}