export default function CardHeader( {cardTitle, cardBtnTxt}:{cardTitle:string, cardBtnTxt:string} ){
    return (
        <div className="card-header">
            <h2>{cardTitle}</h2>
            <button className="bg-primary btn"> Add {cardBtnTxt}</button>
        </div>

    )
}