import React, {Component} from 'react'
import classes from './Drawer.css'
import Backdrop from "../../components/UI/Backdrop/Backdrop";


const Links = [
    1, 2, 3
]


class Drawer extends Component {

    renderLinks() {
        return Links.map((Link, index) => {
            return(
                <li key={index}>
                    <a> Link {Link}</a>
                </li>
            )
        })
    }

    render() {
        const cls = [classes.Drawer]

        if (!this.props.isOpen) {
            cls.push(classes.close)
        }

        return(
                <React.Fragment>
                    <nav className={cls.join(' ')}>
                        <ul>
                            {this.renderLinks() }
                        </ul>
                    </nav>
                    { this.props.isOpen ? <Backdrop  onClick={this.props.onClose}/> : null }
                    </React.Fragment>
        )
    }
}

export default Drawer
