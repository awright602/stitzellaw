import React, { useState } from 'react';
import {
    Grid,
    TextField,
    Button,
} from '@material-ui/core';

const ConsultForm = ( { detailDescriptor = 'Case Details' } ) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [details, setDetails] = useState('')

    return (
      <Grid container spacing={5} style={{marginTop: '1em'}}>
          <Grid item xs={4}>
              <TextField
                  id="name"
                  name="name"
                  label="Name"
                  fullWidth
                  required
                  value={name}
                  onChange={e => {
                      setName(e.target.value)
                  }}
              />
          </Grid>
          <Grid item xs={4}>
              <TextField
                  id="email"
                  name="email"
                  label="Email Address"
                  type='email'
                  required
                  fullWidth
                  error={Boolean(email && email.length > 0 && !/^([\w\-\.\+])+\@([A-Za-z0-9\-\.])+\.([A-Za-z]{2,4})$/.test(email))}
                  value={email}
                  onChange={e => {
                      setEmail(e.target.value)
                  }}
              />
          </Grid>
          <Grid item xs={4}>
              <TextField
                  id="phone"
                  name="phone"
                  label="Phone Number"
                  type='phone'
                  required
                  fullWidth
                  value={phone}
                  onChange={e => {
                      setPhone(e.target.value)
                  }}
              />
          </Grid>
          <Grid item xs={12}>
              <TextField
                  id="caseDetails"
                  name="caseDetails"
                  label={detailDescriptor}
                  multiline
                  rows='4'
                  fullWidth
                  value={details}
                  required
                  onChange={e => {
                      setDetails(e.target.value)
                  }}
              />
          </Grid>
          <Grid item xs={12} style={{textAlign: 'center', paddingBottom: '2em'}}>
              <Button
                  type="button"
                  color="primary"
                  variant='outlined'
                  style={{minWidth: '100%'}}
                  disabled={!(name && email && phone && details)}
                  onClick={async () => {
                      if (!/^([\w\-\.\+])+\@([A-Za-z0-9\-\.])+\.([A-Za-z]{2,4})$/.test(email)) {
                          document.getElementById('email').focus()
                          return
                      }
                      await fetch('api/consults', {
                          headers: {
                              'content-type': 'application/json',
                          },
                          method: 'post',
                          body: JSON.stringify({
                              name,
                              email,
                              phone,
                              details,
                          })
                      })
                      setName('')
                      setEmail('')
                      setPhone('')
                      setDetails('')
                  }}
              >
                  Contact Us
              </Button>
          </Grid>
      </Grid>
    )
}

export default ConsultForm
