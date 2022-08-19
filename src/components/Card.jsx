const Card = (props) => {
    return (
    <div>
        <h1> {props.title} </h1>
        <img src={props.url} alt="foto de perrito en adopción" />
        <h3> {props.description} </h3>
    </div>    
    )    
    };
    export default Card;