import { z } from "zod";

export const StorePaymentMethodConfigSchema = z.object({
  id: z.string(),
  systemPaymentMethodId: z.string(),
  name: z.string(),
  code: z.string(),
  description: z.string(),
  paymentMethod: z.number(),
  isActiveByStore: z.boolean(),
  createdDate: z.string(),
  lastModifiedDate: z.string().nullable(),
});

export const StorePaymentMethodConfigListSchema = z.array(StorePaymentMethodConfigSchema);

export type TStorePaymentMethodConfig = z.infer<typeof StorePaymentMethodConfigSchema>;
