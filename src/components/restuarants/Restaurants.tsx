import React from 'react';
import restaurantsData from '../../../public/data/restaurantsData.json';

export default function Restaurants() {

    return (
        <section>
            <div className="grid grid-cols-2">
                {restaurantsData.restaurants.map((item, index) => (
                    <div key={index} className='border border-gray-700 p-12 2xl:p-16'>
                        <p className="font-semibold text-3xl opacity-50 mb-5 mx-4">{item.name}</p>
                        <div className='flex flex-row justify-between items-center overflow-hidden h-32 px-4'>
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