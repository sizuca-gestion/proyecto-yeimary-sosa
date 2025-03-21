import {
  Avatar,
  Divider,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";

export function ProfileListItem({ data }) {
  return (
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar
          alt={String(data.name[0]).toUpperCase()}
          sx={{ bgcolor: "primary.main" }}
          src={
            data.avatar ? `data:image/jpeg;base64,${data.avatar}` : undefined
          }
        />
      </ListItemAvatar>
      <ListItemText
        primary={data.name}
        primaryTypographyProps={{ fontWeight: "bold" }}
        secondary={
          <Stack
            direction="row"
            spacing={1}
            divider={<Divider orientation="vertical" flexItem />}
          >
            <Typography>{data.national_id}</Typography>

            {/* {data.job_history.length ? (
              <Typography>
                {data.job_history[data.job_history.length - 1].position}
              </Typography>
            ) : null} */}
          </Stack>
        }
      />
    </ListItem>
  );
}
