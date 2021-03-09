import { createMuiTheme } from '@material-ui/core/styles';
import typography from '../typography/typography'

const theme = createMuiTheme({
    // typography: {
    //   useNextVariants: true,
    // },
    palette: {
      primary: {
        main: '#636FA4',
        contrastText: '#fff',
      },
      primary1: {
        contrastText: '#fff',
        main: '#0767DB',
        light: '#F6F9FD',
        dark: '#0B48A0'
      },
      secondary: {
        // main: '#ED2939',
        main: '#ED4740',
        contrastText: '#fff',
      },
      danger: {
        contrastText: 'white',
        main: '#ED4740',
        light: '#FEF6F6',
        dark: '#BF0E08'
      },
      success: {
        contrastText: 'white',
        main: '#45B880',
        light: '#F1FAF5',
        dark: '#00783E'
      },
      common: {
        black: '#000000',
        white: '#FFFFFF',
        neutral: '#E4E7EB',
        muted: '#9EA0A4'
      },
      text: {
        primary: '#12161B',
        secondary: '#66788A',
        disabled: '#A6B1BB'
      },
    },
    typography,
    overrides: {
      MuiTooltip: {
        tooltip: {
          fontSize: "16px",
          fontFamily: 'sans-serif'
          // color: "yellow",
          // backgroundColor: "red"
        }
      }
      // MuiListItem: {
      //   root: {
      //     "&$selected": {
      //       borderLeft: `4px solid #0767DB`,
      //       borderRadius: '4px',
      //       backgroundColor:'#F6F9FD',
      //       '&:focus':{
      //         backgroundColor:'#F6F9FD', 
      //       },
      //       "&:hover":{
      //         backgroundColor: '#F6F9FD'
      //        }
      //       },  
      //   },
      //   button:{
      //     "&:hover":{
      //       backgroundColor: '#F6F9FD'
      //      }
      //   }
      // },
      // MuiListItemIcon:{
      //   root:{
      //     "&$selected": {
      //       backgroundColor: '#0767DB',
      //       marginLeft: '-4px'
      //     }
      //   }
      // }
  
    }
  
  });

  export default theme
  