import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import UnlocksGalleryModal from './UnlocksGalleryModal';

const UnlocksModal = ({ children, playerBusinesses }: { children: React.ReactNode, playerBusinesses: any[] }) => {

    // map playerBusinesses, if business quantity is less than the tier, show the name of business + next tier's unlock message e.g. "Lemonade Stand \n 2x Speed". also show the next tier's quantity.

    const tiers = [
        { quantityMin: 0, quantityMax: 25, unlock: "2x Speed" },
        { quantityMin: 25, quantityMax: 50, unlock: "2x Speed" },
        { quantityMin: 50, quantityMax: 100, unlock: "2x Speed" },
        { quantityMin: 100, quantityMax: 200, unlock: "2x Speed" },
        { quantityMin: 200, quantityMax: 300, unlock: "2x Speed" },
        { quantityMin: 300, quantityMax: 400, unlock: "2x Speed" },
        { quantityMin: 400, quantityMax: 500, unlock: "4x Revenue" },
        { quantityMin: 500, quantityMax: 600, unlock: "4x Revenue" },
        { quantityMin: 600, quantityMax: 700, unlock: "4x Revenue" },
        { quantityMin: 700, quantityMax: 800, unlock: "4x Revenue" },
        { quantityMin: 800, quantityMax: 900, unlock: "4x Revenue" },
        { quantityMin: 900, quantityMax: 1000, unlock: "5x Revenue" },
        { quantityMin: 1000, quantityMax: 1100, unlock: "4x Revenue" },
        { quantityMin: 1100, quantityMax: 1200, unlock: "4x Revenue" },
        { quantityMin: 1200, quantityMax: 1300, unlock: "4x Revenue" },
        { quantityMin: 1300, quantityMax: 1400, unlock: "4x Revenue" },
        { quantityMin: 1400, quantityMax: 1500, unlock: "4x Revenue" },
        { quantityMin: 1500, quantityMax: 1600, unlock: "4x Revenue" },
        { quantityMin: 1600, quantityMax: 1700, unlock: "4x Revenue" },
        { quantityMin: 1700, quantityMax: 1800, unlock: "4x Revenue" },
        { quantityMin: 1800, quantityMax: 1900, unlock: "4x Revenue" },
        { quantityMin: 1900, quantityMax: 2000, unlock: "5x Revenue" },
        { quantityMin: 2000, quantityMax: 2250, unlock: "2x Revenue" },
        { quantityMin: 2250, quantityMax: 2500, unlock: "2x Revenue" },
        { quantityMin: 2500, quantityMax: 2750, unlock: "2x Revenue" },
        { quantityMin: 2750, quantityMax: 3000, unlock: "5x Revenue" },
        { quantityMin: 3000, quantityMax: 3250, unlock: "2x Revenue" },
        { quantityMin: 3250, quantityMax: 3500, unlock: "2x Revenue" },
        { quantityMin: 3500, quantityMax: 3750, unlock: "2x Revenue" },
        { quantityMin: 3750, quantityMax: 4000, unlock: "5x Revenue" },
        { quantityMin: 4000, quantityMax: 4250, unlock: "2x Revenue" },
        { quantityMin: 4250, quantityMax: 4500, unlock: "2x Revenue" },
        { quantityMin: 4500, quantityMax: 4750, unlock: "2x Revenue" },
        { quantityMin: 4750, quantityMax: 5000, unlock: "5x Revenue" },
    ]

    return (
        <Dialog.Root>
            <Dialog.Trigger asChild>
                {children}
            </Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay className="bg-blackA9 data-[state=open]:animate-overlayShow fixed inset-0 z-20" />
                <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[80vw] max-w-[80vw] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none z-30 overflow-y-auto">
                    <Dialog.Title className="text-mauve12 m-0 text-[17px] font-medium">
                        Unlocks
                    </Dialog.Title>
                    <Dialog.Description className="text-mauve11 mt-[10px] mb-5 text-[15px] leading-normal">
                        <span className="font-mono font-semibold">Want to maximize profits?</span>
                        <br />
                        Look no further! Get your investments to these quotas to unlock sweet profit bonuses! It's Recursiveriffic!
                    </Dialog.Description>
                    {playerBusinesses.map(business => (
                        <div key={business.id} className="flex justify-between items-center border-b border-gray-200 py-2">
                            <div className="flex flex-col items-center">
                                <img src={business.image} alt={business.name} className="h-[50px] w-[50px] mr-[10px]" />
                            </div>
                            <div className="flex items-center flex-col text-center">
                                <div className="font-bold text-lg">{business.name}</div>
                                <div className="font-strong">
                                    {tiers.map((tier, index) => (
                                        <div key={index} className="flex flex-col">
                                            {business.quantity >= tier.quantityMin && business.quantity < tier.quantityMax && (
                                                <>
                                                    <div>Next unlock: {tier.quantityMax}</div>
                                                    <div>Next bonus: {tier.unlock}</div>
                                                </>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <UnlocksGalleryModal name={business.name} quantity={business.quantity}>
                                <button
                                    className={`
                                    py-2 px-5 border rounded-xl text-xl hover:bg-emerald-200
                          
                                        `}
                                >
                                    View
                                </button>
                            </UnlocksGalleryModal>

                        </div>
                    ))}
                    <Dialog.Close asChild>
                        <button
                            className="text-black hover:bg-gray-200 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full"
                            aria-label="Close"
                        >
                            <Cross2Icon />
                        </button>
                    </Dialog.Close>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
}

export default UnlocksModal;