function Contact() {
    return (
        <section className="min-h-screen bg-base-200" id="contact">
            <div className="container">

                <div className="py-8 lg:py-16 max-w-screen-lg">
                    <h2 className="mb-4 text-2xl tracking-tight font-extrabold ">Contact Me</h2>
                    <p className="mb-8 lg:mb-16 font-light">Have a project in mind or just want to say hi? I’d love to hear from you.
                        Whether it’s feedback, collaboration, or a quick tech chat — drop me a message!</p>
                    <form action="#" className="space-y-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium">Your email</label>
                                <input type="email" id="email"
                                       className="shadow-sm border text-sm rounded-lg block w-full p-2.5"
                                       placeholder="Enter your email" required/>
                            </div>
                            <div>
                                <label htmlFor="phone" className="block mb-2 text-sm font-medium">Your Phone</label>
                                <input type="number" id="phone"
                                       className="shadow-sm border text-sm rounded-lg block w-full p-2.5"
                                       placeholder="Enter your phone" required/>
                            </div>
                        </div>

                        <div>
                            <label htmlFor="subject" className="block mb-2 text-sm font-medium">Subject</label>
                            <input type="text" id="subject"
                                   className="shadow-sm border text-sm rounded-lg block w-full p-2.5"
                                   placeholder="Let us know how we can help you" required/>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="message" className="block mb-2 text-sm font-medium ">Your message</label>
                            <textarea id="message" rows="6"
                                      className="block p-2.5 w-full text-sm  rounded-lg shadow-sm border"
                                      placeholder="Leave a comment..."></textarea>
                        </div>
                        <button type="submit"
                                className="btn btn-primary">Send
                            message
                        </button>
                    </form>
                </div>
            </div>

        </section>
    )
}

export default Contact