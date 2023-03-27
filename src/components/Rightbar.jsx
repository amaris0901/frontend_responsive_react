import { Typography,ImageList, ImageListItem } from "@mui/material";
import { Box, height, width } from "@mui/system";
export default function Rightbar(){
    return(
        <Box display="flex" flexDirection="column">
            <Typography>
                Latest Photos
            </Typography>
            <ImageList variant="standard" cols={2} sx={{width:250}} >
               <ImageListItem >
                    <img src="./assets/IMG_2576.jpg" />
                </ImageListItem> 
                <ImageListItem >
                    <img src="./assets/IMG_2576.jpg" />
                </ImageListItem> 
                <ImageListItem >
                    <img src="./assets/IMG_2576.jpg"/>
                </ImageListItem> 
                <ImageListItem >
                    <img src="./assets/IMG_2576.jpg"/>
                </ImageListItem> 
            </ImageList>
        </Box>
    );
}