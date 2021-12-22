import Box from "@mui/material/Box";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

export const Calendar = () => {
  return (
    <Box sx={{ mb: 2, flexGrow: 1 }}>
      <FullCalendar
        height="720px"
        locale="ja" // ロケール設定。
        plugins={[dayGridPlugin, interactionPlugin]} // 週表示、月表示、日付等のクリックを可能にするプラグインを設定。
        selectable={true} // 日付選択を可能にする。interactionPluginが有効になっている場合のみ。
        titleFormat={{
          year: "numeric",
          month: "short"
        }}
        headerToolbar={{
          start: "title",
          center: "",
          end: "prev,today,next"
        }}
      />
    </Box>
  );
};
