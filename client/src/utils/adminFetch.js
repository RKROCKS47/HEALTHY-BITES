const API = import.meta.env.VITE_API_BASE;

export function adminFetch(path, options = {}) {
  const adminKey = localStorage.getItem("ADMIN_KEY");

  return fetch(`${API}${path}`, {
    ...options,
    headers: {
      ...(options.headers || {}),
      "x-admin-key": adminKey,
    },
  });
}

