import api from "./api";
import { SnippetCreatePayload } from "@/types";
import { Snippet } from "@/types";

export const createSnippet = async (payload: SnippetCreatePayload): Promise<Snippet> => {
  const resp = await api.post("/", payload);
  return resp.data; 
};

export const getSnippetById = async (id: string): Promise<Snippet | null> => {
  const resp = await api.get(`/${id}`);
  return resp.data; 
};