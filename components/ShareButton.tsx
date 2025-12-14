"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useRef, useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ApiResponse, SnippetCreatePayload } from "@/types";
import { createSnippet } from "@/lib/snippetsApi";

const ShareButton = ({
  code,
  language,
  theme,
  unsavedChanges,
  setUnsavedChanges,
  fromBackend
}: {
  code: string;
  language: string;
  theme: string;
  unsavedChanges: boolean;
  setUnsavedChanges: (value: boolean) => void;
  fromBackend?:boolean
}) => {
  const myRef = useRef<HTMLInputElement>(null);
  const handleCopy = () => {
    if (myRef.current) {
      myRef.current.select();
      document.execCommand("copy");
    }
    setIsCopy(true);
  };

  const [url, setUrl] = useState("");
  const [isCopy, setIsCopy] = useState(false);

  const mutation = useMutation({
    //This what i want to happen when the user click share
    mutationFn: async (payload: SnippetCreatePayload) => {
      return await createSnippet(payload);
    },
    onSuccess: (result: ApiResponse) => {
      //when POST succeeds, data contains the snippet with the ID
      const { data } = result;
      console.log("data is", data?.id);
      const shareUrl = `${window.location.origin}/${data?.id}`;
      console.log(shareUrl);
      if (myRef.current) {
        setUrl(shareUrl);
        myRef.current.value = shareUrl;
      }
      // mark that there are no unsaved changes after successful share
      setUnsavedChanges(false);
    },
    onError: (error) => {
      console.error("Failed to share", error);
    },
  });
  const handleShare = async () => {
    //this triggers the mutation
    const payload: SnippetCreatePayload = { code, language, theme };
    mutation.mutate(payload);
  };
  const isDisabled = !unsavedChanges || fromBackend;
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          className={`font-bold py-1.5 px-3 pr-2 md:py-2 md:px-4 rounded-lg ml-auto flex gap-1.5 md:gap-2 items-center whitespace-nowrap text-sm md:text-[10px] md:text-base ${
            isDisabled
              ? "bg-gray-300 text-gray-600 cursor-not-allowed"
              : "bg-[#406AFF] hover:bg-[#1639B0] text-white"
          }`}
          onClick={handleShare}
          disabled={isDisabled}
        >
          <Image
            src="/resources/Share.svg"
            alt="share-icon"
            width={14}
            height={14}
            className="md:w-4 md:h-4"
          />
          <span className="text-white">Share</span>
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Share link</DialogTitle>
          <DialogDescription>
            Anyone with this link can view your code
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center ">
          <div className=" flex flex-1 gap-2">
            <label htmlFor="link" className="sr-only">
              Link
            </label>
            <input
              id="link"
              readOnly
              className="text-blue grow flex"
              ref={myRef}
              value={url}
            />
            <Button
              className={`text-white p-1.5 cursor-pointer rounded-sm md: ${
                isCopy
                  ? "bg-green-500 hover:bg-green-700"
                  : "bg-purple-500 hover:bg-purple-700"
              }`}
              onClick={handleCopy}
            >
              {isCopy ? "Copied" : "Copy"}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
export default ShareButton;
