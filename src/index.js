import './index.sass'
import React from 'react'
import ReactDOM from 'react-dom'
import { TaskList } from '@components/TaskList'
import { AddButton } from '@components/AddButton'
import { AddModal } from '@components/AddModal'
import { createStore } from 'redux'
import { Provider, useSelector } from 'react-redux'
import { reducer } from '@BLL/reducer'
import { composeWithDevTools } from 'redux-devtools-extension'

const store = createStore(reducer, composeWithDevTools());

const App = () => {
    return (
        <div className="container">
            <TaskList />
            <AddButton />
            <AddModal />
        </div>
    )
}

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));