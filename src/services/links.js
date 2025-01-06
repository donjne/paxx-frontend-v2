import axios from "axios";

const baseURL =
  process.env.NODE_ENV === "production"
    ? "https://api.usepaxx.xyz"
    : "http://localhost:1338";

export async function createLink(payload, token) {
  try {
    const response = await axios.post(
      `${baseURL}/api/v1/link/create`,
      payload,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function updateLink(id, payload, token) {
  try {
    const response = await axios.patch(
      `${baseURL}/api/v1/link/update/${id}`,
      payload,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getAllLinks(payload) {
  try {
    const response = await axios.get(`${baseURL}/api/v1/links`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getLink(id, payload) {
  try {
    const response = await axios.get(`${baseURL}/api/v1/link/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    
  } catch (error) {
    console.error(error);
    throw error;
  }
}
