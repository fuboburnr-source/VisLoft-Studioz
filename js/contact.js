
const params=new URLSearchParams(location.search);
const space=params.get('space'),professional=params.get('professional');
if(space){document.getElementById('inquiry_type').value='Space rental';document.getElementById('space').value=space;}
if(professional){document.getElementById('inquiry_type').value='Professional';document.getElementById('professional').value=professional;}
const form=document.getElementById('inquiry-form'),status=document.getElementById('form-status'),submit=form.querySelector('button[type=submit]');
form.addEventListener('submit',async e=>{
  e.preventDefault(); status.className='form-status';status.textContent='Sending…';submit.disabled=true;
  const data=Object.fromEntries(new FormData(form).entries());
  try{
    const r=await fetch('api/contact.php',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(data)});
    const out=await r.json().catch(()=>({}));
    if(!r.ok||!out.ok) throw new Error(out.message||'Unable to send');
    status.className='form-status success';status.textContent='Thanks — your inquiry has been received. Visloft will follow up after availability is reviewed.';
    form.reset();
  }catch(err){
    status.className='form-status error';
    status.textContent=location.protocol==='file:'?'The inquiry form becomes active once the website is live.':'Your inquiry could not be sent. Please try again or email Visloft00@gmail.com.';
  }finally{submit.disabled=false}
});
