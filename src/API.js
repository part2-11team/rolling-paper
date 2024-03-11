import axios from 'axios';
import { getQueryURL } from './assets/utils/getQueryURL';
import useRequest from './useRequest';

const BASE_URL = `https://rolling-api.vercel.app`;

const BASE_ID = '4-11';

const IMGGUT_URL = 'https://api.imgur.com/3/image';

const CLIENT_ID = '4c8db1c88e920c2';

export const getMessageCardData = async (
  userID,
  limit = null,
  offset = null,
) => {
  const queryURL = getQueryURL(limit, offset);
  try {
    const response = await axios.get(
      `${BASE_URL}/${BASE_ID}/recipients/${userID}/messages/${queryURL}`,
    );
    const data = response.data.results;
    const count = response.data.count;
    return { data, count, error: null };
  } catch (error) {
    return { data: null, count: null, error: error };
  }
};

export const deleteMessageCardData = async (CardID) => {
  try {
    await axios.delete(`${BASE_URL}/${BASE_ID}/messages/${CardID}/`);
    return { error: null };
  } catch (error) {
    return { error: error };
  }
};
export const getRecipientData = async (userID) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/${BASE_ID}/recipients/${userID}/`,
    );
    const {
      name,
      backgroundColor,
      backgroundImageURL,
      messageCount,
      recentMessages,
      reactionCount,
      topReactions,
    } = response.data;
    return {
      name,
      backgroundColor,
      backgroundImageURL,
      messageCount,
      recentMessages,
      reactionCount,
      topReactions,
      error: null,
    };
  } catch (error) {
    return { error: error };
  }
};

export const deleteRecipient = async (userID) => {
  try {
    await axios.delete(`${BASE_URL}/${BASE_ID}/recipients/${userID}/`);
    return { error: null };
  } catch (error) {
    return { error: error };
  }
};

// --- List Page ---

function getRecipientsData() {
  const { data: getRecentPaperData, isLoading: isLoadingRecent } = useRequest({
    options: {
      url: 'recipients/',
      method: 'get',
    },
  });

  const { data: getPopularPaperData, isLoading: isLoadingPopular } = useRequest(
    {
      options: {
        url: 'recipients/',
        method: 'get',
        params: {
          sort: 'like',
        },
      },
    },
  );
  return {
    getPopularPaperData,
    isLoadingPopular,
    getRecentPaperData,
    isLoadingRecent,
  };
}
export default getRecipientsData;

// --- subheader
export const getEmojiData = async (userID) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/${BASE_ID}/recipients/${userID}/reactions/`,
    );
    const { results } = response.data;

    return {
      results,
      error: null,
    };
  } catch (error) {
    return { error: error };
  }
};

export const postEmoji = async (userID, emoji) => {
  try {
    const data = {
      emoji: emoji,
      type: 'increase',
    };
    const response = await axios.post(
      `${BASE_URL}/${BASE_ID}/recipients/${userID}/reactions/`,
      data,
    );
    return response;
  } catch (error) {
    return { error: error };
  }
};

// --- postMessage
export const getImgUrl = async (file) => {
  try {
    const formData = new FormData();
    formData.append('image', file);
    const response = await axios.post(IMGGUT_URL, formData, {
      headers: {
        Authorization: `Client-ID ${CLIENT_ID}`,
      },
    });
    return response.data.data.link;
  } catch (error) {
    return;
  }
};
export const getProfileImages = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/profile-images/`);
    return response.data.imageUrls;
  } catch (error) {
    return { error: error };
  }
};

export const postMessage = async (data) => {
  const url = `${BASE_URL}/${BASE_ID}/recipients/${data.recipientId}/messages/`;
  try {
    const response = await axios.post(url, data);
    return { success: true, data: response.data };
  } catch (error) {
    return { error: error };
  }
};

// --- Post Page

export const getBackgroundImages = async () => {
  try {
    const response = await axios.get(
      'https://rolling-api.vercel.app/background-images/',
    );
    const src = response.data.imageUrls;
    return { src, error: null };
  } catch (error) {
    return { src: null, error: error };
  }
};

export const postDataToRecipient = async (postData) => {
  const BASE_URL = 'https://rolling-api.vercel.app';
  const BASE_ID = '4-11';
  const url = `${BASE_URL}/${BASE_ID}/recipients/`;
  try {
    const response = await axios.post(url, postData);
    const idData = response.data.id;
    return { idData, error: null };
  } catch (error) {
    return { idData: null, error: error };
  }
};
