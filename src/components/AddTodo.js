import React, { Component } from 'react'

export class AddTodo extends Component {

    state={
        title:''
    }

    onChange=(e)=> this.setState({ [e.target.name]:e.target.value });

    onSubmit=(e)=> {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title:''})
    }

    render() {
        return (
            <div style={{ borderWidth:'3px' }}>
            <form onSubmit={this.onSubmit} style={{ display:'flex',border:'1px',padding:'1px' }}>
                <input type='text' 
                name='title' 
                style={{flex:'10',padding :'5px'}} 
                placeholder='Add new todo'
                padding= '10px'
                className="task"
                value={this.state.title}
                onChange={this.onChange}
                />
                <input type='submit' value='Submit' className='btn' style={{flex:'1'}}/>
            </form>
            </div>
        )
    }
}

export default AddTodo
