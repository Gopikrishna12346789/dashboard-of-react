import React from 'react'
import { GridComponent,ColumnDirective,ColumnsDirective,PaddingModel,Selection,Inject,DataEditing,ToolbarItems,Sort,Filter ,Page,Toolbar}  from '@syncfusion/ej2-react-grids'
import {customersData,customersGrid } from '../Data/dummy'
import { Header } from '../Components'

function Customers() {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
    <Header title='Customers' category='Page'/>
    <GridComponent  dataSource={customersData} allowPaging={true} allowSort  toolbar={['Delete']} width='auto' editSettings={{allowDeleting:true,allowEditing:true}}>
      <ColumnsDirective>
      {customersGrid.map((item,index)=>(
        <ColumnDirective key={index}{...item}/>
      ))}
      </ColumnsDirective>
      <Inject services={[Page,Toolbar]} />
    </GridComponent>
  </div>

  )
}

export default Customers