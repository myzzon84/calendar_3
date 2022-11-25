import './month.scss';
import DayTitle from '../dayTitle/dayTitle';
import DayTitleWeekend from '../dayTitleWeekend/dayTitleWeekend';
import DayNumber from '../dayNumber/dayNumber';
import DayNumberWeekend from '../dayNumberWeekend/dayNumberWeekend';

const Month = ({ month, keyGen, year, setMonth, num, markDayWithNote, currentDayNumber }) => {
    const noSelection = (e) => {
        e.preventDefault();
    }

    const daysTitle = [];
    const title = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Нд']

    for (let i = 0; i < 7; i++) {
        if (i < 5) {
            daysTitle.push(
                <DayTitle key={keyGen()} title={title[i]} />
            );
        } else {
            daysTitle.push(
                <DayTitleWeekend key={keyGen()} title={title[i]} />
            );
        }
    }
    const daysNumber = [];
    let number = 1;

    const countDaysInMonth = () => {
        let countDaysInMonth;
        if (month === 12) {
            countDaysInMonth = Math.round((new Date(`${month - 11}-01-${year + 1}`)
                - new Date(`${month}-01-${year}`)) / 1000 / 3600 / 24);
        } else {
            countDaysInMonth = Math.round((new Date(`${month + 1}-01-${year}`)
                - new Date(`${month}-01-${year}`)) / 1000 / 3600 / 24);
        }

        return countDaysInMonth;
    }

    const positionFirstDay = () => {
        let positionFirstDay = new Date(`${month}-01-${year}`).getDay();
        if (positionFirstDay === 0) {
            return 7;
        } else {
            return positionFirstDay;
        }
    }

    let numberInWeek = 1;
    let check = false;
    let styleDayNumber = 'wrapperDayNumber';
    let styleDayNumberWeekend = "wrapperDayNumberWeekend";
    for (let i = 1; i < 43; i++) {
        if (positionFirstDay() > i) {
            number = '';
            styleDayNumber += " opacity";
            styleDayNumberWeekend = "wrapperDayNumberWeekend opacity";
        }
        if (numberInWeek === 8) {
            numberInWeek = 1;
        }
        if (numberInWeek < 6) {

            let temp = styleDayNumber;
            let tempArr = markDayWithNote();
            for (let i = 0; i < tempArr.length; i++) {
                if (number === tempArr[i]) {
                    styleDayNumber += ' selectedNoteDay';
                    tempArr[i] = '';
                    break;
                }
            }
            if (Number(num) === i) {
                styleDayNumber += ' selectedDay';
            }
            let temp1 = styleDayNumber;
            if(number === currentDayNumber && new Date().getMonth() + 1 === month){
                styleDayNumber += ' currentDayNumber';
            }
            daysNumber.push(
                <DayNumber
                    key={keyGen()}
                    number={number}
                    numberInWeek={numberInWeek}
                    numberAll={i}
                    styleDayNumber={styleDayNumber}
                />
            );
            styleDayNumber = temp;
            styleDayNumber = temp1;
        } else {
            if (Number(num) === i) {
                styleDayNumberWeekend += ' selectedDayWeekend';
            }
            let temp = styleDayNumberWeekend;
            let tempArr = markDayWithNote();
            for (let i = 0; i < tempArr.length; i++) {
                if (number === tempArr[i]) {
                    styleDayNumberWeekend += ' selectedNoteDay';
                    tempArr[i] = '';
                    break;
                }
            }
            let temp1 = styleDayNumberWeekend;
            if(number === currentDayNumber && new Date().getMonth() + 1 === month){
                styleDayNumberWeekend += ' currentDayNumberWeekend';
            }
            daysNumber.push(
                <DayNumberWeekend
                    key={keyGen()}
                    number={number}
                    numberInWeek={numberInWeek}
                    numberAll={i}
                    styleDayNumberWeekend={styleDayNumberWeekend}
                />
            );
            styleDayNumberWeekend = temp1;
            styleDayNumberWeekend = temp;
            
        }
        styleDayNumber = 'wrapperDayNumber opacity';
        numberInWeek++;
        if (number === countDaysInMonth()) {
            check = true;
            number = '';
            styleDayNumber += " opacity";
            styleDayNumberWeekend = "wrapperDayNumberWeekend opacity";
        }
        if (check === false) {
            number++;
            styleDayNumber = 'wrapperDayNumber';
            styleDayNumberWeekend = "wrapperDayNumberWeekend";
        }
    }

    return (
        <div className="wrapperMonth">
            <div className="controls" onMouseDown={noSelection}>
                <div className="prev" onClick={setMonth}>

                </div>
                <h2 className="month">
                    {new Date(String(month)).toLocaleString('uk-UA', { month: 'long' })}
                </h2>
                <div className="next" onClick={setMonth}>

                </div>
            </div>
            <div className="containerDaysTitle">
                {daysTitle}
            </div>
            <div className="containerDaysNumber">
                {daysNumber}
            </div>
        </div>
    );
}

export default Month;