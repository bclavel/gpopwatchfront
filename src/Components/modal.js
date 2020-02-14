import React from 'react'

class Modal extends React.Component {

    state = {
        ...this.props
    }

    render() {
        return(
            <div className="popin" style={{display: this.props.isOpen ? 'block' : 'none'}}>
                <div className="popin__inner">
                    <span className="popin__close" onClick={this.props.closeModal}>
                        <img className="popin__icon" src="/images/close.png" alt="Close modal"/>
                    </span>
                    <div className="popin__content">
                        <h2 className="popin__title">Delete talent</h2>
                        <p className="popin__txt">Are you sure?</p>
                        <div className="popin__buttons">
                            <button className="popin__cancel" onClick={this.props.closeModal}>Cancel</button>
                            <button className="popin__btn" onClick={this.props.deleteTalent}>Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Modal