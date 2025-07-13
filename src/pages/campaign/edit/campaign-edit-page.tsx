// src/pages/campaign/edit/campaign-edit-page.tsx
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCampaign } from "@/hooks/use-campaign";
import PromotionRuleTable from "./components/campaign-promotion-rule-table";
import type { TPromotionRuleResponse } from "@/schema/promotion-rule.schema";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import EditCampaignForm from "./components/overview-campaign-form";
// import CampaignStoreTable from "./components/campaign-store-table";

const CampaignEditPage = () => {
  const { id } = useParams<{ id: string }>();
  const [promotionRulesOfCampaign, setPromotionRulesOfCampaign] = useState<
    TPromotionRuleResponse[]
  >([]);
  // const [storeIds, setStoreIds] = useState<string[]>([]);

  const { getCampaignById } = useCampaign();
  const { data: campaignData } = getCampaignById(id as string);
  useEffect(() => {
    if (
      campaignData &&
      campaignData.data &&
      campaignData.data.data &&
      campaignData.data.data.promotionRules
    ) {
      setPromotionRulesOfCampaign(campaignData.data.data.promotionRules);
    }
    //  if (
    //   campaignData &&
    //   campaignData.data &&
    //   campaignData.data.data &&
    //   campaignData.data.data.storeIds
    // ) {
    //   setStoreIds(campaignData.data.data.storeIds ?? []);
    // }
   
  }, [campaignData]);
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-semibold">Thông tin chiến dịch</h1>
      </div>
      <Tabs defaultValue="overview">
        <TabsList>
          <TabsTrigger value="overview">Tổng quan</TabsTrigger>
          <TabsTrigger value="promotionRulesOfCampaign">
            Các khuyến mãi
          </TabsTrigger>
          <TabsTrigger value="storesAppli ed">Cửa hàng áp dụng</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          <EditCampaignForm initialData={campaignData?.data.data as any} />
        </TabsContent>
        <TabsContent value="promotionRulesOfCampaign">
          <PromotionRuleTable initialData={promotionRulesOfCampaign} />
        </TabsContent>
        <TabsContent value="storesApplied">
          {/* <CampaignStoreTable storeIds={storeIds}/> */}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CampaignEditPage;
