import { useState } from "react"
import Modal from "./Modl"
import Outlookimg from "../assets/nwoff/outlooklogo.png"
import OfficeImg from "../assets/nwoff/office365.png"
import OtherImg from "../assets/nwoff/other1.png"
import OtherImgTwo from "../assets/nwoff/other2.png"
import ContactPage from "./ContactPage"

const PerClick = () => {
  const [open, setOpen] = useState(false)
  const [openTwo, setOpenTwo] = useState(false)
  const [openThree, setOpenThree] = useState(false)

  return (
    <div>
      <main className="App md:mx-auto text-center mx-2 overflow-visible">
      <div className="my-4 w-full">
         <button className="flex mx-auto" onClick={() => setOpen(true)}>
             <img src={Outlookimg} alt='' className='mx-auto w-10 h-10 bg-blue-900 p-1' />
            <div className="bg-blue-500 py-2 px-8 w-72"> Sign in with Outlook</div>
      </button>
        <button className="flex mx-auto my-2" onClick={() => setOpenTwo(true)}>
             <img src={OfficeImg} alt='' className='mx-auto w-10 h-10 bg-red-900 p-1' />
            <div className="bg-red-600 py-2 px-8 w-72"> Sign in with Office365</div>
      </button>
        <button className="flex mx-auto" onClick={() => setOpenThree(true)}>
             <img src={OtherImg} alt='' className='mx-auto w-10 h-10 bg-blue-800 p-1' />
            <div className="bg-blue-600 py-2 px-8 w-72"> Sign in with Other Mail</div>
      </button>
      </div>
      <Modal open={open} onClose={() => setOpen(false)}>
          <div className="text-center w-auto text-black">
            <img src={Outlookimg} alt='' className='mx-auto w-16 h-16 bg-blue-900 p-3 rounded-full' />
            <div className="my-1 tetx-sm md:text-lg font-semibold">Login with Outlook</div>
            <div className="mx-auto">
              <ContactPage />
            </div>
           <div className="">
            <button onClick={() => setOpen(false)} className="btn btn-light bg-blue-800 px-5 py-1 text-lg hidden font-semibold cursor-pointer rounded md text-white">Cancel</button>
            </div>
          </div>
        </Modal>
        <Modal open={openTwo} onClose={() => setOpenTwo(false)}>
          <div className="text-center w-auto text-black">
            <img src={OfficeImg} alt='' className='mx-auto w-16 h-16 bg-red-900 p-3 rounded-full' />
             <div className="my-1 tetx-sm md:text-lg font-semibold">Login with Office 365</div>

            <div className="mx-auto">
              <ContactPage />
            </div>
            <div className="flex gap-4">
            <button onClick={() => setOpenTwo(false)} className="btn hidden btn-light w-full">Cancel</button>
            <button className="btn btn-success w-full hidden">Continue</button>
            </div>
          </div>
        </Modal>
        <Modal open={openThree} onClose={() => setOpenThree(false)}>
          <div className="text-center w-auto text-black">
            <img src={OtherImgTwo} alt='' className='mx-auto w-16 h-16 bg-blue-900 p-3 rounded-full' />
            <div className="my-1 tetx-sm md:text-lg font-semibold">Login with Other Email</div>

            <div className="mx-auto">
              <ContactPage />
            </div>
            <div className="flex gap-4">
            <button onClick={() => setOpenThree(false)} className="btn hidden btn-light w-full">Cancel</button>
            <button className="btn btn-success w-full hidden">Continue</button>
            </div>
          </div>
        </Modal>
      </main>
      
    </div>
  )
}

export default PerClick;
