import { useCallback, useMemo, useState } from "react";
import styled from "@emotion/styled";
import { Divider, IconButton, Typography, Paper } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import AddIcon from "@mui/icons-material/Add";
import AddPreviousJobDialog from "./AddPreviousJobDialog";
import { useLocalStorage } from "../common/hooks";

export interface PreviousJobType {
  name: string;
  period: string;
}

interface PreviousJobsTableProps {
  previousJobs: PreviousJobType[];
  height: number;
  width: number;
}

const columns: GridColDef[] = [
  { field: "name", headerName: "Name", width: 120 },
  { field: "period", headerName: "Period", width: 120 },
];

const PreviousJobsTableRoot = styled.div<{ height: number; width: number }>`
  height: ${(props) => props.height}px;
  width: ${(props) => props.width}px;
`;

const PreviousJobsTable = ({
  previousJobs,
  height,
  width,
}: PreviousJobsTableProps) => {
  const rows = useMemo(() => {
    return previousJobs.map((previousJob: PreviousJobType, idx: number) => ({
      id: idx,
      ...previousJob,
    }));
  }, [previousJobs]);

  return (
    <PreviousJobsTableRoot height={height} width={width}>
      <DataGrid
        columns={columns}
        rows={rows}
        pageSize={2}
        rowsPerPageOptions={[2]}
      />
    </PreviousJobsTableRoot>
  );
};

const PreviousJobsTableWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const AddIconButton = styled(IconButton)`
  background: cornflowerblue;
  margin-left: 16px;
`;

const Root = styled(Paper)`
  flex: 1;
  flex-direction: column;

  > * {
    margin: 16px;
  }
`;

const TopBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const PreviousJobs = () => {
  const [previousJobs, setPreviousJobs] = useLocalStorage<PreviousJobType[]>(
    "previous-jobs",
    []
  );
  const [previousJobDialogOpened, setPreviousJobDialogOpened] =
    useState<boolean>(false);

  const handleDialogClose = useCallback(() => {
    setPreviousJobDialogOpened(false);
  }, []);

  const openDialog = useCallback(() => {
    setPreviousJobDialogOpened(true);
  }, []);

  const handleAddPreviousJobDetails = useCallback(
    (data: PreviousJobType) => {
      setPreviousJobs((prevState) => [...prevState, data]);
      handleDialogClose();
    },
    [handleDialogClose, setPreviousJobs]
  );

  return (
    <Root variant="outlined">
      <TopBar>
        <Typography variant="h6">Previous Jobs</Typography>
        <AddIconButton onClick={openDialog}>
          <AddIcon />
        </AddIconButton>
      </TopBar>
      <Divider />
      <PreviousJobsTableWrapper>
        <div>
          <PreviousJobsTable
            previousJobs={previousJobs}
            height={215}
            width={290}
          />
        </div>
      </PreviousJobsTableWrapper>
      <AddPreviousJobDialog
        open={previousJobDialogOpened}
        handleClose={handleDialogClose}
        handleAddPreviousJobDetails={handleAddPreviousJobDetails}
      />
    </Root>
  );
};

export default PreviousJobs;
