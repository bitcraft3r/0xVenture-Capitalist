import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';

import { useStore } from "@/app/store/GameStore"
import { useState } from 'react';

const UpgradesModal = ({ children, playerUpgrades, currentUser }: { children: React.ReactNode, playerUpgrades: any[], currentUser: any }) => {

    const router = useRouter();

    const [isLoading, setIsLoading] = useState(false)

    const [userCoins, addCoins] = useStore(
        (state) => [
            state.userCoins,
            state.addCoins,
        ]
    )

    const upgradeHandler = async (upgradeId: string, price: number, userCoins: number, purchased: boolean, businessName: string, upgradeDescription: string) => {
        // console.log(`upgradeHandler`)
        setIsLoading(true)

        try {
            fetch(`/api/player/upgrade/buy/${currentUser.id}?upgradeId=${upgradeId}&price=${price}&userCoins=${userCoins}&businessName=${businessName}&upgradeDescription=${upgradeDescription}`, { method: 'GET' })
                .then((response) => response.json())
                .then((data) => {
                    // console.log(data);
                    if (data.success) {
                        addCoins(-price);
                        toast.success(data.success);
                        router.refresh();
                    }
                    else if (data.error) { toast.error(data.error) }
                })
        } catch (error) {
            console.log(error)
        } finally {
            router.refresh();
            setIsLoading(false)
        }
    }

    return (
        <Dialog.Root>
            <Dialog.Trigger asChild>
                {children}
            </Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay className="bg-blackA9 data-[state=open]:animate-overlayShow fixed inset-0 z-20" />
                <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[80vw] max-w-[80vw] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none z-30 overflow-y-auto">
                    <Dialog.Title className="text-mauve12 m-0 text-[17px] font-medium">
                        Upgrades
                    </Dialog.Title>
                    <Dialog.Description className="text-mauve11 mt-[10px] mb-5 text-[15px] leading-normal">
                        <span className="font-mono font-semibold">You gotta spend money to make money!</span>
                        <br />
                        Purchase these fine quality upgrades to give your business a boost.
                    </Dialog.Description>
                    {playerUpgrades?.map(upgrade => (
                        <div key={upgrade.id} className="flex justify-between items-center border-b border-gray-200 py-2">
                            <div className="flex items-center">
                                <div className="font-bold text-lg">{upgrade.name}</div>
                            </div>
                            <div className="flex items-center flex-col">

                                <div className="font-strong">{upgrade.description}</div>
                                <div className="flex">
                                    <div className="text-sm text-gray-500 mr-[10px]">Purchase for</div>
                                    <div className="text-sm font-bold">{(upgrade.price).toLocaleString("en", { style: "currency", currency: "USD", maximumFractionDigits: 0 })}</div>
                                </div>
                            </div>
                            <button
                                onClick={() => upgradeHandler(upgrade.id, upgrade.price, userCoins, upgrade.purchased, upgrade.business, upgrade.description)}
                                disabled={isLoading}
                                className={`
                                    py-2 px-5 border rounded-xl text-xl
                                    ${upgrade.purchased
                                        ? 'disabled bg-emerald-200 hover:cursor-not-allowed'
                                        : userCoins < upgrade.price
                                            ? 'disabled hover:cursor-not-allowed bg-gray-300 hover:bg-gray-400'
                                            : 'bg-sky-200 hover:bg-sky-400'

                                    }
                                    ${isLoading
                                        ? 'disabled hover:cursor-not-allowed'
                                        : ''
                                    }
                                `}
                            >
                                {upgrade.purchased ? 'Bought' : 'Buy!'}
                            </button>
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

export default UpgradesModal;