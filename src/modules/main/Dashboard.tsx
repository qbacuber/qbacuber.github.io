import { Circles } from './Circles'
import "../styles/style.css"
import {
  Responsive as ResponsiveGridLayout
} from "react-grid-layout";

import { widgetsConfig } from '../widgets/widgetsConfig';
import { GetWidgets } from '../widgets/GetWidgets';


export default function Dashboard() {


  return (
    <div className="background">

      {/* <Circles /> */}

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
            // onLayoutChange={(layout) => console.log(layout)}
          >
            {widgetsConfig.map((widget: any) => (
              <div
                className="widgetItem"
                key={widget.key} data-grid={widget.dataGrid}
              >
                <GetWidgets widget={widget} />
              </div>
            ))}


          </ResponsiveGridLayout>
        </div>
      </div>


    </div>
  )
}
