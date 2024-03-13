import React from 'react';
import './../styles/About.scss';

function About() {

  const features = [
    {head:"Effortless Conversion",desc:"Convert extensive patient data into aligned, message-style text with just one click."},
    {head:"Copy and Share",desc:"Easily copy the formatted data and share it via WhatsApp or other communication platforms."},
    {head:"Time-Saving",desc:"Accelerate your communication process by eliminating the need for manual data formatting."},
    {head:"Versatile Data Export",desc:"Generate patient data in multiple formats such as PDF, Excel, or JSON."},
    {head:"Date Range Downloads",desc:"Download data within specific date ranges, providing you with the flexibility to access the information you need."},
  ]

  const works = [
    {head:"Input Data",desc:"Enter patient details into the application."},
    {head:"Copy and Share",desc:"Copy the generated message and share it on your preferred messaging platform."},
    {head:"Export Data",desc:"Choose from various export formats, including PDF, Excel, or JSON."},
    {head:"Date Range Downloads",desc:"Specify date ranges to download data within specific dates."}
  ]
  return (
    <>
    <div className='aboutCont'>
      <div className='abtTop'>

        <h3>About</h3>
        <p>This tool helps in the process of converting patient data records into a neatly formatted text message.
          And the Recods can also be extracted as PDF/EXCEL/JSON formats.
        </p>
        <div className='works'>
        <h3>How It Works</h3>
        {works?.map((el,ind)=> <p><span>{ind+1}. {el.head}:</span> {el.desc}</p>)}
      </div>
      </div>
      <div className='abtBottom'>
        <h3>Features</h3>
        {features?.map(el=> <p><span>{el.head}:</span> {el.desc}</p>)}
      </div>
    </div>
      <div className='contactCont'>
        <h3>Contact</h3>
        <div className='icons'>
          <a href={"https://www.linkedin.com/in/nrmd-naveen/"} >        
          <svg href={"https://www.linkedin.com/in/nrmd-naveen/"} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
          </svg>
          </a>
          <a href={"mailto:nrmdnaveenrajan@gmail.com"} > 
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
            <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z"/>
          </svg></a>
          <a href={"https://github.com/nrmd-naveen"} > 
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
          </svg></a>
          <a href={"https://t.me/nrmdnaveen"}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telegram" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.287 5.906q-1.168.486-4.666 2.01-.567.225-.595.442c-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294q.39.01.868-.32 3.269-2.206 3.374-2.23c.05-.012.12-.026.166.016s.042.12.037.141c-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8 8 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629q.14.092.27.187c.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.4 1.4 0 0 0-.013-.315.34.34 0 0 0-.114-.217.53.53 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09"/>
          </svg>
          </a>
        </div>
      </div>
    </>
  )
}

export default About