import { Button, Chip, Image } from '@heroui/react';
import heroData from '../../../public/data/heroData.json';
import { Sparkle } from '../icons';

export const Hero = () => {
    return (
        <section>
            <div className="md:max-h-screen h-fit md:h-screen w-full bg-hero-background bg-cover bg-center pt-16 flex flex-col justify-center relative">
                <div className='mt-20 lg:my-auto px-5 md:px-10 lg:pl-24 md:max-w-[30%] lg:max-w-[45%]'>
                    <Chip
                        radius='md'
                        variant="flat"
                        className='bg-opacity-10 pr-2 bg-white rounded-md ps-0 h-8 text-white'
                        startContent={<Sparkle className='bg-white bg-opacity-10 h-full rounded-md p-2 w-8' color='white' />}
                    >
                        {heroData.chiptext}
                    </Chip>
                    <h1 className="uppercase tracking-wider text-2xl md:text-5xl mt-10 font-thin leading-tight">{heroData.titleThin}</h1>
                    <h1 className="uppercase text-2xl md:text-5xl font-bold">{heroData.titleBold}</h1>
                    <p className="text-lg mt-4 text-gray-300">{heroData.description}</p>
                    <Button color='primary' className='w-fit h-auto p-3 mt-4 px-6'>{heroData.primaryButton.text}<span><Image src="right-arrow.png" /></span></Button>
                </div>
                <div className='justify-items-end pr-[6%] py-5 md:py-0 md:pr-0 md:absolute z-1 top-[45%] right-[10%] lg:right-[15%] max-h-[500px] md:max-w-[500px]'>
                    <Image src={heroData.heroImage} alt="Hero Image" className='h-[430px]' />
                </div>
            </div>
            <div className='grid grid-cols-2 sm:grid-cols-3 px-5 md:px-10 lg:pl-24 bg-primary py-7 md:gap-5'>
                <div className="col-span-2 sm:col-span-1">
                    <p className='text-xl lg:text-3xl md:tracking-wide'>{heroData.heroBottom.rightText.textThin}</p>
                    <p className='text-xl lg:text-3xl font-semibold'>{heroData.heroBottom.rightText.textBold}</p>
                </div>
                <div className="lg:ml-5 col-span-2 grid grid-cols-3 gap-4 mt-10 sm:mt-0">
                    {heroData.heroBottom.leftText.map((item, index) => (
                        <div key={index} className='flex flex-col items-start justify-between'>
                            <p className="font-semibold text-xl lg:text-3xl">{item.textBold}</p>
                            <p className="opacity-80 text-lg lg:text-lg">{item.textThin}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
