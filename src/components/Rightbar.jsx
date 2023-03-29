import { Typography,ImageList, ImageListItem } from "@mui/material";
import { Box} from "@mui/system";
export default function Rightbar(){
    return(
        <Box display="flex" flexDirection="column">
            <Typography>
                Latest Photos
            </Typography>
            <ImageList  sx={{width:250}} cols={2}>
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