import logo from './logo.png';

const Header = () => {
    return ( 
        <div className="row bg-warning">
            <div className="col-sm-4"> 
                <img className="img-thumbnail w-25" src={logo} alt="logo here"/></div>
            <div className="col-sm-8 mt-4">
                <h3>Making world a better place. Houses to Homes</h3>
                </div>
        </div>
     );
}
 
export default Header;