import React, { useMemo, useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { PreviousJobType } from "./PreviousJobs";

export interface AddPreviousJobDialogProps {
  open: boolean;
  handleClose: () => void;
  handleAddPreviousJobDetails: (data: PreviousJobType) => void;
}

const AddPreviousJobDialog = ({
  open,
  handleClose,
  handleAddPreviousJobDetails,
}: AddPreviousJobDialogProps) => {
  const [name, setName] = useState<string>("");
  const [period, setPeriod] = useState<string>("");

  const onNameChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setName(event.target.value);
  const onPeriodChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setPeriod(event.target.value);
  const onClickAdd = () => {
    handleAddPreviousJobDetails({
      name,
      period,
    });
    setName("");
    setPeriod("");
  };
  const isAddButtonDisabled = useMemo(() => {
    return name.trim() === "" || period.trim() === "";
  }, [name, period]);

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Previous Job Details</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            label="Name"
            type="text"
            fullWidth
            variant="standard"
            value={name}
            onChange={onNameChange}
          />
          <TextField
            required
            margin="dense"
            id="period"
            label="Period"
            type="text"
            fullWidth
            variant="standard"
            value={period}
            onChange={onPeriodChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button disabled={isAddButtonDisabled} onClick={onClickAdd}>
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AddPreviousJobDialog;
