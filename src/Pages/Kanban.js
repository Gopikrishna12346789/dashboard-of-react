// import React from 'react'
// import { KanbanComponent,ColumnDirective,ColumnsDirective } from '@syncfusion/ej2-react-kanban'
// import { kanbanData ,kanbanGrid} from '../Data/dummy'
// import { Header } from '../Components'

// function Kanban() {
//   return (
//     <div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl'>
//     <Header category='App' title='Kanban'/>
//     <KanbanComponent id='kanban' dataSource={kanbanData} cardSettings={{contentField:'Summary',headerField:'Id'}} keyField='Status'>
//         <ColumnsDirective>
//           {kanbanGrid.map((item,index)=>(
//             <ColumnDirective key={index} {...item}/>
//           ))}
//         </ColumnsDirective>
//     </KanbanComponent>
//     </div>
//   )
// }

// export default Kanban
import React from 'react';
import { KanbanComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-kanban';

import { kanbanData, kanbanGrid } from '../Data/dummy';
import { Header } from '../Components';

const Kanban = () => (
  <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
    <Header category="App" title="Kanban" />
    <KanbanComponent
      id="kanban"
      keyField="Status"
      dataSource={kanbanData}
      cardSettings={{ contentField: 'Summary', headerField: 'Id' }}
    >
      <ColumnsDirective>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        {kanbanGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
      </ColumnsDirective>
    </KanbanComponent>
  </div>
);

export default Kanban;