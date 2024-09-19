import React, { ChangeEvent } from 'react'

type AppInputProps = {
    selectFile :(e: ChangeEvent<HTMLInputElement>) => void;
}

const AppInput = ({selectFile}:AppInputProps) => {

    return (
        <div className="max-w-sm">
            <form>
                <label className="block">
                    <span className="text-white text-lg font-semibold">Select a PDF file</span>
                    <input
                        onChange={selectFile}
                        type="file"
                        accept='application/pdf'
                        className="block w-full text-sm text-gray-500
                        file:me-4 file:py-2 file:px-4
                        file:rounded-lg file:border-0
                        file:text-sm file:font-semibold
                        file:bg-primary-color file:text-white
                        hover:opacity-80"/>
                </label>
            </form>
        </div>
    )
}

export default AppInput