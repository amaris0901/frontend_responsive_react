import React from "react";
import {
  Card,
  Box,
  CardMedia,
  Grid,
  Typography,
  CardActionArea,
  CardContent,
} from "@mui/material";
function Content() {
  return (
    <Grid>
      <Box component="main">
        <Typography variant="h4">Welcome to My Website</Typography>
        <Typography variant="body1" sx={{ mt: 2}}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
          veritatis cupiditate quasi nemo voluptatum! Ipsa, quasi possimus nobis
          harum voluptatibus ducimus, odit aperiam quam quibusdam quisquam iure
          natus accusantium illo.
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum optio
          consectetur in excepturi velit. Cum illum exercitationem quae corporis
          tenetur ipsum, ex impedit facere dolorum nostrum aperiam maiores sed
          voluptatem.
        </Typography>
      </Box>

      <Grid container rowSpacing={2} columnSpacing={2} sx={{mt:1}}>
        <Grid item xs={12} sm={12} md={6}>
          <Card >
            <CardActionArea>
              <CardMedia
                component="img"
                sx={{ height: 140 }}
                image="./assets/IMG_2576.jpg"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Card Title
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nihil, debitis perferendis? Quis, reiciendis cupiditate.
                  Atque, beatae hic. Deserunt, dicta vero, maxime sint saepe
                  soluta repellendus, veniam perspiciatis adipisci repellat
                  culpa.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={6}>
          <Card>
            <CardActionArea>
              <CardMedia
                component="img"
                sx={{ height: 140 }}
                image="./assets/IMG_2576.jpg"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Card Title
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nihil, debitis perferendis? Quis, reiciendis cupiditate.
                  Atque, beatae hic. Deserunt, dicta vero, maxime sint saepe
                  soluta repellendus, veniam perspiciatis adipisci repellat
                  culpa.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Card>
            <CardActionArea>
              <CardMedia
                component="img"
                sx={{ height: 140 }}
                image="./assets/IMG_2576.jpg"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Card Title
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nihil, debitis perferendis? Quis, reiciendis cupiditate.
                  Atque, beatae hic. Deserunt, dicta vero, maxime sint saepe
                  soluta repellendus, veniam perspiciatis adipisci repellat
                  culpa.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
}
export default Content;
