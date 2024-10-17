import React from "react";

export const Shimmer = () => {
    return (
        <div className="flex flex-wrap justify-center">
            {Array(50).fill("").map((e, index) => (
                <div
                    className="w-full sm:w-[14.5rem] h-[12rem] bg-slate-300 rounded-lg m-2"
                    key={index}
                >
                    <div className="flex flex-col sm:flex-row items-center sm:items-start">
                        <div className="h-[4rem] w-[4.5rem] rounded-full bg-slate-50 mt-4 sm:mt-12 sm:ml-2"></div>
                        <div className="flex flex-col mt-4 sm:mt-12">
                            <div className="w-3/4 sm:w-[8rem] h-4 rounded-xl bg-slate-50 mt-2 sm:mt-3 sm:ml-3"></div>
                            <div className="w-4/5 sm:w-[8rem] h-4 rounded-xl bg-slate-50 mt-2 sm:mt-2 sm:ml-2"></div>
                            <div className="w-full sm:w-[8rem] h-4 rounded-xl bg-slate-50 mt-2 sm:mt-2 sm:ml-4"></div>
                            <div className="w-3/4 sm:w-[8rem] h-4 rounded-xl bg-slate-50 mt-2 sm:mt-2 sm:ml-2"></div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export const WatchPageShimmer = () => {
    return (
        <div className="flex justify-center">
            {Array(1).fill("").map((e, index) => (
                <div
                    className="w-full sm:w-[26rem] h-[31rem] bg-slate-300 rounded-lg m-2"
                    key={index}
                ></div>
            ))}
        </div>
    );
};

export const CommentShimmer = () => {
    return (
        <div className="flex flex-col items-center">
            {Array(3).fill("").map((e, index) => (
                <div
                    className="w-full sm:w-[30rem] h-[7.5rem] bg-slate-300 rounded-xl m-4 sm:ml-4"
                    key={index}
                >
                    <div className="flex items-center">
                        <div className="h-10 w-10 rounded-2xl bg-slate-50 mt-4 mx-4"></div>
                        <div className="flex flex-col mt-4">
                            <div className="w-3/4 sm:w-[22rem] h-4 rounded-xl bg-slate-50 mt-1"></div>
                            <div className="w-3/4 sm:w-[22rem] h-4 rounded-xl bg-slate-50 mt-3"></div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export const VideoInfoShimmer = () => {
    return (
        <div className="flex flex-col items-center">
            {Array(1).fill("").map((e, index) => (
                <div
                    className="w-full sm:w-[50rem] h-[15rem] bg-slate-300 rounded-xl m-4"
                    key={index}
                >
                    <div className="flex flex-col sm:flex-row items-center sm:items-start">
                        <div className="w-3/4 sm:w-[30rem] h-5 rounded-xl bg-slate-50 mt-4 mx-4">
                            <div className="w-full sm:w-[40rem] h-5 rounded-xl bg-slate-50 mt-3"></div>
                            <div className="w-full sm:w-[35rem] h-5 rounded-xl bg-slate-50 mt-3"></div>
                            <div className="w-full sm:w-[43rem] h-5 rounded-xl bg-slate-50 mt-3"></div>
                            <div className="w-full sm:w-[38rem] h-5 rounded-xl bg-slate-50 mt-3"></div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};
