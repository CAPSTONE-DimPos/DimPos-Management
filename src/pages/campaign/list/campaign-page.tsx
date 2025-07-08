import { Button } from "@/components/ui/button";
import { PATH_BRAND_DASHBOARD } from "@/routes/path";
import { CirclePlus } from "lucide-react";
import { Link } from "react-router-dom";
import CampaignTable from "./components/campaign-table";

const CampaignPage = () =>
{

    return (
        <div>
            <div className="flex items-center justify-between mb-6">
                <h1 className="text-2xl font-semibold">Quản lý chiến dịch</h1>
                <Link to={ PATH_BRAND_DASHBOARD.campaign.createCampaign }>
                    <Button>
                        <CirclePlus className="mr-2 h-5 w-5" />
                        Tạo chiến dịch
                    </Button>
                </Link>
            </div>
            <CampaignTable />
        </div>
    );
};

export default CampaignPage;
