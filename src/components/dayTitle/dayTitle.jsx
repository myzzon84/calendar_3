import './dayTitle.scss';
import { Component } from 'react';

class DayTitle extends Component{
    constructor(props){
        super(props);
        this.state = {
            style: 'wrapperDayTitle'
        }
    }
    render(){
        let{style}=this.state
        return(
            <div className={style}>
                {this.props.title}
            </div>
        );
    }
}

export default DayTitle;