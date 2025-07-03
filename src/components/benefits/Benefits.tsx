import { Button, Chip, Image } from "@heroui/react";
import HeaderWithDescription from "@/components/common/TwoColorHeaderWithDescription";
import benefitsData from '../../../public/data/benefitsData.json';
import { ScanQR } from "@/components/icons";

export const Benefits = () => {
    return (
        <section className='py-20 px-10 bg-white text-black'>
            <HeaderWithDescription titleBold={benefitsData.titleBold} titleThin={benefitsData.titleThin} description={benefitsData.description} />
            <div className="my-auto flex flex-col md:flex-row gap-10 items-center justify-between pt-10 ">
                <div className="md:w-1/2">
                    <Chip
                        radius='md'
                        variant="flat"
                        color="primary"
                        className='bg-opacity-30 pr-2 rounded-md ps-0 h-8 text-primary mb-10'
                        startContent={<ScanQR className='bg-white bg-opacity-10 h-full rounded-md p-2 w-8' color='#7d01d4' />}
                    >
                        {benefitsData.primaryButton.text}
                    </Chip>
                    <h3 className='uppercase text-3xl'>
                        <span className='block'>{benefitsData.simpleScans.titleThin}</span>
                        <span className='block font-bold'>{benefitsData.simpleScans.titleBold}</span>
                    </h3>
                    <p className='my-10'>{benefitsData.description}</p>
                    <Button className="mt-14 bg-black text-white"></Button>
                </div>
                <Image className="md:w-1/2" removeWrapper radius="lg" src={benefitsData.image} />
            </div>
        </section>
    );
}