import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import moment from 'moment';
import {
    Paper,
    Typography,
    Divider,
} from '@material-ui/core';
import StarIcon from '@material-ui/icons/Star';
import HeaderBanner from './HeaderBanner';
import CenterPageHeader from './CenterPageHeader';
import TestimonialForm from './TestimonialForm';
import { CallMissedSharp } from '@material-ui/icons';


const useStyles = makeStyles(theme => ({

    testiView: {
        paddingTop: '2em',
        textAlign: 'justify',
        paddingRight: '2em',

    },
}));

function Testimonials() {
    const [testimonials, setTestimonials] = React.useState([]);

    if (!testimonials.length) {
        fetch('api/testimonials')
            .then(response => response.json())
            .then(data => setTestimonials(data.data));
    }

    const classes = useStyles();

    const getStars = (rating) => {
        switch (rating) {
            case 1:
                return (<StarIcon />);
            case 2:
                return (<><StarIcon /><StarIcon /></>);
            case 3:
                return (<><StarIcon /><StarIcon /><StarIcon /></>);
            case 4:
                return (<><StarIcon /><StarIcon /><StarIcon /><StarIcon /></>);
            case 5:
                return (<><StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon /></>);
            default:
                return '';
        }
    };

    return (
        <Paper style={{ padding: '5px' }} square>
            <HeaderBanner type="Testimonials" />
            <hr />
            <CenterPageHeader title='Client Testimonials' />
            <TestimonialForm />
            {testimonials.map(testimonial => {
                const createdAt = moment(testimonial.created_at)
                    .format('MMM D, YYYY');

                return (
                    <div className={classes.testiView} key={testimonial.id}>
                        <Divider />
                        <Typography>{createdAt} by {testimonial.created_by} {getStars(testimonial.rating)}</Typography>
                        <Typography variant="h6">{testimonial.title}</Typography>
                        <Typography variant="body1">{testimonial.description}</Typography>
                        <Divider />
                    </div>
                );
            })}
        </Paper>
    );
}




export default Testimonials;
