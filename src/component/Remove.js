function Remove(props){
    return (
        <>
            <button className="border-2 bg-slate-400 p-3 rounded-full">Remove Value: {props.children}</button>
        </>
    );
}

export default Remove;