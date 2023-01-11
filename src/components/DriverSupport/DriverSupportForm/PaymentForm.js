import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import mtn from '../../../assets/img/mtn-payment.jpeg'
import airtel from '../../../assets/img/airtel-money.jpeg'
import { imageListClasses } from '@mui/material';

export default function PaymentForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardName"
            label="Country Code"
            fullWidth
            autoComplete="+250"
            variant="standard"
            value='+250'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardNumber"
            label="Phone Number"
            fullWidth
            autoComplete="cc-number"
            variant="standard"
          />
        </Grid>
        {/* <Grid item xs={12} md={6}>
          <TextField
            required
            id="expDate"
            label="Expiry date"
            fullWidth
            autoComplete="cc-exp"
            variant="standard"
          />
        </Grid> */}
        <Grid item xs={12} md={12}>
 

<FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Payment Method</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label={<img src={mtn} width='100' height='60'style={{borderRadius:'50%',}}/>} />
        <FormControlLabel value="male" control={<Radio />} label={<img src={airtel} width='100' height='60' style={{borderRadius:'50%',}} />} />
        
      </RadioGroup>
    </FormControl>

        </Grid>
        {/* <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
            label="Make sure you write your Number correctly"
          />
        </Grid> */}
      </Grid>
    </React.Fragment>
  );
}