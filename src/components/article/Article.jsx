import "./Article.css";
const imageLinks = ['https://media.istockphoto.com/id/1369150014/vector/breaking-news-with-world-map-background-vector.jpg?s=612x612&w=0&k=20&c=9pR2-nDBhb7cOvvZU_VdgkMmPJXrBQ4rB1AkTXxRIKM=', "https://www.shutterstock.com/image-vector/breaking-news-background-world-global-260nw-719766118.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL4fdhN05GkLF6pj6O7cM5d-d1AKremGI8UkSimKKkLQ&s", "https://media.gettyimages.com/id/1367702441/photo/breaking-news-logo-in-3d.jpg?s=612x612&w=gi&k=20&c=7yD5ivCZ_pTMjTIR1RV2R-puqiRze948ozE1WEC-eMM="];

function Article({ title, desc }){
    return (
        <div className="article-item">
            <div className="article-item--content">
                <div className="article-item--img">
                    <img
                        src={imageLinks[Math.floor(Math.random()*4)]}
                        alt={title }/>
                </div>
                <h3 className="article-item--title">{title}</h3>
                <div className="article-item--desc">{desc}</div>
            </div>
        </div>
    );
}

export default Article;