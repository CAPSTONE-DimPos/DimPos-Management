// hooks/use-staff.ts
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { staffApi } from "@/apis/staff.api";

export const useStaff = ({ onCreateSuccess }: { onCreateSuccess?: () => void } = {}) => {
  const queryClient = useQueryClient();

  const staffsQuery = useQuery({
    queryKey: ["staffs"],
    queryFn: () => staffApi.getStaffsByStore(),
    select: (res) => res.data.data,
  });

  const createStaffMutation = useMutation({
    mutationFn: staffApi.createStaffsByStore,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["staffs"] });
      onCreateSuccess?.();
    },
  });

  return {
    staffsQuery,
    createStaffMutation,
  };
};
