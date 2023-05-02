import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';

import { useStore } from "@/app/store/GameStore"

const ManagersModal = ({ children, playerBusinesses, userCoins, currentUser }: { children: React.ReactNode, playerBusinesses: any[], userCoins: number, currentUser: any }) => {

    const router = useRouter();

    const [addCoins] = useStore(
        (state) => [
            state.addCoins,
        ]
    )

    const purchaseHandler = async (businessId: string, managerCost: number, userCoins: number, managerOwned: boolean) => {
        console.log(`purchaseHandler`)

        try {
            fetch(`/api/player/business/manager/${currentUser.id}?businessId=${businessId}&managerCost=${managerCost}&userCoins=${userCoins}&managerOwned=${managerOwned}`, { method: 'GET' })
                .then((response) => response.json())
                .then((data) => {
                    // console.log(data);
                    if (data.success) {
                        addCoins(-managerCost);
                        toast.success(data.success);
                        router.refresh();
                    }
                    else if (data.error) { toast.error(data.error) }
                })
        } catch (error) {
            console.log(error)
        } finally {
            router.refresh();
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
                        Managers
                    </Dialog.Title>
                    <Dialog.Description className="text-mauve11 mt-[10px] mb-5 text-[15px] leading-normal">
                        <span className="font-mono font-semibold">Managers make life easier!</span>
                        <br />
                        Hire one to run your business for you, or to maximize efficiency, all for just one easy payment! Salary schmalary!
                    </Dialog.Description>
                    {playerBusinesses.map(business => (
                        <div key={business.id} className="flex justify-between items-center border-b border-gray-200 py-2">
                            <div className="flex items-center">
                                <img src={business.image} alt={business.name} className="h-[50px] w-[50px] mr-[10px]" />
                            </div>
                            <div className="flex items-center flex-col">
                                <div className="font-bold text-lg">{business.managerName}</div>
                                <div className="font-strong">Runs {business.name}</div>
                                <div className="flex">
                                    <div className="text-sm text-gray-500 mr-[10px]">Hire for</div>
                                    <div className="text-sm font-bold">{(business.managerCost).toLocaleString("en", { style: "currency", currency: "USD", maximumFractionDigits: 0 })}</div>
                                </div>
                            </div>
                            <button
                                onClick={() => purchaseHandler(business.id, business.managerCost, userCoins, business.managerOwned)}
                                className={`
                                    py-2 px-5 border rounded-xl text-xl
                                    ${business.managerOwned
                                        ? 'disabled bg-emerald-200 hover:cursor-not-allowed'
                                        : 'bg-sky-200 hover:bg-sky-400'
                                    }
                                    ${userCoins < business.managerCost
                                        ? 'disabled hover:cursor-not-allowed bg-gray-300 hover:bg-gray-400'
                                        : ''
                                    }
                                `}
                            >
                                {business.managerOwned ? 'Hired' : 'Hire!'}
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

export default ManagersModal;