import './app.scss';
import { Component } from 'react';
import Year from '../year/year';
import Month from '../month/month';
import AddNoteForm from '../addNoteForm/addNoteForm';
import NoteList from '../noteList/noteList';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            year: new Date().getFullYear(),
            month: new Date().getMonth() + 1,
            showNoteForm: "wrapperAddNoteForm displayNone",
            selectedDayStyle: '',
            num: '',
            dayNumber: 0,
            noteText: '',
            data: [
                {date: "12-11-2022", text: "Тестова замітка в 'базі даних'"}
            ],
            currentDayNumber: new Date().getDate()
        }
    }

    keyGen = () => {
        let chars = '0,1,2,3,4,5,6,7,8,9,q,w,e,r,t,y,u,i,o,p,a,s,d,f,g,h,j,k,l,z,x,c,v,b,n,m'.split(',');
        let key = '';
        for (let i = 0; i < 10; i++) {
            key += chars[Math.floor(Math.random() * chars.length)]
        }
        return key;
    }

    setYear = (e) => {
        if (e.target.className.includes('prev')) {
            this.setState({
                year: this.state.year - 1
            })
        }
        if (e.target.className.includes('next')) {
            this.setState({
                year: this.state.year + 1
            })
        }
    }

    setMonth = (e) => {
        let { year, month } = this.state;
        this.setState({
            dayNumber: e.target.innerHTML
        })

        if (e.target.className.includes('prev')) {
            if (month > 1) {
                this.setState({
                    month: month - 1
                })
            } else {
                this.setState({
                    month: month + 11,
                    year: year - 1
                })
            }
        }
        if (e.target.className.includes('next')) {
            if (month < 12) {
                this.setState({
                    month: month + 1
                })
            } else {
                this.setState({
                    month: month - 11,
                    year: year + 1

                })
            }
        }
    }

    showForm = (e) => {
        if (e.target.className.includes('wrapperDayNumber')
            && !e.target.className.includes('opacity')) {
            this.setState({
                showNoteForm: "wrapperAddNoteForm",
                num: e.target.dataset.numberAll,
                dayNumber: e.target.innerHTML
            });
        } else {
            this.setState({
                num: 0
            })
        }
    }

    closeForm = () => {
        this.setState({
            showNoteForm: "wrapperAddNoteForm displayNone",
            noteText: ''
        })
    }

    textNote = (e) => {
        this.setState({
            noteText: e.target.value
        })
    }

    addNote = () => {
        let {dayNumber, month, year, noteText, data} = this.state;
        if(noteText === ''){
            return;
        }
        this.setState(() => {
            let tempData = JSON.parse(JSON.stringify(data));
            tempData.push({
                date: `${this.getZero(dayNumber)}-${this.getZero(month)}-${this.getZero(year)}`,
                text: noteText
            })
            return {data: tempData, noteText: ''};
        })
    }

    markDayWithNote = () => {
        let day = [];
        let {year, month, data} = this.state;
        data.forEach((item) => {
            let arr = item.date.match(/\d+/g);
            if(Number(arr[1]) === month && Number(arr[2]) === year){
                day.push(Number(arr[0]));
            }
        })
        return day.sort((a, b) => {
            if(a > b){return 1};
            if(a < b){return -1};
            return 0;
        });
    }

    getZero = (num) => {
        if (num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    }

    render() {
        const {
            data,
            year,
            month,
            showNoteForm,
            num,
            dayNumber,
            noteText,
            currentDayNumber

        } = this.state;

        return (
            <div className="wrapperApp" onClick={this.showForm}>
                <Year
                    year={year}
                    setYear={this.setYear}
                >

                </Year>
                <Month
                    data={data}
                    month={month}
                    setMonth={this.setMonth}
                    keyGen={this.keyGen}
                    year={year}
                    showForm={this.showForm}
                    num={num}
                    dayNumber={dayNumber}
                    markDayWithNote={this.markDayWithNote}
                    currentDayNumber={currentDayNumber}
                >

                </Month>
                <AddNoteForm
                    showNoteForm={showNoteForm}
                    closeForm={this.closeForm}
                    year={year}
                    month={month}
                    dayNumber={dayNumber}
                    textNote={this.textNote}
                    noteText={noteText}
                    addNote={this.addNote}
                    getZero={this.getZero}
                >

                </AddNoteForm>
                <NoteList
                    data={data}
                    year={year}
                    month={month}
                    keyGen={this.keyGen}
                >

                </NoteList>
            </div>
        );
    }
}

export default App;