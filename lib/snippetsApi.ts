import api from "./api";
import { SnippetCreatePayload } from "@/types";
import { Snippet } from "@/types";
import { ApiResponse } from "@/types";

export const createSnippet = async (payload: SnippetCreatePayload):Promise<ApiResponse>=> {
  const resp = await api.post("/", payload);
  return resp.data; 
};

export const getSnippetById = async (id: string): Promise<ApiResponse> => {
  const resp = await api.get(`/${id}`);
  return resp.data; 
};