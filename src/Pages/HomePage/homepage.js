import React from 'react';

import { Paper } from '@mui/material';
import Carousel from 'react-material-ui-carousel';

import Header from './../../Component/Header/header';
import first from './../../assets/1.jpg';
import second from './../../assets/2.jpg';
import third from './../../assets/3.jpg';
const items = [
    {
        name: "First Image",
        src: first
    },
    {
        name: "Second Image",
        src: second
    },
    {
        name: "Third Image",
        src: third
    }
]

class HomePage extends React.Component {

    render() {
        return (
            <React.Fragment>
                <Header />
                <Carousel indicatorIconButtonProps={{
                    style: {
                        padding: '10px',    // 1
                        color: 'blue'       // 3
                    }
                }}
                    activeIndicatorIconButtonProps={{
                        style: {
                            backgroundColor: 'red' // 2
                        }
                    }}
                    indicatorContainerProps={{
                        style: {
                            overflow: 'hidden',
                            marginTop: '50px', // 5
                            textAlign: 'right' // 4
                        }

                    }}>
                    {
                        items.map((item, i) => {
                            return (
                                <Paper key={i}>
                                    <img alt=" " src={item.src} />
                                </Paper>
                            )
                        })
                    }
                </Carousel>
            </React.Fragment >
        )
    }
}

export default HomePage;