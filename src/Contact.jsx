import { useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
    const [showToast, setShowToast] = useState(false);
    const [errorToast, setErrorToast] = useState(false);
    const [isSending, setIsSending] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        const btn = document.getElementById("button");

        // ✅ Get all values by ID
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone_no").value.trim();
        const subject = document.getElementById("subject").value.trim();
        const message = document.getElementById("message").value.trim();

        // ✅ Validation: all fields required
        if (!email || !phone || !subject || !message) {
            setErrorToast(true);
            setTimeout(() => setErrorToast(false), 3000);
            return;
        }

        setIsSending(true);
        btn.value = "Sending...";

        const serviceID = "default_service";
        const templateID = "send_contact_email";
        const publicKey = "SCizPeEI2X81_6FG7";

        const form = document.getElementById("form");

        emailjs.sendForm(serviceID, templateID, form, publicKey).then(
            () => {
                btn.value = "Send Email";
                setIsSending(false);
                setShowToast(true);
                form.reset();
                setTimeout(() => setShowToast(false), 3000);
            },
            (err) => {
                console.error("Error sending message:", err);
                btn.value = "Send Email";
                setIsSending(false);
                setErrorToast(true);
                setTimeout(() => setErrorToast(false), 3000);
            }
        );
    };

    return (
        <section className="min-h-screen bg-base-200" id="contact">
            <div className="container">

                <div className="py-8 lg:py-16 max-w-screen-lg">
                    <h2 className="mb-4 text-2xl tracking-tight font-extrabold ">Contact Me</h2>
                    <p className="mb-8 lg:mb-16 font-light">Have a project in mind or just want to say hi? I’d love to hear from you.
                        Whether it’s feedback, collaboration, or a quick tech chat — drop me a message!</p>
                    <form id="form" onSubmit={sendEmail} className="space-y-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium">Your email</label>
                                <input type="email" id="email" name="email"
                                       className="shadow-sm border text-sm rounded-lg block w-full p-2.5"
                                       placeholder="Enter your email"/>
                            </div>
                            <div>
                                <label htmlFor="phone_no" className="block mb-2 text-sm font-medium">Your Phone</label>
                                <input type="number" id="phone_no" name="phone_no"
                                       className="shadow-sm border text-sm rounded-lg block w-full p-2.5"
                                       placeholder="Enter your phone"/>
                            </div>
                        </div>

                        <div>
                            <label htmlFor="subject" className="block mb-2 text-sm font-medium">Subject</label>
                            <input type="text" id="subject" name="subject"
                                   className="shadow-sm border text-sm rounded-lg block w-full p-2.5"
                                   placeholder="Let us know how we can help you"/>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="message" className="block mb-2 text-sm font-medium ">Your message</label>
                            <textarea id="message" name="message" rows="6"
                                      className="block p-2.5 w-full text-sm  rounded-lg shadow-sm border"
                                      placeholder="Leave a comment..."></textarea>
                        </div>

                        <input type="submit" id="button"
                               className="btn btn-primary"
                               value={isSending ? "Sending..." : "Send Email"}
                            disabled={isSending}
                        />
                    </form>
                </div>
            </div>

            {/* ✅ Success Toast */}
            {showToast && (
                <div className="toast toast-end">
                    <div className="alert alert-success">
                        <span>Message sent successfully.</span>
                    </div>
                </div>
            )}

            {/* ❌ Error Toast */}
            {errorToast && (
                <div className="toast toast-end">
                    <div className="alert alert-warning">
                        <span>Please fill in all fields correctly.</span>
                    </div>
                </div>
            )}
        </section>
    );
}

export default Contact;