import React from 'react'
import { Autocomplete } from '@react-google-maps/api';
import { AppBar, Toolbar, InputBase, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
function Header({onPlaceChanged, onLoad} ) {
    return (
        <AppBar position="static">
            <Toolbar className="toolbar">
                <h3 className="title">
                    Travel Mithra
                </h3>
                <Box sx={{display:"flex", justifyContent:'flex-end', flex:1}}>
                    <h6 className="title-explore">
                        Explore new places
                    </h6>
                    <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
                        <div className="search">
                            <div className="searchIcon">
                                <SearchIcon />
                            </div>
                            <InputBase placeholder="Search ..." size="small" classes={{root:'inputRoot', input: 'inputInput'}}/>
                        </div>
                    </Autocomplete>
                </Box>
            </Toolbar>
        </AppBar>
    )
};

export default Header
