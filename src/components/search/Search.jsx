import './Search.css';
import Button from "../button/Button";
function Search(){
    return (
            <div className="search">
                <input type="text" placeholder="Search Product"/>
                <Button text='Search' />
            </div>
    );
}
export default Search;