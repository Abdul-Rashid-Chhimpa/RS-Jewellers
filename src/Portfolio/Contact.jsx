import './CSS/Contact.css'

const Contact=()=>{
    return(
<>
        <form>

            <label className="form-img">
              <img src="bg 9.jpg" alt="" />
            </label>

            <label className='form-data'>
                <span>Contact Form</span>
                <input type="text" placeholder="Name" />
                <input type="text" placeholder='Address' />
                <input type="email" placeholder="Email" />
                <textarea placeholder="Message"></textarea>
                <button>Submit</button>
            </label>

          </form>
          <footer>
            <span>Presented by <p>RS Jewellers </p> Since <p>2020 </p></span>
          </footer>
</>
    )
}

export default Contact