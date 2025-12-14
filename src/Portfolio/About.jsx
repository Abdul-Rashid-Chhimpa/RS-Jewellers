import "./CSS/About.css"
const About=()=>{
    return(
        <>
       <div className="about-containor">
         
          <div className="about-nav">
            <span>About Me</span>
            <p>“What others think of me is none of my business.”</p>
          </div>

          <div className="about-details">
          <label className="label-img">
            <img src="men.webp" alt="" />
          </label>

          <label className="label-detail">
            <span>Name - <p>Abdul Rashid Chhimpa</p></span>
            <span>Address - <p> Mahi Gate, Loharpura, Nagaur.</p> </span>
            <span>Contact - <p>+91 8094344243</p></span>
            <span>Email - <p>arcchhimpa@gmail.com</p></span>
            <span className="icon">
                <img src="instagram.png" alt="" />
                <img src="facebook.png" alt="" />
                <img src="gmail.png" alt="" />
            </span>
          </label>
          </div>

      </div>
          <footer>
            <span>Presented by <p>RS Jewellers </p> Since <p>2020 </p></span>
          </footer>
        </>
    )
}
export default About;