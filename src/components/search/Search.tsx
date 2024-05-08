import './Search.css';
import Button from "../button/Button";
function Search(){
    return (
            <div className="search">
                <input type="text" placeholder="Search Product"/>
                <Button text='Search' className="w-2/12"/>
            </div>
    );
}
export default Search;