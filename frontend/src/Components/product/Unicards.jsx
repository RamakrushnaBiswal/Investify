/* eslint-disable react/prop-types */
function Unicards({imgUrl,desc}){
    return(
            <div className="flex flex-wrap justify-center text-center items-center mt-20">
                <img src={imgUrl} alt="img" className="w-40"/>
                <p className="text-sm font-normal text-slate-600 opacity-90">{desc}</p>
            </div>
    )
}

export default Unicards;