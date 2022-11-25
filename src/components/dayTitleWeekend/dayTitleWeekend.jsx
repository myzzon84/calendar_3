import './dayTitleWeekend.scss';
import { Component } from 'react';

class DayTitleWeekend extends Component{
    constructor(props){
        super(props);
        this.state = {
            style: 'wrapperDayTitleWeekend'
        }
    }
    render(){
        let {style} = this.state;
        return(
            <div className={style}>
                {this.props.title}
            </div>
        );
    }
}

export default DayTitleWeekend;