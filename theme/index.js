import { extendTheme } from "@chakra-ui/react";




export default extendTheme({
    colors: {
        'ahoyhoy-blue': {
            50: '#e3f0ff',
            100: '#c6d8ea',
            200: '#a8c1d6',
            300: '#87a9c4',
            400: '#6794b2',
            500: '#4d7d98',
            600: '#3a5d77',
            700: '#273f56',
            800: '#132437',
            900: '#000919',
          }
    },
    styles: {
        global: (props) => ({
            'html, body': {
                backgroundColor: props.colorMode === 'dark' ? 'ahoyhoy-blue.900' : 'ghostwhite'
            }
        })
    }
});