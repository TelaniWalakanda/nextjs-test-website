import { Image } from "@heroui/react";
import { FormContent } from "@/components/sign-up";

export const SignUpForm = () => {
    return (<>
        <div className="bg-white h-screen w-full flex flex-row justify-between ">
            <div className="flex flex-col text-black w-full sm:w-1/2 p-10"><h4 className="text-3xl mb-10 text-primary">Sign Up</h4>
                <FormContent />
            </div>

            <div className='hidden sm:block w-1/2 h-screen'><Image removeWrapper src={'/frames/hero-background.png'} className="float-end h-screen w-auto object-cover rounded-none" /></div>
        </div>
    </>
    );
}