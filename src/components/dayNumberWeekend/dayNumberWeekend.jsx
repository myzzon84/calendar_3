import './dayNumberWeekend.scss';

const DayNumberWeekend = ({number, numberInWeek, numberAll, styleDayNumberWeekend}) => {
        return(
            <div className={styleDayNumberWeekend}
                 data-number-in-week={numberInWeek}
                 data-number-all={numberAll}
            >
                {number}
            </div>
        );
    }

export default DayNumberWeekend;