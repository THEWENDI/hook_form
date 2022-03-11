import React, {useState} from 'react'

const Form = () => {

    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [conpassword, setConpassword] = useState("");


    

    return (
        <div>
            <h1> HOOK FORM</h1>
            <form>
                <p><div>
                    <label> First Name : </label>
                    <input name="firstname" type="text" value={firstname} onChange={(e)=>setFirstname(e.target.value)}/>
                </div></p>
                <p><div>
                    <label> Last Name: </label>
                    <input name="lastname" type="text" value={lastname} onChange={(e)=>setLastname(e.target.value)}/>
                </div></p>
                <p><div>
                    <label> Email : </label>
                    <input name="email" type="text" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                </div></p>
                <p><div>
                    <label> Password : </label>
                    <input name="password" type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                </div></p>
                <p><div>
                    <label> Confirm Password : </label>
                    <input name="conpassword" type="password" value={conpassword} onChange={(e)=>setConpassword(e.target.value)}/>
                </div></p>
            </form>

            <h1> Your Form Data</h1>
            <p> First Name : {firstname}</p>
            <p> Last Name: {lastname}</p>
            <p> Email: {email}</p>
            <p> Password: {password}</p>
            <p> Confirm Password: {conpassword}</p>

        </div>
    )
}

export default Form