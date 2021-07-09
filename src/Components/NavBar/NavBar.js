import React from 'react';
import "./NavBar.css";
import IconButton from '@material-ui/core/IconButton';
import CastIcon from '@material-ui/icons/Cast';
import SearchIcon from '@material-ui/icons/Search';
function NavBar() {
    return (
        <div className="navbar">
            <div className="leftbar">
                <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="Netflix Logo" />
                <h5>TV Shows</h5>
                <h5>Movies</h5>
                <h5>Recently Added</h5>
                <h5>My List</h5>

            </div>
            <div className="rightbar">
                <IconButton color="inherit" >
                    <CastIcon fontSize="medium"  />
                </IconButton>
                <IconButton color="inherit" >
                    <SearchIcon fontSize="medium"  />
                </IconButton>

                <img className="avatar" src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="avatar" />  
            </div>
            
            

        </ div>
    )
}

export default NavBar
