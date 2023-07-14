import troll from "../assets/troll-face.png"
function Header() {
    return (
        <div className="header-container">
            <div className="logo">
                <li><img id="logo-img" src={troll} alt="" /></li>
                <li id="logo-name">Meme Generator</li>
            </div>
            <div className="info">
                <li>React Course - Project 3</li>
            </div>
        </div>
    )
}
export default Header;