import React, { useContext } from "react";

import { TextField, Grid } from "@material-ui/core";
import { Button } from "@material-ui/core";

import { LocationContextApi } from "../../action/ContextApi";

const ModalForm = (props) => {
  const { dialogueClose } = props;

  //Contex api for loacation
  const locationContext = useContext(LocationContextApi);
  //   const setLocation = locationContext.setLocation;
  const location = locationContext.location;

  const handleClick = (event) => {
    console.log(JSON.stringify(location, null, 2));
    dialogueClose();
    event.preventDefault();
  };

  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <TextField
          label='Latitude & Longitude'
          type='text'
          fullWidth
          disabled
          value={location.lat + " & " + location.lng}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label='Name'
          type='text'
          fullWidth
          disabled
          value={location.place}
        />
      </Grid>
      <Grid item xs={12} />
      <Grid item xs={12}>
        <Button
          fullWidth
          variant='outlined'
          color='secondary'
          size='small'
          onClick={handleClick}
        >
          Send
        </Button>
      </Grid>
      <Grid item xs={12} />
    </Grid>
  );
};
export default React.memo(ModalForm);
