import { extendTheme } from '@chakra-ui/react';

const colors = {
    text: {
        primary: '#AD7F33',
        secondary: "#FFEED1",
        gray100: '#A0A0A0',
        gray150: '#EAEAEA'
    },
};


const styles = {
    global: {
        html: {
            overflowX: 'hidden',
        },
        'html, body': {
            fontSize: '16px',
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: '400',
            height: '100%',
        }
    }
}
export const theme = extendTheme({ colors, styles });