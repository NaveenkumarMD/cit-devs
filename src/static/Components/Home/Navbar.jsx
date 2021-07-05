import "../../../static/style.css"
import EventIcon from '@material-ui/icons/Event';
import LibraryAddCheckIcon from '@material-ui/icons/LibraryAddCheck';
import DeveloperModeIcon from '@material-ui/icons/DeveloperMode';
import ContactsIcon from '@material-ui/icons/Contacts';
function Navbar(){
    return(
        <div>
            <nav>
            <ul>
            <a href="#"><EventIcon /> Events</a>
            <a href="#"><LibraryAddCheckIcon /> Mission</a>
            <a href="#"><DeveloperModeIcon /> Developers</a>
            <a href="#"><ContactsIcon /> Contact</a>
            </ul>
            </nav>


            <nav className="mobile-nav">
            <ul>
            <a href="#"><EventIcon /></a>
            <a href="#"><LibraryAddCheckIcon/></a>
            <a href="#"><DeveloperModeIcon /></a>
            <a href="#"><ContactsIcon /></a>
            </ul>
            </nav>
        </div>
        
    );
}

export default Navbar;