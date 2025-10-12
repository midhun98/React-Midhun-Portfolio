import profile_pic from "./assets/images/midhun_profile_pic.jpg";

function Hero() {
    return (
        <div className="hero min-h-screen  bg-base-200">
            <div className="flex justify-center items-center flex-col lg:flex-row gap-4 container">
                <img
                    src={profile_pic}
                    className="rounded-full shadow-2xl w-48"
                />
                <div>
                    <h1 className="text-5xl font-bold">Hi, I'm Midhun</h1>
                    <p className="py-6">
                        A passionate web developer with a focus on creating innovative and user-friendly web applications. I specialize in front-end
                        and back-end development, delivering high-quality solutions tailored to meet client needs.
                    </p>
                    <button className="btn btn-primary">View Projects</button>
                </div>
            </div>
        </div>
    )
}

export default Hero;