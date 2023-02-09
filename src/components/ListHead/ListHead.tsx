import { Button, Card, Typography } from "@mui/material";
import SortIcon from "@mui/icons-material/Sort";
import styles from "./listHead.module.css";
export const ListHead = ({ nameButtonClicked, nameAscending }: any) => {
  return (
    <div className={styles.list_head__container}>
      <Typography className={styles.list_head__flag}>Flag</Typography>
      <Typography className={styles.list_head__name}>Name</Typography>
      <Typography className={styles.list_head__population}>
        Population
      </Typography>
      <Typography className={styles.list_head__region}>Region</Typography>
      <Button variant="contained" onClick={nameButtonClicked} className={styles.list_head__button}>
        {<SortIcon />}
        <Typography>
          Sort by name {nameAscending ? "(ascending)" : "(descending)"}
        </Typography>
      </Button>
    </div>
  );
};
