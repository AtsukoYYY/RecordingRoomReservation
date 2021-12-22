import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import FullCalendar from "@fullcalendar/react";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";

export const Calendar = () => {
  const events = [
    {
      id: 1,
      title: "録音室A 　使用者：〇〇　××　△△",
      start: "2021-12-22T09:00:00"
    },
    {
      id: 2,
      title: "録音室B 　使用者：〇〇　××",
      start: "2021-12-07T09:00:00"
    },
    {
      id: 3,
      title: "録音室E 　使用者：〇〇　××",
      start: "2021-12-07T09:00:00"
    },
    {
      id: 4,
      title: "録音室E 　使用者：〇〇　××",
      start: "2021-12-07T13:00:00"
    }
  ];
  const fabStyle = {
    bottom: 16,
    right: 16,
    position: "fixed"
  };
  return (
    <Box sx={{ mb: 2, flexGrow: 1 }}>
      <FullCalendar
        locale="ja"
        editable={true}
        droppable={true}
        plugins={[interactionPlugin, listPlugin]} // 週表示、月表示、日付等のクリックを可能にするプラグインを設定。
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
        events={events}
      />
      <Fab sx={fabStyle} color="primary" aria-label="add">
        <AddIcon />
      </Fab>
    </Box>
  );
};
