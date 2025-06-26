import ConfirmIllustration from '@/assets/illustration/confirm-illustration'
import { Button } from '@/components/ui/button'
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog'

type Props = {
    open: boolean
    onOpenChange: ( open: boolean ) => void
    title?: string
    description?: string
    actionLabel?: string
    onAction?: () => void
}

const ConfirmDialog = ( {
    open,
    onOpenChange,
    title = "Xác nhận hành động",
    description = "Bạn có chắc chắn muốn thực hiện hành động này?",
    actionLabel = "Xác nhận",
    onAction,
}: Props ) =>
{
    const handleConfirm = () =>
    {
        // Execute the action if provided
        if ( onAction )
        {
            onAction();
        }
        // Close the dialog
        onOpenChange( false );
    }
    return (
        <Dialog open={ open } onOpenChange={ onOpenChange }>
            <DialogContent className="sm:max-w-[600px] rounded-3xl">
                <DialogHeader>
                    <DialogTitle className='text-2xl font-semibold'>
                        { title }
                    </DialogTitle>
                    <DialogDescription className='text-sm font-normal text-foreground'>
                        { description }
                    </DialogDescription>
                </DialogHeader>
                <div className="flex justify-center">
                    <ConfirmIllustration className="size-60" />
                </div>
                <DialogFooter className="flex-col sm:flex-row sm:justify-end gap-2">
                    <DialogClose asChild>
                        <Button variant="outline" className="text-sidebar-label">
                            Hủy
                        </Button>
                    </DialogClose>
                    {/* <DialogClose asChild> */ }
                    <Button
                        type='button'
                        onClick={ handleConfirm }
                    >
                        { actionLabel }
                    </Button>
                    {/* </DialogClose> */ }

                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default ConfirmDialog