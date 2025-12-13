import CodeViewer from "@/components/CodeViewer";

const CodePage = async({params} : {params: Promise<{codeId: string}>}) => {
    const codeId = (await params).codeId
    return <CodeViewer codeId = {codeId}/>
}
export default CodePage;