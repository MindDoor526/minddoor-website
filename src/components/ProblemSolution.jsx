import React from "react";

const ProblemSolution = () => {
    return(
        <div className="mt-20">
            <div className="text-center mb-10">
                <p className="text-7xl text-blue-600 font-bold">Feeling lost or overwhelmed ?</p>
            </div>
            <div className="flex flex-wrap items-center justify-between">
                <div className="flex flex-col justify-center items-center h-70 w-70 ">
                    <div className="">
                        <img src="/assets/discover.svg" className="w-25 h-25"/>
                    </div>
                    <div className="text-center text-4xl">
                        <p>Discover meaningful activities based on your mood</p>
                    </div>
                </div>

                <div className="flex flex-col justify-center items-center h-70 w-70 ">
                    <div className="">
                        <img src="/assets/journal.svg" className="w-25 h-25"/>
                    </div>
                    <div className="text-center text-4xl">
                        <p>Maintain a journal, for reflection, available across all devices</p>
                    </div>
                </div>

                <div className="flex flex-col justify-center items-center  h-70 w-70 ">
                    <div className="">
                        <img src="/assets/paintbrush.svg" className="w-25 h-25"/>
                    </div>
                    <div className="text-center text-4xl">
                        <p>Track hobbies and habits that nurture your wellbeing</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ProblemSolution