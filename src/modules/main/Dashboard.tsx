import { Circles } from './Circles'
import "../styles/style.css"
import {
  Responsive as ResponsiveGridLayout
} from "react-grid-layout";

import { smallFixedLayout, widgetsConfig } from '../widgets/widgetsConfig';
import { GetWidgets } from '../widgets/GetWidgets';
import { useState } from 'react';


export default function Dashboard({ size }: any) {

  const [layouts, setLayouts] = useState<any>({ lg: [] });

  const onLayoutChange = (_: any, allLayouts: any) => {
    setLayouts(allLayouts);
  };

  return (

    <div className="background">

      <Circles />

      <div style={{
        width: "1201px",
      }}>

        <ResponsiveGridLayout
       
          layouts={size < 480 ? smallFixedLayout : layouts}
          onLayoutChange={onLayoutChange}
          breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
          cols={{ lg: 12, md: 10, sm: 8, xs: 6, xxs: 4 }}
          rowHeight={71}
          width={size ? size > 1201 ? 1201 : size : 1201}
          margin={[25, 25]}
          isBounded={true}
          maxRows={8}
          isDraggable={size < 480 ? false : true}
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
  )
}
