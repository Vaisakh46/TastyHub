

const Contact =() => {
    return (
        <div className="flex">
            <div className="text-center border w-72 mx-10 my-6 p-4 shadow-lg rounded-2xl bg-orange-200 shadow-slate-600">
            <h1 className="font-bold text-3xl mx-4 py-4">Contact Us</h1>
            <form>
                <input type="text" placeholder="Enter Your Name" className="border border-black p-2 m-2 rounded-lg"></input><br></br>
                <input type="email" placeholder="Enter Your Email" className="border border-black p-2 m-2 rounded-lg"></input><br></br>
                <textarea placeholder="Enter Your Message" className="border border-black p-2 m-2 rounded-lg"></textarea>
                <button className="rounded-xl px-4 py-2 m-2 font-bold bg-green-400 ">Send</button>
            </form>
            </div>    

            <div className="m-6">
                <div>
                <h2 className="text-2xl text-orange-500">Get in Touch</h2>
                <p className="mt-4">
                    We'd love to hear from you! Whether you have questions, feedback, or just want to say hello, feel free
                    to reach out.
                </p>

                <h2 className="text-2xl text-orange-500 mt-4" >Visit Us</h2>
                <p className="mt-4">
                TastyHub Headquarters<br></br>
                    123 Main Street<br></br>
                    Cityville, State 12345<br></br>
                    United States
                </p>

                <p className="mt-8 py-4 text-center font-bold">Thank you for choosing TastyHub. We're here to make your dining experience extraordinary!
                <br></br> Bon Appétit! - The TastyHub Team</p>
                
                </div>
                
            </div>
        </div>
        
    );
}

export default Contact;