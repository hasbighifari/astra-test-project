import React, { useEffect, useState } from 'react'
import Appbar from '../../components/Appbar/index'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'
import Todo from '../../components/Todo/index'
import Dialog from '../../components/Dialog/index'
import styles from './styles'
import Loader from '../../components/Loader/index'
import { addTodoItem, getTodoItem, deleteTodoItem, updateTodoItem } from '../../service/firebaseService'
import { connect } from 'react-redux'

const mapStateToProps = state => ({
    system: state.system
})

const mapDispatchToProps = dispatch => ({
    
})


const Dashboard = ({ ...props }) => {
    const { classes, system } = props
    const [todos, setTodos] = useState([]);
    const [todo, setTodo] = useState({})
    const getTodos = () => {
        getTodoItem().then(result=>{
            setTodos(result)
        })
    }
    useEffect(getTodos, [])
    const [state, setState] = useState({
        openAdd: false,
        openEdit: false
    })
    const filters = ['all', 'done', 'undone',]
    const handleOpenDialog = (type, open, item) => {
        if (type === 'add') {
            setState({
                ...state,
                openAdd: open
            })
        }
        else {
            setState({
                ...state,
                openEdit: open
            })
            setTodo({
                ...todo,
                id: item.id,
                todoItem: item.todoItem
            })
        }
    }
    const handleCloseDialog = (open) => {
        setState({
            ...state,
            openAdd: open,
            openEdit: open,
        })
    }
    const handleChange = id => e => {
        setTodo({
            ...todo,
            [id]: e.target.value
        })
    }
    const handleAddTodoItem = async () => {
        await addTodoItem({ ...todo })
        const result = await getTodoItem()
        setTodos(result)
        setTodo({})
        setState({
            ...state,
            openAdd: false
        })
    }

    const handleDeleteTodoItem = async (item) => {
        await deleteTodoItem(item)
        const result = await getTodoItem()
        setTodos(result)
        setTodo({})
    }

    const handleEditTodoItem = async (type, item) => {
        if (type === 'complete') {
            await updateTodoItem({ todoItem: item.todoItem, isDone: true, id: item.id })
            const result = await getTodoItem()
            setTodos(result)
            setTodo({ isCompleted: true })
            setState({
                ...state,
                openEdit: false
            })
        }
        else {
            await updateTodoItem({ todoItem: todo.todoItem, id: todo.id })
            const result = await getTodoItem()
            setTodos(result)
            setState({
                ...state,
                openEdit: false
            })
        }
    }
    return (
        <div>
            <Dialog open={state.openAdd} title={'Add todo item'} buttonTitle='Add Item' handleClose={handleCloseDialog} handleSubmit={handleAddTodoItem}>
                <TextField label='Todo Item' fullWidth onChange={handleChange('todoItem')} />
            </Dialog>
            <Dialog open={state.openEdit} title={'Edit todo item'} buttonTitle='Edit Item'
                handleClose={handleCloseDialog} handleSubmit={handleEditTodoItem} >
                <TextField label='Todo Item' fullWidth value={todo.todoItem} onChange={handleChange('todoItem')} />
            </Dialog>
            <Appbar name={'Todo List'} />
            {system.serviceStart ? <Loader /> : ''}
            <Grid container className={classes.root1}>
                <Grid item lg={12} style={{ marginTop: 20 }}>
                    <div className={classes.todoList}>
                        {todos.map((item, index) => (
                            <Todo key={index} text={item.todoItem} updateTodo={() => handleOpenDialog('edit', true, item)}
                                deleteTodo={() => handleDeleteTodoItem(item)} completeTodo={() => handleEditTodoItem('complete', item)} isCompleted={item.isDone} />
                        ))}
                    </div>
                </Grid>
                <Grid container style={{ paddingTop: 20 }} >
                    <Button variant='contained' color='primary' onClick={() => handleOpenDialog('add', true)}>Add Todo Item</Button>
                </Grid>
            </Grid>
        </div >
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Dashboard))
