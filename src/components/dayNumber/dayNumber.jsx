import './dayNumber.scss';

const DayNumber = ({ number, numberInWeek, numberAll, styleDayNumber }) => {
    return (
        <div className={styleDayNumber}
            data-number-in-week={numberInWeek}
            data-number-all={numberAll}
        >
            {number}
        </div>
    );
}

export default DayNumber;