import { Button, Chip, Image } from '@heroui/react';
import heroData from '../../../public/data/heroData.json';
import { Sparkle } from '../icons';

export const Hero = () => {
    return (
        <section>
            <div className="max-h-screen h-[1000px] w-full bg-hero-background bg-cover bg-center pt-16 flex flex-col justify-center relative">
                <div className='my-auto pl-24 max-w-[30%] lg:max-w-[45%]'>
                    <Chip
                        radius='md'
                        variant="flat"
                        className='bg-opacity-10 pr-2 bg-white rounded-md ps-0 h-8 text-white'
                        startContent={<Sparkle className='bg-white bg-opacity-10 h-full rounded-md p-2 w-8' color='white' />}
                    >
                        {heroData.chiptext}
                    </Chip>
                    <h1 className="uppercase tracking-wider text-5xl mt-10 font-thin leading-tight">{heroData.titleThin}</h1>
                    <h1 className="uppercase text-5xl font-bold">{heroData.titleBold}</h1>
                    <p className="text-lg mt-4 text-gray-300">{heroData.description}</p>
                    <Button color='primary' className='w-fit h-auto p-3 mt-4 px-6'>{heroData.primaryButton.text}<span><Image src="right-arrow.png" /></span></Button>
                </div>
            </div>
            <div className='absolute z-50 top-[45%] right-[15%] max-h-[500px] max-w-[500px]'>
                <Image src={heroData.heroImage} alt="Hero Image" className='h-[430px]' />
            </div>
            <div className='grid grid-cols-3 px-24 bg-primary py-7'>
                <div className="col-span-1">
                    <p className='text-3xl tracking-wide'>{heroData.heroBottom.rightText.textThin}</p>
                    <p className='text-3xl font-semibold'>{heroData.heroBottom.rightText.textBold}</p>
                </div>
                <div className="col-span-2 grid grid-cols-3 gap-4">
                    {heroData.heroBottom.leftText.map((item, index) => (
                        <div key={index}>
                            <p className="font-semibold text-3xl">{item.textBold}</p>
                            <p className="opacity-80 text-lg">{item.textThin}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
