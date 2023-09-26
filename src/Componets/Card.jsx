import { useState } from "react";

function Card (props){
    let info = props.info ;
    const [readmore , setReadmore] = useState(false);

    const description =  readmore ? info : `${info.substring(0,100)}....`

   function readmoreHandler(){
    setReadmore(!readmore)
   
   }
   

    return(
        <div className="card">
            <img src={props.image} className="image" alt="" />
           <div className="tour-info">
           <div className="tour-detail">
                <h4 className="tour-price">₹{props.price}</h4>
                <h4 className="tour-name">{props.name}</h4>
            </div>
            <div>
                {description}
                <span className="read-more" onClick={readmoreHandler}>
                    {readmore ? `show less` : `read more`}
                </span>
            </div>
           </div>
            <button className="btn-red" onClick={()=> props.removeTour(props.id)}>
                Not Interested
            </button>
        </div>
    );
}

export default Card ;