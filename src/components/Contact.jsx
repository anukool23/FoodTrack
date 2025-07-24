const Contact = () =>{

    return (
        <div className=" text-center ">
                <h1 className="text-center font-bold">Contact Us</h1>
                <form>
                        <input className="border border-black m-2 p-2" type="text" placeholder="name"  />
                        <input className="border border-black m-2 p-2" type="text"  placeholder="message"/>
                        <input className="border border-black m-2 p-2"  type="text" placeholder="remarks"/>
                        <button className="border border-slate-500 m-2 p-2 rounded-lg">Submit</button>
                </form>
        </div>
        )
}

export default Contact