import './CSS/ViewDetails.css';



const ViewDetails=({data})=>{

   console.log(data?.img)
  const a=JSON.parse(localStorage.getItem("ViewDetail"))
  console.log(a)

    return(
        <>
        <div className="view-containor">
         <div className="features">
            <span className='key-highlight'>Key Highlights</span>

            <label>Ring Size <span>{a.size || "Not Adustable"}</span></label>
            <label>Plating <span>{a.plating || "Gold"}</span></label>
            <label>Type <span>{a.type || "Gold"} </span></label>
            <label>Color <span>{a.name || "Gold"}</span></label>

         </div>
         <div className="full-img">
            <img src={a.img || 'minakri 3.webp'} alt="" />
         </div>
        </div>
        
        </>
    )
}
export default ViewDetails;