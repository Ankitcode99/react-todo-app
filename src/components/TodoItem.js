import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class TodoItem extends Component {

    getStyle=()=>
    {
        if(this.props.todo.completed)
        {
            return { backgroundColor:'#f3f3f3',
            padding:'10px',
            textDecoration:'line-through',
            borderBottom:'1px #000000 dashed'
            };
        }
        else{
            return { backgroundColor:'#FFFF91',borderBottom:'1px #000 dashed',padding:'10px',textDecoration:'none' }
        }
    }

   

    render() {
        return (
            <div style={ this.getStyle() }>
                <p>
                <input type='checkbox' onChange={this.props.workdone.bind(this,this.props.todo.id)}/>
                {' '}
                { this.props.todo.title }
                <button onClick={this.props.deltask.bind(this,this.props.todo.id)} style={btnStyle}>X</button>
                </p>
            </div>
        )
    }
}


//PropTypes
TodoItem.propTypes={
    todo:PropTypes.object.isRequired
}

// const itemStyle={
//     backgroundColor:'#21c3e9'
// }

const btnStyle = {
    background: '#ff0000',
    borderRadius:"40%",
    border:'none',
    float:'right',
    cursor:'pointer',
    fontFamily:'sans-serif'
}

export default TodoItem
