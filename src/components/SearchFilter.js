import { useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";


const SearchFilter = ({houses}) => {
    let myhouses = houses;
    let counties = Array.from(new Set(myhouses.map((elem) => 
    elem.county)));
    console.log(counties);

    let navigate = useNavigate();

    let changeHandler = (e) => {
        console.log("change handler" + e.target.value)
        let county = e.target.value;
        navigate(`searchresults/${county}`);
    }

    return ( 
        <div>
            <div className="row">
                <div className="col-sm-12">
                    Search By County: 
                        <select onChange={changeHandler}>
                            {
                                counties.map((elem)=> <option key={elem} value={elem}> {elem} </option>)
                            }
                        </select>   
                </div>
            </div>
        </div>
     );
}
 
export default SearchFilter;