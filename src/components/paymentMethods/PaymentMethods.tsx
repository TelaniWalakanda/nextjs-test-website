import { Card, Image } from '@heroui/react';
import paymentMethodsData from '../../../public/data/paymentMethods.json';
import HeaderWithDescription from '@/components/common/TwoColorHeaderWithDescription';

export const PaymentMethods = () => {
    return (
        <section className='py-20 px-10 bg-white text-black'>
            <HeaderWithDescription titleBold={paymentMethodsData.titleBold} titleThin={paymentMethodsData.titleThin} description={paymentMethodsData.description} />
            <div className="hidden md:flex mt-48 flex-row gap-5 justify-between">
                {paymentMethodsData.cards.map((item, index) => (
                    <Card key={index} radius='none' className='bg-transparent'>
                        <Image
                            removeWrapper
                            src={item.image}
                            alt={item.alt}
                            className="w-auto object-contain h-auto"
                        />
                    </Card>
                ))}
            </div>
            <div className="md:hidden mt-12">
                <div className="flex overflow-x-auto gap-5 scrollbar-hide">
                    {paymentMethodsData.cards.map((item, index) => (
                        <Card key={index} radius='lg' className="bg-transparent w-full flex-shrink-0">
                            <Image
                                removeWrapper
                                src={item.image}
                                alt={item.alt}
                                className="w-full object-contain h-auto"
                            />
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );

}