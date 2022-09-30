import React from "react";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import { useNavigate } from "react-router-dom";

const itemsList = [
  { text: "Home", path: "/", icon: "home" },
  { text: "Tasks", path: "/dashboard", icon: "book" },
];

const icons = {
  home: <HomeIcon />,
  book: <MenuBookIcon />,
};

const MenuListItems = () => {
  const navigate = useNavigate();

  return (
    <List>
      {itemsList.map(({ text, path, icon }, index) => (
        <ListItem key={index} disablePadding>
          <ListItemButton onClick={() => navigate(path)}>
            <ListItemIcon>{icons[icon]}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};

export default MenuListItems;
