import React, {
    Component
} from 'react';
import './App.css';
import NoteSaved from './noteSaved';

class Note extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: '',
            date: '',
            edit: false,
            del: false
        }
    }

    delNotes = ()=> {
        this.setState({
            del: false
        })
    }

    handleChildChange = (newState)=> {
        console.log(newState);
        if(newState){
            this.setState(newState);
            this.setState({
                del: true
            })
        }
      }

    render() {
        const { del, content, date } = this.state;
        return (
            <div className="note-item">
                <NoteSaved item={ this.state } onChange={ this.handleChildChange }/>
                <div className="notes" style={{ display: del ? 'flex' : 'none'} }>
                    <span className="content">{content}</span>
                    <span className="date">{date}</span>
                    <a href="javascript:;" className="del-note" onClick={ this.delNotes }>删除</a>
                </div>
            </div>
        );
    }
}

export default Note;