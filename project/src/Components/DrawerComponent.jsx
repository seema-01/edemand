import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React,{ useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';


const DrawerComponent = () => {
  const[openDrawer,setOpenDrawer]=useState(false);
  return (
    <div>
      <React.Fragment>
        <Drawer open={openDrawer}
        onClose={()=>setOpenDrawer(false)}>
          <List>
            <ListItemButton>
              <ListItemIcon>
                <ListItemText>Login</ListItemText>
              </ListItemIcon>
            </ListItemButton>
          </List>
        </Drawer>
        <IconButton onClick={()=>setOpenDrawer(!openDrawer)}><MenuIcon/></IconButton>
      </React.Fragment>
    </div>
  );
};

export default DrawerComponent;
