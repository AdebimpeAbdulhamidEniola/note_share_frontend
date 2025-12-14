"use client";

import { getSnippetById } from "@/lib/snippetsApi";
import { useQuery } from "@tanstack/react-query";

import Hero from "./Hero";

const CodeViewer = ({ codeId }: { codeId: string }) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["code", codeId],
    queryFn: () => getSnippetById(codeId),
  });
  if (isLoading) {
    return <div>Retrieving codes....Please wait </div>;
  }
  if (error) {
    return <div> Something unexpected happen</div>;
  }
  if (!data?.data) {
    return <div>No snippet found</div>;
  }
  //destructuring the APIResponse
  const snippet = data.data;
  const { code, language, theme } = snippet;
  console.log(snippet);
  return (
    <Hero code={code} language={language} theme={theme} fromBackend={true} />
  );
};

export default CodeViewer;
