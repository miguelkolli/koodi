import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import ReceiptIcon from "@material-ui/icons/Receipt";
import NotificationsIcon from "@material-ui/icons/Notifications";
import DesktopWindowsIcon from "@material-ui/icons/DesktopWindows";
import SettingsIcon from "@material-ui/icons/Settings";
import Sidebar from "./Sidebar";


function onClick(e, item) {
  const url = 'somesite.com?data=yourDataToSend';
  window.open(url, '_blank');
}

const items = [
  { name: "home", label: "Home", Icon: HomeIcon },

  {
    name: "asiakkaat",
    label: "Asiakkaat",
    Icon: ReceiptIcon,
    items: [
      { name: "Näytä", label: "Näytä", id:"1", onClick }
      
    ]
  },
  {
    name: "laskutus",
    label: "Laskutus",
    Icon: ReceiptIcon,
    items: [
      { name: "tilitiedot", label: "Tilitiedot", id:"2", onClick },
      { name: "raportit", label: "Raportit", onClick }
    ]
  },
  "divider",
  {
    name: "asetukset",
    label: "Asetukset",
    Icon: SettingsIcon,
    items: [
      { name: "profiili", label: "Profiili" },
      "divider",

    ]
  }
];

function App() {
  return (
    <div>
      <Sidebar items={items} />
    </div>
  );
}

export default App;
