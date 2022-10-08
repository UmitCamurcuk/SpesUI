import React, { useState } from 'react'
import { AppBar, Avatar, Box, Button, IconButton, Menu, MenuItem, Toolbar, Tooltip, Typography } from '@mui/material'
import { Container } from '@mui/system'
import DataObjectIcon from '@mui/icons-material/DataObject';
import { useNavigate} from 'react-router-dom';
const pages = ['Product', 'Customer'];

function Navbar() {
    const [settingsMenu, setSettingsMenu] = useState(null);
    const [mdmMenu, setMDMMenu] = useState(null);

    const settingsMenuOpen = Boolean(settingsMenu);
    const mdmMenuOpen = Boolean(mdmMenu);

    const navigate = useNavigate();

    const settingsMenuClick = (event) => {
        setSettingsMenu(event.currentTarget)
    }
    const mdmMenuClick = (event) => {
        setMDMMenu(event.currentTarget)
    }
    const handleClose = (e) => {
        setSettingsMenu(null);
        setMDMMenu(null);

    };

    const handleNavigate = (event) => {
        navigate('/Items/' + event.target.innerText)
        setSettingsMenu(null);
        setMDMMenu(null);
    }

    return (
        <AppBar position='static' color='inherit' >
            <Container maxWidth='xl'>
                <Toolbar disableGutters>
                    <DataObjectIcon fontSize='large' sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        Spes
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <Button
                            sx={{ my: 2, color: 'black', display: 'block' }}
                            id='MDMButton'
                            onClick={mdmMenuClick}
                            aria-controls={mdmMenuOpen ? 'MDMMenu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={mdmMenuOpen ? 'true' : undefined}
                        >
                            Items
                        </Button>
                        <Menu id='MDMMenu'
                            key="MDM"
                            open={mdmMenuOpen}
                            onClose={handleClose}
                            anchorEl={mdmMenu}>
                            {pages.map((page) => (
                                <MenuItem
                                    onClick={handleNavigate}
                                    key={page}
                                > {page} </MenuItem>
                            ))}
                        </Menu>
                        <Button
                            sx={{ my: 2, color: 'black', display: 'block' }}
                        >
                            Functions
                        </Button>
                        <Button
                            sx={{ my: 2, color: 'black', display: 'block' }}
                        >
                            Jobs
                        </Button>
                        <Button
                            sx={{ my: 2, color: 'black', display: 'block' }}
                        >
                            Reports
                        </Button>
                        <Button
                            sx={{ my: 2, color: 'black', display: 'block' }}
                            id='settingsButton'
                            onClick={settingsMenuClick}
                            aria-controls={settingsMenuOpen ? 'SettingsMenu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={settingsMenuOpen ? 'true' : undefined}
                        >
                            Settings
                        </Button>
                        <Menu id='SettingsMenu'
                            open={settingsMenuOpen}
                            onClose={handleClose}
                            anchorEl={settingsMenu}>
                            <MenuItem key="ItemTypes" onClick={handleClose}>ItemTypes</MenuItem>
                            <MenuItem onClick={handleClose}>Attributes</MenuItem>
                            <MenuItem onClick={handleClose}>Family</MenuItem>
                            <MenuItem onClick={handleClose}>System</MenuItem>
                        </Menu>
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open Settings">
                            <IconButton sx={{ p: 0 }}>
                                <Avatar alt='Umit Camurcuk' src='/static/images/avatar/2.jpg' />
                            </IconButton>
                        </Tooltip>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Navbar