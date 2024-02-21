import React,{useState,useEffect} from "react";
import '../styles/search.css';

const Search=()=>{

    const [user,userState]=useState([]);
    const[search,setSeatch]=useState("");

    const url="https://jsonplaceholder.typicode.com/users";


    const showData= async()=>{
        const response=await fetch(url);
        const  data=await response.json();
    };

    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSearch = () => {
        // Aquí puedes agregar la lógica para realizar la búsqueda con el término searchTerm
        console.log('Búsqueda realizada:', searchTerm);
    };
    return(
        <div className="container-search">
            <input
                type="text"
                placeholder="Buscar catalogo"
                value={searchTerm}
                onChange={handleInputChange}
            />
            <div className="actions">
                <button onClick={handleSearch}>
                    <span className="material-icons">search</span>
                </button>
            </div>
        </div>
    );
};
export default Search;