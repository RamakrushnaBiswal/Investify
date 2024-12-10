import { Button } from '@mui/material'
const OenAcc=()=>{
    return(
        <>
            <div className="flex flex-col mt-36 justify-center items-center opacity-90 gap-5">
                <h1 className='text-4xl text-slate-700 font-medium'>Open a Zerodha account</h1>
                <p className='text-slate-700 text-md'>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
                <Button variant="contained" className='w-60 h-11' sx={{fontSize:"20px"}} >Sign Up for free</Button>
            </div>
        </>
    )
}

export default  OenAcc