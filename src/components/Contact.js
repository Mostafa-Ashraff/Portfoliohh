import emailjs from "emailjs-com";

const Contact = () => {
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_dwj70ed', 'template_xw02j2r', e.target, 'htpn2xmCCzpjrG7zg')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    };
    
    
    return ( 
        <>
            <section className="contact">
                <h2 className="section-hd">Contact</h2>
                <form className="container form" action="post" onSubmit={sendEmail}>
                    <input type="text" placeholder="Name"/>
                    <input type="email" name="email" id="email" placeholder="Email" />
                    <input type="text" placeholder="Subject" name="subject"/>
                    <textarea type="text" name="message" id="message" placeholder="Message"></textarea>
                    <input type="submit" value="Send" />
                </form>
            </section>
        </>
    );
}

export default Contact;

//                   