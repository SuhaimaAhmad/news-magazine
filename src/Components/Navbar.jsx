export const Navbar = ({setCategory}) => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
    <div className="container-fluid">
        <a className="navbar-brand" href="#"><span className="badge bg-light text-dark fs-5" onClick={()=>setCategory("general")}>NewsMagazine</span></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
        
            <li className="nav-item">
                <a className="nav-link" onClick={()=>setCategory("business")} href="#">Business</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" onClick={()=>setCategory("sports")} href="#">Sports</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" onClick={()=>setCategory("technology")} href="#">Technology</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" onClick={()=>setCategory("entertainment")} href="#">Entertainment</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" onClick={()=>setCategory("health")} href="#">Health</a>
            </li>
            
        </ul>
        </div>
    </div>
    </nav>
  )
}

export default Navbar