import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import dayGridPlugin from "@fullcalendar/daygrid";
import listPlugin from "@fullcalendar/list";

export const Calendar = () => {
  const fabStyle = {
    bottom: 16,
    right: 16,

    position: "fixed"
  };
  return (
    <Box sx={{ mb: 2, flexGrow: 1 }}>
      <FullCalendar
        locale="ja" // ロケール設定。
        plugins={[timeGridPlugin, dayGridPlugin, listPlugin]} // 週表示、月表示、日付等のクリックを可能にするプラグインを設定。
        initialView="listMonth"
        titleFormat={{
          year: "numeric",
          month: "short"
        }}
        headerToolbar={{
          start: "",
          center: "title",
          end: "prev,today,next"
        }}
        events={[
          {
            title: "録音室A",
            start: "2021-12-22T09:00:00",
            end: "2021-12-07T22:00:00",
            display: "block"
          },
          {
            title: "録音室B",
            start: "2021-12-07T09:00:00",
            end: "2021-12-07T12:00:00",
            display: "block"
          },
          {
            title: "録音室E",
            start: "2021-12-07T09:00:00",
            end: "2021-12-07T12:00:00",
            display: "block"
          },
          {
            title: "録音室E",
            start: "2021-12-07T13:00:00",
            end: "2021-12-07T17:00:00",
            display: "block"
          }
        ]}
      />
      <Fab sx={fabStyle} color="primary" aria-label="add">
        <AddIcon />
      </Fab>
    </Box>
  );
};
