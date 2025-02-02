import profile from '../../assets/images/profile.png'
import './Header.css'
const Header = () => {
    return (
        <div>
            <header className={"header-container"} >
                <h1 className='text-2xl font bold'>Knowledege Cafe</h1>
                <img src={profile} alt="" />
                
            </header>
            <hr className='fixed-width'></hr>
            
        </div>
        
       
        
    );
    
};

export default Header;
