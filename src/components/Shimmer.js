import React from "react";

export const Shimmer = () => {
    return (
        <div className="flex flex-wrap">
            {Array(50).fill("").map((e, index) => (
                <div
                    className="sm:w-[17.5rem] h-[15rem] bg-slate-300 rounded-lg m-2"
                    key={index}
                >
                    <div className="flex">
                        <div className="h-[4rem] w-[4.5rem] rounded-full bg-slate-50 mt-16 ml-4"></div>
                        <div className="mt-16">
                            <div className="sm:w-[9rem] h-4 rounded-xl bg-slate-50 mt-5 ml-5"></div>
                            <div className="sm:w-[10rem] h-4 rounded-xl bg-slate-50 mt-3 ml-3"></div>
                            <div className="sm:w-[10rem] h-4 rounded-xl bg-slate-50 mt-3 ml-6"></div>
                            <div className="sm:w-[10rem] h-4 rounded-xl bg-slate-50 mt-3 ml-2"></div>
                            {/* <div className="w-[13rem] h-4 rounded-xl bg-slate-50 mt-3 mr-2"></div> */}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export const WatchPageShimmer = () => {
    return (
        <div className="flex flex-wrap">
            {Array(1).fill("").map((e, index) => (
                <div
                    className="sm:w-[26rem] h-[31rem] bg-slate-300 rounded-lg m-2"
                    key={index}
                ></div>
            ))}
        </div>
    );
};

export const CommentShimmer = () => {
    return (
        <div className="flex flex-col flex-wrap">
            {Array(3).fill("").map((e, index) => (
                <div
                    className="sm:w-[30rem] h-[7.5rem] bg-slate-300 rounded-xl m-4 ml-[9rem]"
                    key={index}
                >
                    <div className="flex">
                        <div className="h-10 w-10 rounded-2xl bg-slate-50 mt-8 m-4"></div>
                        <div className="sm:w-[22rem] h-4 rounded-xl bg-slate-50 mt-7">
                            <div className="sm:w-[22rem] h-4 rounded-xl bg-slate-50 mt-7"></div>
                            <div className="sm:w-[22rem] h-4 rounded-xl bg-slate-50 mt-3"></div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export const VideoInfoShimmer = () => {
    return (
        <div className="flex flex-col flex-wrap">
            {Array(1).fill("").map((e, index) => (
                <div
                    className="sm:w-[50rem] h-[15rem] bg-slate-300 rounded-xl m-4 ml-[4rem]"
                    key={index}
                >
                    <div className="flex">
                        <div className="w-[30rem] h-5 rounded-xl bg-slate-50 mt-7 ml-7">
                            <div className="sm:w-[40rem] h-5 rounded-xl bg-slate-50 mt-7 ml-4"></div>
                            <div className="sm:w-[35rem] h-5 rounded-xl bg-slate-50 mt-3 ml-8"></div>
                            <div className="sm:w-[43rem] h-5 rounded-xl bg-slate-50 mt-4 ml-3"></div>
                            <div className="sm:w-[38rem] h-5 rounded-xl bg-slate-50 mt-3 ml-7"></div>
                            <div className="sm:w-[38rem] h-5 rounded-xl bg-slate-50 mt-3 ml-4"></div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

