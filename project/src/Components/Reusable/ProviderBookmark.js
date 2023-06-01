import { Checkbox } from "@mui/material";
import React from "react";
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const ProviderBookmark = () => {
  return <div >
    <Checkbox size="large" sx={{color:"white"}}
        {...label}
        icon={<BookmarkBorderIcon />}
        checkedIcon={<BookmarkIcon />}
      />
  </div>;
};

export default ProviderBookmark;
