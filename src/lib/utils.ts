export const getIdFromUrl = (url: string): string => url.match(new RegExp(/([^\/]+)\/?$/))![1];

export const normalize = (query: string) => query.trim().normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();