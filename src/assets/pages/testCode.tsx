import { useState } from 'react'


function TestCode () {
    const [Users, SetUser] = useState([
    {
        id : 0,
        name: "",
        age: 0,
    }
    ])

    function AddUser(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault(); // Pindahkan preventDefault ke awal
        const name = e.currentTarget.elements.namedItem("name") as HTMLInputElement;
        const age = e.currentTarget.elements.namedItem("age") as HTMLInputElement;
    
        SetUser([...Users, {
            id: Users.length,
            name: name.value,
            age: parseInt(age.value),
        }]);}
    return (
        <>
        <form action="" onSubmit={AddUser}>
        <input type="text" name="name" placeholder='Enter Your Name' />
        <input type="number" name="age" placeholder='Enter Your Age' />
        <button type="submit" style={{backgroundColor:"red"}}>
            Submit
        </button>
        </form> 

        <div>
            {Users.map((user) => (
                <div key={user.id}>
                    <p style={{color:"white"}}>{user.id}</p>
                    <p style={{color:"white"}}>{user.name}</p>
                    <p style={{color:"white"}}>{user.age}</p>
                    <button onClick={() => SetUser(Users.filter((user) => user.id !== user.id))} style={{backgroundColor:"red"}}>Delete</button>
                </div>
            ))}
        </div>
        </>
    )

}
export default TestCode