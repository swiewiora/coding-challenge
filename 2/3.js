import cx from 'classnames';
import { Component } from 'react';

const initialState = {
    likeCounter: 100,
    liked: false
}

export default class LikeButton extends Component {
    state = initialState
    
    changeLike = () => {
        let newLikeCounter = this.state.likeCounter
        if (this.state.liked) this.setState({
            likeCounter: newLikeCounter - 1,
            liked: false, 
        })
        else {
            
            this.setState({
                likeCounter: newLikeCounter + 1,
                liked: true
            })
        }
    }
    
    render() {
        const buttonClass = cx("like-button", {liked: this.state.liked})
        return (
            <>
                <div>
                    <button className={buttonClass} onClick={this.changeLike}>Like | <span className="like-counter">{this.state.likeCounter}</span></button>
                </div>
                <style>{`
                    .like-button {
                        font-size: 1rem;
                        padding: 5px 10px;
                        color:  #585858;
                    }
                   .liked {
                        font-weight: bold;
                        color: #1565c0;
                   }
                `}</style>
            </>
        );
    }
}
