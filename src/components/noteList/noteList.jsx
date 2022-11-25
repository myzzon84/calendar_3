import './noteList.scss';

const NoteList = ({ data, year, month, keyGen }) => {
        let noteList = [];
        data.forEach((item) => {
            let arr = item.date.match(/\d+/g);
            if(Number(arr[1]) === month && Number(arr[2]) === year){
                noteList.push(
                    <div className="wrapperNote" key={keyGen()}>
                        <div className="date">
                            {item.date}
                        </div>
                        <div className="text">
                            {item.text}
                        </div>
                    </div>
                );
            }
        });
        return (
            <div className="wrapperNoteList">
                {noteList}
            </div>
        );
    }


export default NoteList;

// let arr = item.date.match(/\d+/g);