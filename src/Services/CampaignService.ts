import axios from "axios";
import { CampaignData, CampaignResponse } from "../Types/CampaignTypes";
import { API_BASE } from "../Config/Env";

export const sendCampaign = async (data: CampaignData): Promise<CampaignResponse> => {
  try {
    const response = await axios.post(`${API_BASE}/campaign/emails`, data);
    console.log(response.data);

    return response.data;
  } catch (error) {
    console.error('Error sending campaign:', error);
    throw error;
  }
};

export const getCampaigns = async (): Promise<CampaignData[]> => {
  try {
    const response = await axios.get(`${API_BASE}/campaigns`);
    return response.data;
  } catch (error) {
    console.error('Error fetching campaigns:', error);
    throw error;
  }
};
