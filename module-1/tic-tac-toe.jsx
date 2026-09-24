function square({value}){
    return <button className="bg-white border other-css add ">{value}</button>
}


export default  function Board(){
    return(
        <>
           <div>
            <square value="1"/>
            <square value="2"/>
            <square value="3"/>
   
           </div>
        
           <div>
            <square value=""/>
            <square value=""/>
            <square value=""/>
   
           </div>
        
           <div>
            <square value=""/>
            <square value=""/>
            <square value=""/>
   
           </div>
        
        </>
    )
}