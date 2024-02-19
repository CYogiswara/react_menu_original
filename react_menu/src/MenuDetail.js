import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./UseFetch";

const MenuDetail = () => {

    const { id } = useParams()
    const {data: menu, isPending, error} = useFetch("http://localhost:3030/menus/" + id)
    const navigate = useNavigate()

    const handleClick = () => {
        fetch("http://localhost:3030/menus/" + menu.id, {
            method: "DELETE"
        }).then(() => {
            navigate("/")
        })
    }

    return ( 
        <div className="menu-detail">
            {isPending && <div>Loading...</div>}
            {error && <div>{ error }</div>}
            {menu && (
                <article>
                    <h1>{menu.title}</h1>
                    <h2>⭐{menu.rating}</h2>
                    <p>{menu.content}</p>
                    <button onClick={handleClick}>Delete</button>
                </article>
            )}
        </div>
     );
}
 
export default MenuDetail;