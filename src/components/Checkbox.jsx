import React from 'react'
import DoneIcon from '@material-ui/icons/Done'

export const Checkbox = (props) => {
    return (
        <div className={'Checkbox ' + props.className}>
            <input type="checkbox"
                id={props.id}
                checked={props.checked}
                onChange={props.onChange} />
            <label htmlFor={props.id} className="Checkbox__Border">
                <DoneIcon />
            </label>
        </div>
    )
}



