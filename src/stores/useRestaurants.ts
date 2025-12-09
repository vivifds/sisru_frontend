import { defineStore } from 'pinia'
import { Restaurant } from '../types/Restaurant'
import { apiGet, apiPost, apiPut, apiDelete } from '../services/api'

export const useRestaurants = defineStore('restaurants', {
  state: () => ({
    list: [] as Restaurant[],
    loading: false as boolean,
    error: '' as string,
  }),
  actions: {
    async fetchAll() {
      this.loading = true
      this.error = ''
      try {
        this.list = await apiGet<Restaurant[]>('/restaurants')
      } catch (e: any) {
        this.error = e?.message ?? 'Erro ao carregar restaurantes'
      } finally {
        this.loading = false
      }
    },
    async create(payload: Omit<Restaurant, 'id'>) {
      const created = await apiPost<Restaurant>('/restaurants', payload)
      this.list.unshift(created)
    },
    async update(id: number, payload: Partial<Restaurant>) {
      const updated = await apiPut<Restaurant>(`/restaurants/${id}`, payload)
      const idx = this.list.findIndex((r) => r.id === id)
      if (idx >= 0) this.list[idx] = updated
    },
    async remove(id: number) {
      await apiDelete(`/restaurants/${id}`)
      this.list = this.list.filter((r) => r.id !== id)
    },
  },
  getters: {
    byQuery: (state) => (q: string) => {
      const term = q.trim().toLowerCase()
      if (!term) return state.list
      return state.list.filter((r) =>
        [r.nome, r.endereco, r.campus].some((v) => String(v).toLowerCase().includes(term)),
      )
    },
  },
})
