// const apikey = 'Bearer veaxLaEE5uG57slAMSBA-Rc3';
export const apikey = JSON.parse(localStorage.getItem("userdata"));
export const url = "http://localhost:5000/figoor/api";

const options = {
  headers: {
    "Content-Type": "application/json",
  },
};

// const option = {
//     headers: {
//       'Content-Type': 'application/json',
//       Authorization: `${apikey}`,
//     },
//   };

const postOptions = {
  ...options,
  method: "POST",
};

export const getItems = async () => {
  return await fetch(`${url}`, options).then((response) => response.json());
};

export const getsingleItems = async (id) => {
  return await fetch(`${url}/product/${id}`, options).then((response) =>
    response.json()
  );
};

export const getPlaylist = async () => {
  return await fetch(`${url}/playlists`, options).then((response) =>
    response.json()
  );
};

export const postItem = async (itemData) => {
  return await fetch(`${url}/register`, {
    ...postOptions,
    body: JSON.stringify(itemData),
  }).then((response) => response.json());
};
