import './year.scss';

const Year = ({year, setYear}) => {
    return (
        <div className="wrapperYear">
            <div className="controls">
                <div className="prev" onClick={setYear}>

                </div>
                <h2 className="year">
                    {year}
                </h2>
                <div className="next" onClick={setYear}>

                </div>
            </div>
        </div>
    );
}

export default Year;