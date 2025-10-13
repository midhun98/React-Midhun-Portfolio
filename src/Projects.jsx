function Projects() {
    return (
        <section className="min-h-screen container" id='projects'>
            <div className=''>

                <h2 className="text-2xl font-bold pb-3 pt-5">Projects</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

                    <div className="mockup-browser border w-full">
                        <div className="mockup-browser-toolbar">
                            <div className="input">https://www.jayanthihospital.in</div>
                        </div>
                        <div className="grid place-content-center h-80 object-cover ">
                            <img src="https://res.cloudinary.com/dbzcqkvnj/image/upload/v1760279652/midhun%20website/jayanthi_hospital.png"
                                 alt='hospital image'/>
                        </div>
                        <div>
                            <div className="p-4 lg:pt-0">
                                <p className="text-base font-medium leading-normal">Jayanthi Hospital</p>
                                <p className="text-sm font-normal leading-normal">Website built for jayanthihospital.in using Django + Bootstrap and
                                    custom admin interface for managing billings</p>
                            </div>
                        </div>

                    </div>
                    <div className="mockup-browser border w-full">
                        <div className="mockup-browser-toolbar">
                            <div className="input">https://starbouncers.com/</div>
                        </div>
                        <div className="grid place-content-center h-80">
                            <img src="https://res.cloudinary.com/dbzcqkvnj/image/upload/v1760280949/midhun%20website/star_bouncers.png"
                                 alt='starbouncers image'/>
                        </div>
                        <div>
                            <div className="p-4 lg:pt-0">
                                <p className="text-base font-medium leading-normal">StarBouncers</p>
                                <p className="text-sm font-normal leading-normal">Website built for starbouncers.com using Django + Bootstrap</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Projects;