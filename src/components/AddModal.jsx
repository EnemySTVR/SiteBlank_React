import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AddTaskMenu } from '@components/AddTaskMenu'
import { toggleAddModal } from '../BLL/actions/interface'
import CloseIcon from '@material-ui/icons/Close'


export const AddModal = () => {
    const dispatch = useDispatch()
    const [addedEntityType, setAddedEntityType] = useState()
    // это тут для того, чтобы в будущем добавлять не только таски, но и другие сущьности
    let addEntityMenu
    switch (addedEntityType) {
        case 'Task':
            addEntityMenu = <AddTaskMenu />
            break;
        default:
            addEntityMenu = <AddTaskMenu />
            break;
    }
    return (
        <div>
            {useSelector(state => state.showAddModal) &&
                <div className="AddModal">
                    <div className="AddModal__Body">
                        <div className="AddModal__CloseButton" onClick={() => dispatch(toggleAddModal(false))}>
                            <CloseIcon />
                        </div>
                        {addEntityMenu}
                    </div>
                </div>
            }
        </div>
    )
}