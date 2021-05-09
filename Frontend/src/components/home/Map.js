import React from "react"
// import "./Map.css"
import { WorldMap } from "react-svg-worldmap"

export default function Map() {
  const data =
    [
      { country: "cn", value: 1389618778 }, // china
      { country: "in", value: 1311559204 }, // india
      { country: "us", value: 331883986 },  // united states
      { country: "id", value: 264935824 },  // indonesia
      { country: "pk", value: 210797836 },  // pakistan
      { country: "br", value: 210301591 },  // brazil
      { country: "ng", value: 208679114 },  // nigeria
      { country: "bd", value: 161062905 },  // bangladesh
      { country: "ru", value: 141944641 },  // russia
      { country: "mx", value: 127318112 }   // mexico
    ]

  return (
    <div>
       <WorldMap color="red" title="Top 10 Recommended Countries"  value-suffix="people" size="lg" data={data} />
    </div>
  )
}