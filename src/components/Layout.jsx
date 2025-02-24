import { useState } from "react"
import Modal from "./Modal"
import Authentication from "./Authentication"
import { userAuth } from "../context/AuthContext"


export default function Layout(props){
    const {children}= props

    const [showModal,setShowModal]=useState(false)

    const {globalUser,logout}=userAuth()

    const header =(     
        <header>
            <div>
                <h1 className="text-gradient">CAFFIEND</h1>
                <p>For Coffee Instiates</p>
            </div>
            { globalUser ? (<button onClick={logout}>
                <p>Logout</p>
                </button>):
                (<button onClick={() => {setShowModal(true)}}>
                <p>Sign up free</p>
                <i className="fa-solid fa-mug-hot"></i>
            </button>
            )}
        </header>
    )

    const footer=(
        <footer>
            <p><span className="text-gradient">Caffiend</span> was made by 
            <a target ="blank" href="/"> Srikar Yekabote</a> <br />using the <a target="blank" href="https://www.fantacss.smoljames.com" 
            > FantaCSS </a> design library. <br />
            Check out the project on <a target='blank' href="https://github.com/Srikar-Yekabote/Caffiend-Coffee-Tracker-">GitHub</a>!</p>
        </footer>
    )

    function handleCloseModal(){
        setShowModal(false)
    }
    return(
        <>
            {showModal && (
                <Modal handleCloseModal={handleCloseModal}>
                    <Authentication handleCloseModal={handleCloseModal}/>
                </Modal>)}
            {header}
            <main>
                {children}
            </main>
            {footer}
        </>
    )
}