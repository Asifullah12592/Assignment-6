
// import images from '../images/pic-1.png'




export function Content() {
    return (
        <div className="main">
            <div className="textarea">
                <h1>PROJECT <br /><span>Lorum</span></h1>
            </div>
            <div className="main-img">
                <img src="../images/pic-1.png" alt="image" />
                <button>WIEW PROJECT</button>

            </div>
        </div>
    )
}
export function Blog() {
    return (

        <div className="main-blog">
            <div className="box1">
                <div className='img2'><img src="../images/pic-2.png" alt="" /></div>
                <div className='img3'><img src="../images/pic-3.png" alt="pic3" /></div>
            </div>
            <div className="box2">
                <div className='img4'> <img src="../images/pic-4.png" alt="pic4" /></div>
                <div className="text-box2">
                    <h1>About</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    <button>Read More</button>
                </div>
            </div>

        </div>
    )
}

export function Blog2() {
    return (
        <div className="main-blog2">
            <h6>Main Focus/Mission Statement</h6>
            <div className="blog2Box">
                <div className="blog2Box-box1">
                    <div className="box1-1"><h1>1</h1></div>
                    <div className="box1-2"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur, lectus et facilisis placerat.</p></div>
                </div>
                <div className="blog2Box-box2">
                    <div className="box2-1"><h1>2</h1></div>
                    <div className="box2-2"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur, lectus et facilisis placerat, magna mauris porttitor tortor, a auctor est felis ut nisl.</p></div>
                </div>
            </div>
        </div>
    )
}


export function Blog3() {
    return (
        <div className="main-blog-3">
            <h1>Our Project</h1>
            <div className="blog3-box">
                <img src="../images/pic-5.jpeg" alt="" className='img1' />
                <img src="../images/pic-6.png" alt="" className='img2' />
                <img src="../images/pic-7.png" alt="" className='img3' />
                <img src="../images/pic-8.png" alt="" className='img4' />
                <img src="../images/pic-9.png" alt="" className='img5' />
            </div>
            <button><a href="https://github.com/Asifullah12592">All Project . . .</a></button>
        </div>
    )
}



// section blog-4 

export function Blog4() {
    return (
        <div className="main-blog-4">
            <h1>Contact Us</h1>
            <div className="blog4-box">
                <div className="form">
                    <form>
                        <input type="text" id="name" placeholder='Name' /><br />
                        <input type="number" name="" id="phoneNumber" placeholder='Phone Number' /><br />
                        <input type="email" name="" id="email" placeholder='Email' /><br />
                        <input type="text" id="intrust" placeholder='Intrusted In' /><br />
                        <textarea name="" id="textarea" placeholder='Massage'></textarea>
                    </form>
                </div>
                <div className="img"><img src="../images/pic-10.png" alt="" /></div>
            </div>
            <button>Send Email -- </button>
        </div>
    )
}

