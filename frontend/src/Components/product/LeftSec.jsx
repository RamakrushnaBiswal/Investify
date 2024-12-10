/* eslint-disable react/prop-types */
import gstoreimg from '../../assets/googlePlayBadge.svg'
import appstore from '../../assets/appstoreBadge.svg'
function LeftSec({ imgurl,name,description,learnmore,trydemo,gstore,appstor }) {
    return (
        <div className="flex w-full gap-28 px-48 py-32 justify-center items-center">
            <div className='w-1/2'>
                <img src={imgurl} alt="product" />  
            </div>
            <div className='w-2/5 flex flex-col justify-center'>
                <h1 className="text-4xl font-medium text-slate-700 mb-6">{name}</h1>
                <p className="text-lg text-slate-600">{description}</p>
                <div className="flex flex-col gap-4 mt-4">
                    <div className='flex gap-8'>
                    <a href={learnmore} className="text-blue-600">Learn More&#x2192;</a>
                    <a href={trydemo} className="text-blue-600">Try Demo&#x2192;</a>
                    </div>
                    <div className='flex gap-4'>
                    <a href={gstore} className=""><img src={gstoreimg} alt="" /></a>
                    <a href={appstor} className=""><img src={appstore} alt="" /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LeftSec