import styled from "styled-components"
import Link from 'next/link'


const Welcome =({className}:{className:string})=>{

    return(

        <div className={className}>
            <div className='flexC'>
                <Link href='/scdj-2303sd'> 
                    <button>Get Started</button>
                </Link>

            </div>

        </div>


    )


}


export default styled(Welcome)`

    background: url('welcome.jpeg');
    background-size: cover;
    width: 100%;
    min-height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    @media(min-width:700px){
        padding-top: 30%;
        display: block;
    }
    button{
        border-radius: 10px;
        padding: 0.8em 2em;
        min-height: 60px;
        font-size: 18px;
    }

    .flexC{
    }


`
