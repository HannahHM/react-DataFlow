import React, {
    Component
} from 'react';
import './App.css';

class NoteSaved extends Component {
    constructor(props) {
        super(props);
        this.state = this.props.item;
    }

    getInputValue = (e) => {
        console.log(e.target.value);
        this.setState({
            content: e.target.value,
        })
    }

    editSaved() {
        let date = new Date();
        let newState = {
            content: this.state.content,
            date: date.toLocaleTimeString()
        };
        this.props.onChange(newState);
    }

    render() {
        const { item } = this.props;
        return (
            <div className="edit">
                <span className="title">ToDoList</span>
                <div className="add">
                    <input type="text" id="title" name="title" placeholder="添加ToDo" required="required" onChange={ this.getInputValue }/>
                    <a href="javascript:;" onClick={ () => { this.editSaved() } }>完成</a>
                </div>
            </div>
        );
    }
}

export default NoteSaved;