import React from 'react'
import { GridComponent,ColumnDirective,ColumnsDirective, Resize,Sort,ContextMenu,Filter,Page,ExcelExport,PdfExport,Edit,Inject} from '@syncfusion/ej2-react-grids'
import { ordersData,contextMenuItems,ordersGrid } from '../Data/dummy'
import { Header } from '../Components'
import { useStateContext } from '../Context/ContextProvider'

function Orders() {
  const{currentColor}=useStateContext()
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header  title='Orders' category='Page'/>
      <GridComponent id='gridcomp' dataSource={ordersData} allowPaging={true}    allowSorting
        allowExcelExport
        allowPdfExport
       allowSort
       >
        <ColumnsDirective>
        {ordersGrid.map((item,index)=>(
          <ColumnDirective key={index}{...item}/>
        ))}
        </ColumnsDirective>
        <Inject services={[Resize,Sort,ContextMenu,Filter,Page,ExcelExport,Edit,PdfExport]} />
      </GridComponent>
    </div>
  )
}

export default Orders