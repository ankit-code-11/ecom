import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { Box, Button, CardActionArea, CardActions } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addToCart,removeToCart } from '../redux/Action/action';

export default function MultiActionAreaCard() {
    const dispatch = useDispatch();
    const product = {
        name: "iphone",
        price: "$100",
        id: 1,

    }
  return (
    <Card sx={{ width: 300  }}>
      <CardActionArea>
        <CardMedia
          component="img"
          width="140"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvTcbCNcvmvvb1djt59-_YnKzbxpHN_CFSvzVlbT8ibPpeO_yq3I8FMD5TEa-j-x2ksOU&usqp=CAU"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Iphone
          </Typography>
          
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" variant='contained' onClick={() => dispatch(addToCart(product))} >
          Add to cart
        </Button>
        <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
           
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
              
            >
                <RemoveCircleOutlineIcon onClick={() => dispatch(removeToCart(product))} />
            </IconButton>
          </Box>
      </CardActions>
    </Card>
  );
}