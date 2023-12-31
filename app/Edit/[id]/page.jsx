import React from 'react'
import { GetTasksId } from '@/lib/data'
import EditList from '@/components/Form/EditList'

export default async function Edit({params}) {
        const id=params.id
        const task=await GetTasksId(id)
  return (
    <div>
        <EditList data={task}/>
    </div>
  )
}
