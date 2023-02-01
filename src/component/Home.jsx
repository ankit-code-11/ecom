import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import { CardActionArea } from "@mui/material";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useDispatch } from "react-redux";
import { addToCart } from '../redux/Action/action'
import { ToastContainer, toast } from 'react-toastify';


const Home = ({ data }) => {
  const [res, setRes] = useState(data);
  const dispatch = useDispatch()

  useEffect(() => {
    setRes(data);
  }, [data]);

  const notify = () => toast("Wow so easy!");

  const handleClick = (value) => {
    dispatch(addToCart(value));
    toast.success('Success Notification !', {
      position: toast.POSITION.TOP_RIGHT
  });
  }

  console.log(res, "red");
  return (
    <>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {res.length === 0 ? (
          <Typography sx={{m: '2rem'}} m={2} style={{margin: '5px'}} variant="h1" component="h2">
          Loading....
        </Typography>
        ) : (
          res?.map((value) => {
            return (
              <Grid item xs={5} sm={4} md={4} key={value.id}  style={{ display: "flex" }} >
                <Card sx={{ maxWidth: 345 }} style={{ display: "grid" }}>
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
                    <Button size="small" onClick={() => notify()}>{value.price}</Button>
                    <Button size="small" variant="contained" onClick={() => handleClick(value)} >Add to Cart</Button>
                  </CardActions>
                </Card>
              </Grid>
            );
          })
        )}
      </Grid>
      <ToastContainer position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover theme="light" />
    </>
  );
};

export default Home;
