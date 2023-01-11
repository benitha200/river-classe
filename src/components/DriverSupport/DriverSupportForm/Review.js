import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';

const products = [
  {
    name: 'Product 1',
    desc: 'A nice thing',
    price: '$9.99',
  },
  {
    name: 'Product 2',
    desc: 'Another thing',
    price: '$3.45',
  },
  {
    name: 'Product 3',
    desc: 'Something else',
    price: '$6.51',
  },
  {
    name: 'Product 4',
    desc: 'Best thing of all',
    price: '$14.11',
  },
  { name: 'Shipping', desc: '', price: 'Free' },
];

const addresses = ['1 MUI Drive', 'Reactville', 'Anytown', '99999', 'USA'];
const payments = [
    { name: 'Name', detail: 'ISINGIZWE Aristide' },
    { name: 'Location', detail: 'Nyarugenge' },
    { name: 'Mode of payment', detail: 'MTN Mobile Money' },
    { name: 'Amount', detail: '15,000' },
  ];
export default function Review() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Summary 
      </Typography>
   
      <Grid container spacing={2}>
        
        <Grid item container direction="column" xs={12} sm={12}>
          {/* <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
               Payment details 
          </Typography> */}
          <Grid container style={{justifyContent:'center'}}>
            {payments.map((payment) => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom >{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}