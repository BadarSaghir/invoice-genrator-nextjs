/* eslint-disable react/prop-types */
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { BiTrash } from "react-icons/bi";
import EditableField from './EditableField';
import { Typeahead } from 'react-bootstrap-typeahead';
import {itemName} from '../data/list';
React.useLayoutEffect = React.useEffect 
class InvoiceItem extends React.Component {
  render() {
    var onItemizedItemEdit = this.props.onItemizedItemEdit;
    var currency = this.props.currency;
    var rowDel = this.props.onRowDel;
    var itemTable = this.props.items.map(function(item) {
      return (
        <ItemRow onItemizedItemEdit={onItemizedItemEdit} item={item} onDelEvent={rowDel.bind(this)} key={item.id} currency={currency}/>
      )
    });
    return (
      <div>
        <Table>
          <thead>
            <tr>
              <th>ITEM</th>
              <th>QTY</th>
              <th>PRICE/RATE</th>
              <th className="text-center">ACTION</th>
            </tr>
          </thead>
          <tbody>
            {itemTable}
          </tbody>
        </Table>
        <Button className="fw-bold" onClick={this.props.onRowAdd}>Add Item</Button>
      </div>
    );

  }

}
class ItemRow extends React.Component {

  onDelEvent() {
    this.props.onDelEvent(this.props.item);

  }
  render() {
   
    return (
      <tr>

        <td style={{width: '100%'}}>
          <Typeahead 
          
          placeholder='Item Name' 
          options={itemName}
          onInputChange={(e)=>{this.props.item.name=e}}

          name= "name"
          value={this.props.item.name}
          onChange={(selected)=>this.props.item.name=selected}
          
          
        
        
        
          id={this.props.item.id}
          maxResults={7}
          
          
          paginate={false}
          minLength={1}
          />
          {/* <EditableField
            onItemizedItemEdit={this.props.onItemizedItemEdit}
            
            cellData={{
            type: "text",
            name: "name",
            placeholder: "Item name",
          
            value: this.props.item.name,
            id: this.props.item.id,
          }}/> */}
          <EditableField
            onItemizedItemEdit={this.props.onItemizedItemEdit}
            cellData={{
            type: "text",
            name: "description",
            placeholder: "Item description",
            value: this.props.item.description,
            id: this.props.item.id
          }}/>
        </td>
        <td style={{minWidth: '70px'}}>
          <EditableField
          onItemizedItemEdit={this.props.onItemizedItemEdit}
          cellData={{
            type: "number",
            name: "quantity",
            min: 1,
            step: "1",
            value: this.props.item.quantity,
            id: this.props.item.id,
          }}/>
        </td>
        <td style={{minWidth: '130px'}}>
          <EditableField
            onItemizedItemEdit={this.props.onItemizedItemEdit}
            cellData={{
            leading: this.props.currency,
            type: "number",
            name: "price",
            min: 1,
            step: "0.01",
            presicion: 2,
            textAlign: "text-end",
            value: this.props.item.price,
            id: this.props.item.id,
          }}/>
        </td>
        <td className="text-center" style={{minWidth: '50px'}}>
          <BiTrash onClick={this.onDelEvent.bind(this)} style={{height: '33px', width: '33px', padding: '7.5px'}} className="text-white mt-1 btn btn-danger"/>
        </td>
      </tr>
    );

  }

}

export default InvoiceItem;
