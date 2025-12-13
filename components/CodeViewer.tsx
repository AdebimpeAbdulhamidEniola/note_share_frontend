"use client"

import { getSnippetById } from "@/lib/snippetsApi"
import { useQuery } from "@tanstack/react-query"

const CodeViewer = ({codeId}: {codeId: string}) => {
    const {data, error, isLoading} = useQuery({
        queryKey: ['code', codeId],
        queryFn: () => getSnippetById(codeId)
    })
    console.log(data)
    if (!data?.data)
  return (
    <div>
      
    </div>
  )
}

export default CodeViewer
