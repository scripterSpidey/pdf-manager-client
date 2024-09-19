import { useState } from 'react';
import { Document, Page } from 'react-pdf';
import AppButton from './elements/AppButton';
import toast from 'react-hot-toast';

type PDFComponentProps = {
    pdf: File
}

function PDFComponent({ pdf }: PDFComponentProps) {

    const [numPages, setNumPages] = useState<number>();
    const [selectedPages, setSelectedPages] = useState<Set<number>>(new Set())

    const handlePageSelect = (pageNumber: number) => {
        const newSet = new Set(selectedPages);
        if (newSet.has(pageNumber)) {
            newSet.delete(pageNumber)
        } else {
            newSet.add(pageNumber)
        }
        setSelectedPages(newSet)
    }

    const handleFileSubmit = () => {
        if(selectedPages.size == 0) return toast.error('Select atleast one page to create new pdf.');
        
    }

    return (
        <div className='flex flex-col  items-center'>
            <AppButton click={handleFileSubmit} className='' text='create' />
            <Document
                file={pdf}
                onLoadSuccess={({ numPages }) => setNumPages(numPages)}
                className='flex justify-center  flex-wrap'>
                {Array.from(new Array(numPages), (_, ind) => (
                    <div key={ind} className={`flex flex-col p-2 items-center ${selectedPages.has(ind) && 'p-0 border-8 border-primary-color'} `}>
                        <Page
                            onClick={() => handlePageSelect(ind)}
                            width={300}
                            pageNumber={ind + 1}
                            renderAnnotationLayer={false}
                            renderTextLayer={false} />
                        <p className='text-black text-sm w-full text-center bg-white'> {ind + 1} / {numPages}</p>
                    </div>
                ))}
            </Document>

        </div>
    );
}

export default PDFComponent