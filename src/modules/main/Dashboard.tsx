
import { Background, WidgetItem } from '../styles/styles'
import { Circles } from './Circles'
import "../styles/style.css"
import {
  Responsive as ResponsiveGridLayout
} from "react-grid-layout";

import * as Icon from "../icons/icons"
import { widgetsConfig } from '../widgets/widgetsConfig';

export default function Dashboard() {


  return (
    <Background>

      <Circles />
      
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          justifyContent: "center",

          display: "flex",
          top: 0,
          left: 0,
        }}
      >
        <div
          style={{
            width: "1201px",
            height: "100vh",
            overflow: "hidden"
          }}
        >
        <ResponsiveGridLayout
          
          breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
          cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
          rowHeight={71}
          width={1201}
          margin={[25, 25]}
          isBounded={true}
          maxRows={8}
  
        >
          {widgetsConfig.map((widget: any) => (
            <WidgetItem key={widget.key} data-grid={widget.dataGrid}>
              {/* @ts-ignore */}
              {widget.iconName && <img src={Icon[widget.iconName]} alt={widget.text} /> }
            </WidgetItem>
          ))}


        </ResponsiveGridLayout>
        </div>
      </div>


    </Background>
  )
}
