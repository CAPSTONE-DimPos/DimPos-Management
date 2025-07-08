// src/pages/campaign/edit/campaign-edit-page.tsx
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import type { SubmitHandler } from "react-hook-form";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

import { useCampaign } from "@/hooks/use-campaign";
import { campaignApi } from "@/apis/campaign.api";
import { handleApiError } from "@/lib/error";
import {
  UpdateCampaignSchema,
  type TUpdateCampaignRequest,
} from "@/schema/campaign.schema";
import PromotionRuleTable from "./components/promotion-rule-table";
import type { TPromotionRuleBaseSchema } from "@/schema/promotion-rule.schema";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import EditCampaignForm from "./components/overview-campaign-form";

const CampaignEditPage = () => {
  const { id } = useParams<{ id: string }>();
  const [promotionRulesOfCampaign, setPromotionRulesOfCampaign] = useState<
    TPromotionRuleBaseSchema[]
  >([]);

  const { getCampaignById } = useCampaign();
  const { data: campaignData } = getCampaignById(id!);
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
          <TabsTrigger value="storesApplied">Cửa hàng áp dụng</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          <EditCampaignForm initialData={campaignData?.data.data as any} />
        </TabsContent>
        <TabsContent value="promotionRulesOfCampaign">
          <PromotionRuleTable initialData={promotionRulesOfCampaign} />
        </TabsContent>
        <TabsContent value="storesApplied"></TabsContent>
      </Tabs>
    </div>
  );
};

export default CampaignEditPage;
