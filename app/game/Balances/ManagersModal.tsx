import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';

const ManagersModal = ({ children, playerBusinesses, userCoins }: { children: React.ReactNode, playerBusinesses: any[], userCoins: number }) => (
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
                    <div className="flex justify-between items-center border-b border-gray-200 py-2">
                        <div className="flex items-center">
                            <img src={business.image} alt={business.name} className="h-[50px] w-[50px] mr-[10px]" />
                            {/* <div className="flex flex-col"> */}
                            {/* </div> */}
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
                            onClick={() => { }}
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
                {/* <button
                    onClick={() => signIn('google')}
                    className="bg-white border text-black hover:bg-gray-100 hover:border-gray-400 hover:shadow-md inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none w-full text-sm"
                >
                    <div className="absolute left-10">
                        <FcGoogle />
                    </div>
                    Continue with Google
                </button>
                <button
                    onClick={() => signIn('twitter')}
                    className="bg-white border text-black hover:bg-gray-100 hover:border-gray-400 hover:shadow-md inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none w-full text-sm mt-[1rem]"
                >
                    <div className="absolute left-10">
                        <TwitterLogoIcon />
                    </div>
                    Continue with Twitter
                </button>
                <button
                    onClick={() => signIn('github')}
                    className="bg-white border text-black hover:bg-gray-100 hover:border-gray-400 hover:shadow-md inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none w-full text-sm mt-[1rem]"
                >
                    <div className="absolute left-10">
                        <GitHubLogoIcon />
                    </div>
                    Continue with Github
                </button> */}
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

export default ManagersModal;