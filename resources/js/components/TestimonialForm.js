import React, { useState } from 'react';
import StarIcon from '@material-ui/icons/Star';
import { makeStyles } from '@material-ui/core/styles';
import { FormControl, InputLabel, Button, TextField, Select, MenuItem } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: '215px',
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

const TestimonialForm = () => {
    const classes = useStyles()
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [name, setName] = useState('');
    const [title, setTitle] = useState('');
    const [rating, setRating] = useState(5);
    const [review, setReview] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault()
        fetch('api/testimonials', {
            headers: {
                'content-type': 'application/json',
            },
            method: 'post',
            body: JSON.stringify({
                rating: rating,
                title: title,
                description: review,
                created_by: name,
            })
        })
            .then(() => window.location.reload());
    }

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
    }

    const getForm = () => {
        if (isFormOpen) {
            return (
                <form
                    style={{ textAlign: 'center', marginBottom: '1em' }}
                    name="testimonialForm"
                    onSubmit={handleSubmit}
                >
                    <TextField
                        name="name"
                        label="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <br />
                    <TextField
                        name="title"
                        label="Review Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <br />
                    <FormControl className={classes.formControl}>
                        <InputLabel id="rating-select-label">Rating</InputLabel>
                        <Select
                            name="rating"
                            labelId="rating-select-label"
                            value={rating}
                            onChange={(e) => setRating(e.target.value)}
                        >
                            <MenuItem value={1}>{getStars(1)}</MenuItem>
                            <MenuItem value={2}>{getStars(2)}</MenuItem>
                            <MenuItem value={3}>{getStars(3)}</MenuItem>
                            <MenuItem value={4}>{getStars(4)}</MenuItem>
                            <MenuItem value={5}>{getStars(5)}</MenuItem>
                        </Select>
                    </FormControl>
                    <br />
                    <TextField
                        name="review"
                        label="Review"
                        value={review}
                        onChange={(e) => setReview(e.target.value)}
                    />
                    <br />
                    <Button type="submit">Create</Button>
                    <Button type="button" onClick={() => setIsFormOpen(false)} >Cancel</Button>
                </form>
            );
        }

        return null;
    }

    return (
        <div style={{ textAlign: 'center' }}>
            <Button color="secondary" type="button" onClick={() => setIsFormOpen(true)}>Create your own review</Button>
            {getForm()}
        </div>
    );
}

export default TestimonialForm;