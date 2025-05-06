const Buttons = () => {
   const handleClick = () => {
      const input = document.querySelector("input");
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

      if (emailPattern.test(input.value)) {
         document.querySelector(".error-message").style.display = "none";
         input.classList.remove("invalid")
      } else {
         document.querySelector(".error-message").style.display = "block";
         input.classList.add("invalid")
      }
   }

   return (
      <div className="email-form">
         <input type="email" placeholder="Your email address..." />
         <button onClick={handleClick}>Notify Me</button>
         <p className="error-message">Please provide a valid email address</p>
      </div>
   )
}

export default Buttons;