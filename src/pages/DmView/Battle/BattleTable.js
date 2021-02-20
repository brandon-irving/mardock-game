import React, { useState, useEffect } from 'react'
import MaterialTable from 'material-table'
import { useContextState } from 'dynamic-context-provider';
import { useGetBattle } from '../../../common/hooks/useGetBattle';
import { columnHeaders } from './columns'
import { map } from 'lodash';
import { updateMonsters } from '../../../firebase';
import { battles } from '../../../gameData/battles';

export default function BattleTable() {
  // const battle = useGetBattle['tutorialBattle1']
  const battle = useGetBattle('tutorialBattle1')

  const { users=[], updateContextState } = useContextState()
  const participants = map([...battle.monsters, ...users], participant=>{
    if(participant.character)return participant.character
    return participant
  })  
    const [columns, setColumns] = useState(columnHeaders);
    const [data, setData] = useState(participants);

  async function updateParticipant({newData, oldData}){
    // updateContextState({globalLoading: true})
    try{
      const newMonsters = map(battle.monsters, monster =>{
        let newMon = monster
        if(newData.name === monster.name){
          newMon = newData
        }
        return newMon
      })
      const dataUpdate = [...data];
      const index = oldData.tableData.id;
      dataUpdate[index] = newData;
      setData([...dataUpdate]);
      await updateMonsters(newMonsters)
    }catch(e){

    }
    // updateContextState({globalLoading: false})
  }

    useEffect(() => {
      setData(participants)
    }, [battle])
    return (
      <MaterialTable
        title="Battle Table"
        columns={columns}
        data={data}
        options={{pageSize: 20, maxBodyHeight: 440}}
        editable={{
        
          onRowUpdate: async(newData, oldData)=>updateParticipant({newData, oldData}),
        }}
      />
    )
  }
  