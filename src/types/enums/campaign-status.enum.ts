export const CampaignStatusEnum = {
    Inactive : 0,
    Active : 1,
    Paused : 2,
    Completed : 3
} as const;
export type TCampaignStatusEnum = typeof CampaignStatusEnum[keyof typeof CampaignStatusEnum];