function Skills() {
    return (
        <section className="min-h-screen bg-base-200">
            <div className='container'>
                <h2 className="text-2xl font-bold pb-3 pt-5">Skills</h2>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 py-4">
                    <div className="flex items-center gap-3 rounded-lg border  p-4">
                        <img width="24" height="24" src="https://img.icons8.com/color/48/source-code.png" alt="source-code"/>
                        <h2 className="text-base leading-tight font-bold">Front-end Development</h2>
                    </div>
                    <div className="flex items-center gap-3 rounded-lg border  p-4">
                        <img width="24" height="24" src="https://img.icons8.com/color/48/python--v1.png" alt="python--v1"/>
                        <h2 className="text-base leading-tight font-bold">Back-end Development</h2>
                    </div>
                    <div className="flex items-center gap-3 rounded-lg border  p-4">
                        <img width="24" height="24" src="https://img.icons8.com/fluency/48/database--v1.png" alt="database--v1"/>
                        <h2 className="text-base leading-tight font-bold">Database Management</h2>
                    </div>
                    <div className="flex items-center gap-3 rounded-lg border  p-4">
                        <img width="24" height="24" src="https://img.icons8.com/office/30/cloud.png" alt="cloud"/>
                        <h2 className="text-base leading-tight font-bold">Cloud Services</h2>
                    </div>
                    <div className="flex items-center gap-3 rounded-lg border  p-4">
                        <img width="24" height="24" src="https://img.icons8.com/nolan/64/git.png" alt="git"/>
                        <h2 className="text-base leading-tight font-bold">Version Control</h2>
                    </div>
                </div>
                <h2 className="text-2xl font-bold">Front-end Development</h2>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 py-4">
                    <div className="flex items-center gap-3 rounded-lg border  p-4">
                        <img width="24" height="24" src="https://img.icons8.com/color/48/html-5--v1.png" alt="html-5--v1"/>
                        <h2 className="text-base leading-tight font-bold">HTML</h2>
                    </div>
                    <div className="flex items-center gap-3 rounded-lg border  p-4">
                        <img width="24" height="24" src="https://img.icons8.com/color/48/css3.png" alt="css3"/>
                        <h2 className="text-base leading-tight font-bold">CSS</h2>
                    </div>
                    <div className="flex items-center gap-3 rounded-lg border  p-4">
                        <img width="24" height="24" src="https://img.icons8.com/color/48/tailwind_css.png" alt="git"/>
                        <h2 className="text-base leading-tight font-bold">Tailwind CSS</h2>
                    </div>
                    <div className="flex items-center gap-3 rounded-lg border  p-4">
                        <img width="24" height="24" src="https://img.icons8.com/color/48/bootstrap--v2.png" alt="bootstrap--v2"/>
                        <h2 className="text-base leading-tight font-bold">Tailwind CSS</h2>
                    </div>

                    <div className="flex items-center gap-3 rounded-lg border  p-4">
                        <img width="24" height="24" src="https://img.icons8.com/color/48/javascript--v1.png" alt="javascript--v1"/>
                        <h2 className="text-base leading-tight font-bold">JS</h2>
                    </div>
                    <div className="flex items-center gap-3 rounded-lg border  p-4">
                        <img width="24" height="24" src="https://img.icons8.com/office/30/react.png" alt="react"/>
                        <h2 className="text-base leading-tight font-bold">React</h2>
                    </div>
                </div>
                <h2 className="text-2xl font-bold">Back-end Development</h2>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 py-4">
                    <div className="flex items-center gap-3 rounded-lg border  p-4">
                        <img width="24" height="24" src="https://img.icons8.com/color/48/python--v1.png" alt="python--v1"/>
                        <h2 className="text-base leading-tight font-bold">Python</h2>
                    </div>
                    <div className="flex items-center gap-3 rounded-lg border  p-4">
                        <img width="24" height="24" src="https://img.icons8.com/color/48/django.png" alt="django"/>
                        <h2 className="text-base leading-tight font-bold">Django</h2>
                    </div>
                    <div className="flex items-center gap-3 rounded-lg border  p-4">
                        <img width="24" height="24" src="https://fastapi.tiangolo.com/img/logo-margin/logo-teal.png" alt="django"/>
                        {/*<h2 className="text-base leading-tight font-bold">Django</h2>*/}
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Skills;