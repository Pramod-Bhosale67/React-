import "./Button.css";


function Button(props){
    const changeValueHandler = () =>{
        console.log("Hi, am i clicked");
    }
    return(
        <>  
            <button className="border-2 bg-slate-400 p-3 rounded-full" onClick={changeValueHandler}>Add Value: {props.children}</button>
        </>
    );
}

export default Button;