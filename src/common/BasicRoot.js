import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://github.com/brandon-irving/mardock-game">
                Mardock Game
      </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}




export default function BasicRoot({children, maxWidth="xs"}) {

    return (
        <Container component="main" maxWidth={maxWidth}>
            <CssBaseline />
        {children}
            <Box mt={8}>
                <Copyright />
            </Box>
        </Container>
    );
}