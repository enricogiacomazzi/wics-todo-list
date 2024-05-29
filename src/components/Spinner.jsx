import img from '../assets/ring.svg';


export default function Spinner() {
    return (
        <div className="row">
            <img className="spinner" src={img}/>
        </div>
    ) 
}