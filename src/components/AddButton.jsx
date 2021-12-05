import React from 'react'
import { toggleAddModal } from '@BLL/actions/interface'
import { useDispatch } from "react-redux"
import AddIcon from '@material-ui/icons/Add'

export const AddButton = () => {
    const dispatch = useDispatch()
    return (
        <div className="AddButton" 
            onClick={() => dispatch(toggleAddModal(true))}>
            <AddIcon fontSize="large"/>
        </div>
    )
}