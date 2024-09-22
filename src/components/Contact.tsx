import Heading from "./Heading";
import { db } from "../firebaseconfig";
import { addDoc, collection} from "firebase/firestore";
import { useState } from "react";
import toast from "react-hot-toast";

function Contact() {
   const [name,setname]=useState('');
   const [contact,setcontact]=useState('');
   const [message,setmessage]=useState('');
   const [showSpinner,setShowSpinner]=useState(false);
   async function contactHandler(){
        try{
            if(name.trim().length===0 || contact.trim().length===0 || message.trim().length===0){
                throw "Please fill all the fields";
            }
            else{
                setShowSpinner(true);
                await addDoc(collection(db, "messages"), {
                    name: name,
                    contact: contact,
                    message: message
                });
                toast.success("Will get back to you soon!");
                setShowSpinner(false);
                setname('');
                setcontact('');
                setmessage('');
                return;
            }
        }
        catch(error:any){
            setShowSpinner(false);
            toast.error(error);
            return;
        }
   }
    return (
        <div>
            <div>
                <Heading title="CONTACT" />
            </div>
            <div className="mt-5 flex gap-4 w-full flex-wrap justify-center">
                <div className="w-full sm:w-[45%] flex items-center gap-3 p-4 rounded-xl bg-orange-200">
                    <div><div className="w-[20px] h-[20px]"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <defs>
                            <linearGradient id="customGradient" x1="0%" y1="0%" x2="100%" y2="100%">

                                <stop offset="0%" style={{ stopColor: "#FF9C1A", stopOpacity: 1 }} />
                                <stop offset="100%" style={{ stopColor: "#EC1B09", stopOpacity: 1 }} />
                            </linearGradient>
                        </defs>
                        <path fill="url(#customGradient)" d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" /></svg></div></div>
                    <div className="font-semibold">
                        <div className="text-slate-500">Phone</div>
                        <div>+91 7840038058</div>
                    </div>
                </div>
                <div className="w-full sm:w-[45%] flex items-center gap-3 p-4 rounded-xl bg-custom-blue">
                    <div><div className="w-[20px] h-[20px]"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <defs>
                            <linearGradient id="customGradient" x1="0%" y1="0%" x2="100%" y2="100%">

                                <stop offset="0%" style={{ stopColor: "#FF9C1A", stopOpacity: 1 }} />
                                <stop offset="100%" style={{ stopColor: "#EC1B09", stopOpacity: 1 }} />
                            </linearGradient>
                        </defs>
                        <path fill="url(#customGradient)" d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" /></svg></div></div>

                    <div className="font-semibold">
                        <div className="text-slate-500">Email</div>
                        <div>atul250603@gmail.com</div>
                    </div>
                </div>
            </div>
            <div className="mt-5 bg-custom-blue p-4 rounded-xl flex justify-center">
                <div>
                <div className="text-lg">I am always open to discussing <span className="font-bold">new projects, partnerships and opportunities in tech world.</span></div>
                <div>
                    <div className="mt-4">
                        <div className="mb-2 font-semibold">Name</div>
                        <div className="w-full"><input className="w-full p-2 border-b border-b-slate-300 outline-none" value={name} onChange={(e)=>setname(e.target.value)} type="text" name="name"/></div>
                    </div>
                    <div className="mt-4">
                        <div className="mb-2 font-semibold">Where to contact you? (Email / Ph No.)</div>
                        <div className="w-full"><input className="w-full p-2 border-b border-b-slate-300 outline-none" value={contact} onChange={(e)=>setcontact(e.target.value)} type="text" name="contact"/></div>
                    </div>
                    <div className="mt-4">
                        <div className="mb-2 font-semibold">Message</div>
                        <div className="w-full"><input className="w-full p-2 border-b border-b-slate-300 outline-none" value={message} onChange={(e)=>setmessage(e.target.value)} type="text" name="message"/></div>
                    </div>
                    <div className="flex justify-center mt-4 items-center">
                        <div className={`flex justify-center h-full items-center bg-gradient-to-r from-custom-yellow to-custom-red p-2 rounded-full ${(showSpinner)?"opacity-50 cursor-not-allowed":"opacity-100 cursor-pointer"}`}>
                            
                            {(showSpinner)?<div className=" flex items-center justify-center text-center">
                                <svg aria-hidden="true" role="status" className="inline w-4 h-4 me-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
                                </svg>
                            </div>:<></>}
                            
                            <div className="text-white font-semibold" onClick={contactHandler}>Submit</div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;