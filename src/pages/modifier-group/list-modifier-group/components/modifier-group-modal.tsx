import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import CreateModifierGroupForm from "./create-modifier-group-form";

interface Props {
  open: boolean;
  onClose: () => void;
  onSuccess?: () => void;
}

const ModifierGroupModal = ({ open, onClose, onSuccess }: Props) => {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent
  className="!w-full !max-w-[90vw] lg:!max-w-[800px] h-[95vh] overflow-y-auto p-6 bg-background border-none rounded-xl shadow-xl"
>
        <DialogHeader className="flex flex-row justify-between items-center mb-4">
          <DialogTitle className="text-2xl font-semibold">
            Tạo Nhóm Tùy Chọn
          </DialogTitle>
          
        </DialogHeader>

        <CreateModifierGroupForm
          onSuccess={() => {
            onSuccess?.();
            onClose();
          }}
        />
      </DialogContent>
    </Dialog>
  );
};

export default ModifierGroupModal;
