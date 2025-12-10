import type IRestaurante from "@/interfaces/IRestaurante";
import { apiGet, apiPost, apiPut, apiDelete } from "../services/api";

export async function RestauranteGetById(id: number) {
  try {
    const response = await apiGet<IRestaurante>(`/restaurantes/${id}`);
    return response;
  } catch (error) {
    console.error("Erro ao buscar restaurante por id:", error);
    throw error;
  }
}

export async function RestauranteGetAll() {
  try {
    const response = await apiGet<IRestaurante[]>(`/restaurantes`);
    return response;
  } catch (error) {
    console.error("Erro ao buscar todos os restaurantes:", error);
    throw error;
  }
}

export async function RestauranteCreate(restaurante: Omit<IRestaurante, "id">) {
  try {
    const reponse = await apiPost<IRestaurante>(`/restaurantes`, restaurante);
    return reponse;
  } catch (error) {
    console.error("Erro ao criar restaurante:", error);
    throw error;
  }
}

export async function RestauranteUpdate(id: number, restaurante: IRestaurante) {
  try {
    const reponse = await apiPut<IRestaurante>(`/restaurantes/${id}`, restaurante);
    return reponse;
  } catch (error) {
    console.error("Erro ao atualizar restaurante:", error);
    throw error;
  }
}

export async function RestauranteRemove(id: number) {
  try {
    const response = await apiDelete<void>(`/restaurantes/${id}`);
    return response;
  } catch (error) {
    console.error("Erro ao remover restaurante:", error);
    throw error;
  }
}
