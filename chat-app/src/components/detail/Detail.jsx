import "./detail.css"
const Detail = () => {
    return (
        <div className='detail'>
            <div className="user">
                <img src="./avatar.png" alt="" />
                <h2>lala fenet</h2>
                <p>Lorem ipsum dolor sit amet, </p>
            </div>
            <div className="info">
                <div className="option">
                    <div className="title">
                        <span>Chat Settings</span>
                        <img src="./arrowUp.png" alt="" />
                    </div>
                </div>

                <div className="option">
                    <div className="title">
                        <span>Privacy & help</span>
                        <img src="./arrowUp.png" alt="" />
                    </div>
                </div>

                <div className="option">
                    <div className="title">
                        <span>Shared photos</span>
                        <img src="./arrowDown.png" alt="" />
                    </div>
                    <div className="photos">
                        <div className="photoItem">
                            <div className="photoDetail">
                            <img src="https://th.bing.com/th/id/R.f564cc8589f68be4690adc7a35f36da0?rik=%2b3PPs5qdMVpHhg&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f03%2fSunset-wallpaper-desktop.jpg&ehk=9v%2b%2fyX708Qq6bSvK8rs5oqPPFk0wCOBUq%2fCpW6ELKcA%3d&risl=1&pid=ImgRaw&r=0" alt="" />
                            <span>Photo_2025_3.png</span>
                            </div>
                            
                            <img src="./download.png" alt="" className="icons" />
                        </div>

                        <div className="photoItem">
                            <div className="photoDetail">
                            <img src="https://th.bing.com/th/id/R.f564cc8589f68be4690adc7a35f36da0?rik=%2b3PPs5qdMVpHhg&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f03%2fSunset-wallpaper-desktop.jpg&ehk=9v%2b%2fyX708Qq6bSvK8rs5oqPPFk0wCOBUq%2fCpW6ELKcA%3d&risl=1&pid=ImgRaw&r=0" alt="" />
                            <span>Photo_2025_3.png</span>
                            </div>
                            
                            <img src="./download.png" alt="" className="icons" />
                        </div>      <div className="photoItem">
                            <div className="photoDetail">
                            <img src="https://th.bing.com/th/id/R.f564cc8589f68be4690adc7a35f36da0?rik=%2b3PPs5qdMVpHhg&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f03%2fSunset-wallpaper-desktop.jpg&ehk=9v%2b%2fyX708Qq6bSvK8rs5oqPPFk0wCOBUq%2fCpW6ELKcA%3d&risl=1&pid=ImgRaw&r=0" alt="" />
                            <span>Photo_2025_3.png</span>
                            </div>
                            
                            <img src="./download.png" alt="" className="icons" />
                        </div>      <div className="photoItem">
                            <div className="photoDetail">
                            <img src="https://th.bing.com/th/id/R.f564cc8589f68be4690adc7a35f36da0?rik=%2b3PPs5qdMVpHhg&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f03%2fSunset-wallpaper-desktop.jpg&ehk=9v%2b%2fyX708Qq6bSvK8rs5oqPPFk0wCOBUq%2fCpW6ELKcA%3d&risl=1&pid=ImgRaw&r=0" alt="" />
                            <span>Photo_2025_3.png</span>
                            </div>
                            
                            <img src="./download.png" alt="" className="icons" />
                        </div>
                        
                    </div>
                </div>

                <div className="option">
                    <div className="title">
                        <span>Shared Files</span>
                        <img src="./arrowUp.png" alt="" />
                    </div>
                </div>
                <button>Block User</button>
                <button className="logout">Logout</button>
            </div>
        </div>
    )
}
export default Detail