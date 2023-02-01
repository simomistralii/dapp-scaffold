import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
export const Footer: FC = () => {
    return (
        <div className="relative ">
            <footer className="border-t-2 border-[#141414] bg-black hover:text-white absolute w-full bottom-0" >
                <div className="ml-12 py-1 mr-12">
                    <div className="grid grid-cols-1 gap-2 md:gap-8 md:space-x-12 relative">
                        <div className='flex col-span-2 mx-4 items-center md:items-start justify-between'>
                            <div className='flex flex-row ml-1 my-auto'>
                                <Link href="/" target="_blank" rel="noopener noreferrer" passHref className="text-secondary hover:text-white">
                                    <div className='flex flex-row ml-1'>
                                        <img src="/nalcoin_logo.png" style={{height:'3rem'}}  alt="solana icon" />
                                        {/* <Image
                                            src="/nalcoin_logo.png"
                                            alt="solana icon"
                                            width={156}
                                            height={26}
                                        /> */}
                                    </div>
                                </Link>
                            </div>
                            <div className="flex md:ml-2 my-auto">
                                <a href="https://twitter.com/nalcoin" type="button" className="border-white text-secondary hover:text-white leading-normal hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1">
                                    <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="twitter" className="w-4 h-full mx-auto" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path
                                        fill="currentColor"
                                        d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                                    ></path>
                                    </svg>
                                </a>
                                <a href="https://discord.gg/DZhJYvJKR4"  type="button" className="border-white text-secondary hover:text-white leading-normal hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1">
                                    <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" className="w-4 h-full mx-auto" data-icon="discord" viewBox="0 0 16 16" focusable="false" data-prefix="fab" >
                                        <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"/>
                                    </svg>
                                </a>
                            </div>
                            <div className=" m-1 sm:text-left place-items-start items-start font-normal tracking-tight text-secondary my-auto">
                                        © 2023 All rights reserved
                            </div>
                        </div>

                        {/* <div className="mb-6 items-center mx-auto max-w-screen-lg">
                            <div className="font-normal capitalize mb-2.5">SOLANA</div>

                            <div className="flex flex-col mb-0 gap-2">
                                <Link href="https://solana.com" target="_blank" rel="noopener noreferrer" passHref className="text-secondary hover:text-white">
                                    Labs
                                </Link>
                                <Link href="https://solana.org" target="_blank" rel="noopener noreferrer" passHref className="text-secondary hover:text-white">
                                    Foundation
                                </Link>
                                <Link href="https://solanamobile.com/" target="_blank" rel="noopener noreferrer" passHref className="text-secondary hover:text-white">
                                    Solana Mobile
                                </Link>
                                <Link href="https://solanapay.com/" target="_blank" rel="noopener noreferrer" passHref className="text-secondary hover:text-white">
                                    Solana Pay
                                </Link>
                                <Link href="https://solana.org/grants" target="_blank" rel="noopener noreferrer" passHref className="text-secondary hover:text-white">
                                    Grants
                                </Link>
                            </div>
                        </div>

                        <div className="mb-6 items-center mx-auto max-w-screen-lg">
                            <h5 className="font-normal capitalize tracking-tight  mb-2.5">DEVELOPERS</h5>

                            <div className="flex flex-col mb-0 gap-2">
                                <Link href="https://docs.solana.com/developers" target="_blank" rel="noopener noreferrer" passHref className="text-secondary hover:text-white">
                                    Documentation
                                </Link>
                                <Link href="https://github.com/solana-mobile/solana-mobile-stack-sdk" target="_blank" rel="noopener noreferrer" passHref className="text-secondary hover:text-white">
                                    Mobile SDK
                                </Link>
                                <Link href="https://github.com/solana-labs/solana-pay" target="_blank" rel="noopener noreferrer" passHref className="text-secondary hover:text-white">
                                    Pay SDK
                                </Link>
                                <Link href="https://solanacookbook.com/" target="_blank" rel="noopener noreferrer" passHref className="text-secondary hover:text-white">
                                    Cookbook
                                </Link>
                                <Link href="https://solana.com/developers/dao" target="_blank" rel="noopener noreferrer" passHref className="text-secondary hover:text-white">
                                    DAOs
                                </Link>
                            </div>
                        </div>

                        <div className="mb-6 items-center mx-auto max-w-screen-lg">
                            <h5 className="font-normal tracking-tight  mb-2.5">ECOSYSTEM</h5>

                            <div className="flex flex-col mb-0 gap-2">
                                <Link href="https://solana.com/news" target="_blank" rel="noopener noreferrer" passHref className="text-secondary hover:text-white">
                                    News
                                </Link>
                                <Link href="https://solana.org/validators" target="_blank" rel="noopener noreferrer" passHref className="text-secondary hover:text-white">
                                    Validators
                                </Link>
                                <Link href="https://www.youtube.com/@SolanaFndn" target="_blank" rel="noopener noreferrer" passHref className="text-secondary hover:text-white">
                                    Youtube
                                </Link>
                                <Link href="https://app.realms.today/discover" target="_blank" rel="noopener noreferrer" passHref className="text-secondary hover:text-white">
                                    Realms
                                </Link>
                                <Link href="https://www.solanau.org" target="_blank" rel="noopener noreferrer" passHref className="text-secondary hover:text-white">
                                    Solana U
                                </Link>
                            </div>
                        </div> */}
                    </div>
                </div>
            </footer>
        </div>
    );
};
