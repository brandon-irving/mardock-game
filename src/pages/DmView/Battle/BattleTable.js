import React, { useState, useEffect } from 'react'
import MaterialTable from 'material-table'
import { useContextState } from 'dynamic-context-provider';
import { columnHeaders } from './columns'
import { find, map } from 'lodash';
import { updateCharacter, updateMonsters, giveUserRewards } from '../../../firebase';
import { Button } from '@material-ui/core';

export default function BattleTable({battle={monsters:[]}}) {

  const { users=[] } = useContextState()
  
  const participants = map([...battle.monsters, ...users], participant=>{
    if(participant.character)return participant.character
    return participant
  })  
    const [columns, setColumns] = useState(columnHeaders);
    const [data, setData] = useState(participants);

  async function updateParticipant({newData, oldData}){
    if(newData.title){
      const user = find(users, {displayName: newData.name})
      user && await updateCharacter(user,{'character': newData}, true)

    }else{
      let updateDb = false
      const newMonsters = map(battle.monsters, monster =>{
        let newMon = monster
        if(newData.name === monster.name){
          newMon = newData
          updateDb= true
        }
        return newMon
      })
      updateDb && await updateMonsters(newMonsters)

    }

    const dataUpdate = [...data];
    const index = oldData.tableData.id;
    dataUpdate[index] = newData;
    setData([...dataUpdate]);
  }

  async function giveReward(){
    await giveUserRewards(users, battle.rewards)
  }
    useEffect(() => {
      setData(participants)
    }, [battle])
    if(!battle.monsters.length)return null
    return (
      <div>
      <MaterialTable
        title="Battle Table"
        columns={columns}
        data={data}
        options={{pageSize: 20, maxBodyHeight: 440}}
        editable={{
        
          onRowUpdate: async(newData, oldData)=>updateParticipant({newData, oldData}),
        }}
      />
      <Button fullWidth onClick={giveReward}>Give Reward</Button>
      </div>
    )
  }
  