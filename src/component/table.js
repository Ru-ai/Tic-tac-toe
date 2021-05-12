import React from 'react';

const Table=(props)=>{

    return(
      <table className="tablerow">
          <tr>
              <th>SerialNo.</th>
              <th>Move</th>
              <th>Position</th>
          </tr>
          <tbody>
              {
                  props.row.map((arr)=>{
                    return (
                        <tr>
                            <td>
                                {arr[0]}
                            </td>
                            <td>
                                {arr[1]}
                            </td>
                            <td>
                                {arr[2]}
                            </td>
                        </tr>
                    )
                  })
              }
          </tbody>
      </table>
    )
}
export default Table