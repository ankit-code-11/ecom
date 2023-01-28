import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import {CardActionArea} from "@mui/material"

import Typography from '@mui/material/Typography';


const Product = ({data}) => {

  return (
    <Card  
    sx={{ width: 300 }}
    >
        <CardActionArea>

      <CardMedia
        component="img"
        alt="green iguana"
        width="140"
        image={data.img}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {data.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {data.description }
        </Typography>
      </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small">{data.price}</Button>
      </CardActions>
    </Card>
  );
}

export default Product