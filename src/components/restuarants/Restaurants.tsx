import React from 'react';
import restaurantsData from '../../../public/data/restaurantsData.json';

export const Restaurants = () => {
    return (
        <section>
            <div className="grid grid-cols-2">
                {restaurantsData.restaurants.map((item, index) => (
                    <div key={index} className='border border-gray-700 p-7 sm:p-12 2xl:p-16'>
                        <p className="font-semibold text-center lg:text-left text-lg md:text-3xl opacity-50 mb-5 mx-4">{item.name}</p>
                        <div className='grid justify-center lg:grid-cols-2 xl:grid-cols-4 gap-5 flex-row lg:justify-between items-center overflow-hidden px-4'>
                            {item.images.map((img, i) => (
                                <img
                                    src={img}
                                    key={i}
                                    className='w-full object-contain h-full'
                                    style={{ maxWidth: '120px' }}
                                    alt={item.name + (i + 1)}
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}