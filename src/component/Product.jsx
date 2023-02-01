import React from 'react';
import { useSelector } from 'react-redux'
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { CardActionArea } from "@mui/material";
const Product = () => {
  const data = useSelector(state => state.cartData);
  console.log(data, 'product')
  return (

    <>
    <br/>
    {
      data.map((value) => {
        return (
          <Grid item xs={5} sm={4} md={4} key={value.id}  style={{ display: "flex" }} >
                <Card sx={{ width: 345 }} style={{ display: "grid" }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      alt="green iguana"
                      width="140"
                      image={value.image}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {value.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {value.description}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small">{value.price}</Button>
                   
                  </CardActions>
                </Card>
              </Grid>
        )
      })
    }
    </>
  )
}

export default Product