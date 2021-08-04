import styled from 'styled-components'

interface NavProps{
    padding?: string,
    margin?: string,
    className?: string,
    removeDefault?: string

}





export default styled.nav<NavProps>`
    
        display:flex;
        justify-content: space-between;
        padding: 1.5em 1em;

        @media(min-width:600px){
            padding: 1.5em;
        }
        @media(min-width:800px){
            padding: 1.5em 2.5em;
        }

        >div:nth-child(1){
            display: flex;
            align-items: center;
        }
        ${props=>!props.removeDefault && `
            >.elements{
                display: none;

                @media(min-width:700px){
                    display: flex;
                    >*{
                        margin-left: 1.5em;
                    }

                }
                
                @media(min-width:900px){
                    /* display: flex; */
                    >*{
                        margin-left: 2.5em;
                    }

                }
                

                
            }
            
        `}
 

`