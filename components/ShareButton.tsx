"use client"

import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useRef } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { SnippetCreatePayload } from "@/types";
import { createSnippet } from "@/lib/snippetsApi";

const ShareButton = ({
  code,
  language,
  theme,
}: {
  code: string;
  language: string;
  theme: string;
}) => {
  const myRef = useRef<HTMLInputElement>(null);
  const handleCopy = () => {
    if (myRef.current) {
      myRef.current.select();
      document.execCommand("copy");
    }
  };

  const mutation = useMutation({
    //This what i want to happen when the user click share
    mutationFn: async () => {
      const payload: SnippetCreatePayload = {code, language, theme}
      return await createSnippet(payload)
    },
    onSuccess: (data) => {
      //when POST succeeds, data contains the snippet with the ID
      console.log('Successful', data)
      const shareUrl = `${window.location.origin}/${data.id}`;
      if (myRef.current) {
        myRef.current.value = shareUrl;
      }
    },
    onError: (error) => {
      console.error("Failed to share", error)
    }

  })
  const handleShare = async () => {
    //this triggers the mutation
    mutation.mutate();
  }
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="bg-[#406AFF] hover:bg-[#1639B0] font-bold py-1.5 px-3 md:py-2 md:px-4 rounded-lg ml-auto flex gap-1.5 md:gap-2 items-center whitespace-nowrap text-sm md:text-base"
        onClick={handleShare}
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
              defaultValue="https://ui.shadcn.com/docs/installation"
              readOnly
              className="text-white  grow"
              ref={myRef}
            />
            <button
              className=" bg-purple-500 hover:bg-purple-700 text-white p-1.5 cursor-pointer rounded-sm"
              onClick={handleCopy}
            >
              Copy Link
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
export default ShareButton;
