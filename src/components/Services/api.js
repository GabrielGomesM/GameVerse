import axios from "axios";

const api = axios.create({
  baseURL: "https://api.rawg.io/api",
  timeout: 15000,
});

export async function buscarJogos(termo) {
  const params = {
    key: import.meta.env.VITE_RAWG_KEY,
    page_size: 24,
    ordering: "-added",
  };
  if (termo.trim()) params.search = termo.trim();

  const { data } = await api.get("/games", { params });

  // Organizar os dados de cada jogo
  return data.results.map((jogo) => ({
    id: jogo.id,
    name: jogo.name,
    background_image: jogo.background_image,
    released: jogo.released,
    rating: jogo.rating,
    genres: jogo.genres || [],
    platforms: (jogo.platforms || []).map((p) => ({
      id: p.platform.id,
      name: p.platform.name,
    })),
  }));
}

export default api;