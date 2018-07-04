import React, {
    Component
} from 'react';
import './App.css';
import NoteSaved from './noteSaved';

class Note extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: typeof localStorage.getItem('list') === 'string' ? JSON.parse(localStorage.getItem('list')) : []
        }
    }

    delNotes = (ele)=> {
        const { list } = this.state;
        list.map((item,idx) => {
            if (idx === ele) {
                list.splice(idx, 1);
            }
        })
        this.setState({
            list
        })
        window.localStorage.setItem('list', JSON.stringify(list));
    }

    handleChildChange = (newState)=> {
        if(newState){
            this.setState({
                list: newState
            })
        }
      }

    render() {
        const { list } = this.state;
        const listItem = list && list.length ? list.map((item, idx) => (
            <div key={idx} className="notes">
                <span className="content">{item.content}</span>
                <span className="date">{item.date}</span>
                <a href="javascript:;" className="del-note" onClick={ () => { this.delNotes(idx) } }>删除</a>
            </div>
        )) : '';
        return (
            <div className="note-item">
                <NoteSaved item={ this.state } onChange={ this.handleChildChange }/>
                {listItem}
            </div>
        );
    }
}

export default Note;