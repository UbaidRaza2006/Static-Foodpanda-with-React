import "../Comp/Firstdiv.css"
import image from '../Image/refresh-hero-home-pk.webp'

export default function Firstdiv(){
    return(
        <>
        <div className="maindiv">
            <div className="innerdiv1">
                <h1 className="h1firstdiv">It's the food and groceries you love, delivered</h1>
                <div className="inputdiv">
                    <input className="input" placeholder="Enter your Full Address"></input>
                    <div className="findfood">find food</div>
                    </div>
                </div>
            <div className="innerdiv2">
                <img className="img" src={image} />
            </div>
        </div>
        </>
    )
}